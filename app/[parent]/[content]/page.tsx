import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import GetContentParent from "@/components/GetContentParent";
import GetContentParents from "@/components/GetContentParents";

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
  const parentData = GetContentParent(parent);
  const contentParents = GetContentParents().sort((a, b) =>
    a.order > b.order ? 1 : -1);
  const isFirstPage = parentData.order == 1 && post.data.order == 1;
  const isLastPage = parentData.order == contentParents.length && post.data.order == parentData.content.length;

  return (
    <div>
      <main className="relative flex justify-center mx-auto max-w-8xl sm:px-2 lg:px-8 xl:px-12">

      <label
        htmlFor="navigation"
        className="fixed bottom-0 left-0 z-50 flex items-center justify-center w-12 h-12 mb-4 ml-4 bg-white border rounded-full shadow-lg cursor-pointer text-slate-600 border-slate-300 lg:hidden transition duration-200 ease-in-out active:scale-95"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 8h16M4 16h16"
          />
        </svg>
      </label>

      <input
        type="checkbox"
        name="navigation"
        id="navigation"
        className="hidden peer"
      />
      <div className="fixed top-[3.5rem] h-screen shadow-xl px-4 left-0 hidden peer-checked:block lg:relative lg:top-0 lg:h-auto lg:px-0 lg:block lg:flex-none lg:shadow-none">
        <div className="absolute inset-y-0 right-0 w-full lg:w-[50vw] bg-white lg:bg-slate-50"></div>

        <nav className="sticky top-[4.5rem] w-64 pr-8 text-base lg:text-sm xl:w-72 xl:pr-16">
          <ul
            role="list"
            className="-ml-0.5 h-[calc(100vh-4.5rem)] overflow-y-auto py-7 pl-0.5 space-y-8"
          >
            {contentParents.map((parentData) => (
              <li>
                <h3 className="font-semibold tracking-tight text-slate-900">
                  {parentData.title}
                </h3>

                <ul role="list" className="pl-3 mt-3 space-y-2">
                  {parentData.content
                    .sort((a, b) => (a.order > b.order ? 1 : -1))
                    .map((contentData) => (
                      <li>
                        <a
                          href={"/" + contentData.slug}
                          className="text-slate-900 hover:text-slate-800"
                        >
                          {contentData.title}
                        </a>
                      </li>
                    ))}
                </ul>
              </li>
            ))}
          </ul>
        </nav>
      </div>

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

          {isFirstPage == false ? (
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
            </div> ) : (null)}

            {isLastPage == false ? (
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
            ): (null)}
            
          </dl>
        </div>
      </main>
    </div>
  );
};

export default PostPage;
