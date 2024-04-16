import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import GetContentParent from "@/components/GetContentParent";
import GetContentParents from "@/components/GetContentParents";
import GetContents from "@/components/GetContents";

const getContent = (parent: string, content: string) => {
  const folder = `contents/${parent}/subcontents/`;
  const file = `${folder}${content}.md`;
  const fileContent = fs.readFileSync(file, "utf-8");

  return matter(fileContent);
};

export const generateStaticParams = async () => {
  const parents = GetContentParents();
  const allSlugs = parents.flatMap((parent) =>
    parent.content.map((content) => ({
      parent: parent.slug,
      content: content.slug.split("/")[1],
    }))
  );

  return allSlugs;
};

const PostPage = (props: any) => {
  const { parent, content } = props.params;
  const post = getContent(parent, content);
  const parentData = GetContentParent(parent);
  const contentParents = GetContentParents().sort((a, b) => a.order - b.order);
  const relatedContents = parentData.content.sort((a, b) => a.order - b.order);
  const isFirstPage = parentData.order === 1 && post.data.order === 1;
  const isLastPage = parentData.order === contentParents.length && post.data.order === parentData.content.length;
  const nextContent = post.data.order === parentData.content.length && parentData.order !== contentParents.length 
    ? contentParents[parentData.order].content.sort((a, b) => a.order - b.order)[0]
    : relatedContents[post.data.order];
  const previousContent = post.data.order === 1 && parentData.order !== 1 
    ? contentParents[parentData.order - 2].content.slice(-1)[0]
    : relatedContents[post.data.order - 2];

  return (
    <div className="flex-auto max-w-2xl min-w-0 px-4 py-10 lg:max-w-none lg:pr-0 lg:pl-8 xl:px-16">
      <article>
        <header>
          <p className="text-base font-medium text-slate-500">{parentData.title}</p>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">{post.data.title}</h1>
        </header>
        <p className="mt-2 text-xl text-slate-600">{post.data.description}</p>
        <div className="mt-8 prose prose-slate max-w-none prose-headings:font-semibold prose-headings:tracking-tight prose-lead:text-slate-500 prose-a:font-semibold prose-a:underline prose-pre:bg-slate-900">
          <Markdown>{post.content}</Markdown>
        </div>
      </article>
      <dl className="flex pt-6 mt-6 border-t border-slate-200">
        {!isFirstPage && (
          <div className="mr-auto text-left">
            <dt className="text-sm font-normal tracking-tight text-slate-600">Previous</dt>
            <dd className="mt-1">
              <a href={`/${previousContent?.slug}`} className="text-base font-semibold text-slate-900 hover:underline">
                {previousContent?.title}
              </a>
            </dd>
          </div>
        )}
        {!isLastPage && (
          <div className="ml-auto text-right">
            <dt className="text-sm font-normal tracking-tight text-slate-600">Next</dt>
            <dd className="mt-1">
              <a href={`/${nextContent.slug}`} className="text-base font-semibold text-slate-900 hover:underline">
                {nextContent.title}
              </a>
            </dd>
          </div>
        )}
      </dl>
    </div>
  );
};

export default PostPage;
