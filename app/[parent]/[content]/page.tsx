import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import GetContentParent from "@/components/GetContentParent";

const getPostContent = (parent: string, content: string) => {
  const folder = "contents/" + parent + "/subcontents/";
  const file = folder + content + ".md";
  const fileContent = fs.readFileSync(file, "utf-8");
  return matter(fileContent);
};

const PostPage = (props: any) => {
  const parent = props.params.parent;
  const content = props.params.content;
  const post = getPostContent(parent, content);
  return (
    <div>
      <main className="relative flex justify-center mx-auto max-w-8xl sm:px-2 lg:px-8 xl:px-12">
        <div className="flex-auto max-w-2xl min-w-0 px-4 py-10 lg:max-w-none lg:pr-0 lg:pl-8 xl:px-16">
          <article className="">
            <header className="">
              <p className="text-base font-medium text-slate-500">
                {GetContentParent(props.params.parent).title}
              </p>

              <h1 className="text-3xl font-bold tracking-tight text-slate-900">
                {post.data.title}
              </h1>
            </header>

            <p className="mt-2 text-xl text-slate-600">
              {post.data.description}
            </p>

            <div className="mt-8 prose prose-slate max-w-none prose-headings:font-semibold prose-headings:tracking-tight prose-lead:text-slate-500 prose-a:font-semibold prose-a:underline prose-pre:bg-slate-900">
              <Markdown>{post.content}</Markdown>
            </div>
          </article>

          <dl className="flex pt-6 mt-6 border-t border-slate-200">
            <div className="mr-auto text-left">
              <dt className="text-sm font-normal tracking-tight text-slate-600">
                Previous
              </dt>

              <dd className="mt-1">
                <a
                  href="#"
                  className="text-base font-semibold text-slate-900 hover:underline"
                >
                  Quick start guide
                </a>
              </dd>
            </div>

            <div className="ml-auto text-right">
              <dt className="text-sm font-normal tracking-tight text-slate-600">
                Next
              </dt>

              <dd className="mt-1">
                <a
                  href="#"
                  className="text-base font-semibold text-slate-900 hover:underline"
                >
                  What are content types?
                </a>
              </dd>
            </div>
          </dl>
        </div>
      </main>
    </div>
  );
};

export default PostPage;
