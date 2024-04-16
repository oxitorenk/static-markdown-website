import React from "react";
import { Metadata } from "next";
import "./globals.css";
import GetContentParents from "@/components/GetContentParents";
import { IContent } from "@/components/GetContents";
import { IContentParent } from "@/components/GetContentParent";

interface RootLayoutProps {
  children: React.ReactNode;
}

interface ContentListProps {
  contentData: IContent[];
}

interface SidebarProps {
  contentParents: IContentParent[];
}

const metadata: Metadata = {
  title: "Unity Atoms",
};

const HEADER_LOGO_URL = "https://unity-atoms.github.io/unity-atoms/img/atom-icon-pure-purple.png";

const Header = () => (
  <header className="sticky top-0 z-50 flex items-center justify-between px-3 py-2 border-b shadow-lg bg-white/90 backdrop-blur-sm border-slate-400/40">
    <a href="/" className="flex items-center space-x-1">
      <img
        src={HEADER_LOGO_URL}
        alt="unity atoms logo"
        className="h-full max-h-8"
      />
      <p className="text-lg font-semibold tracking-tight text-slate-900">
        Unity Atoms
      </p>
    </a>
  </header>
);

const ContentList: React.FC<ContentListProps> = ({ contentData }) => (
  <ul className="pl-3 mt-3 space-y-2">
    {contentData.map(({ slug, title }) => (
      <li key={slug}>
        <a href={`/${slug}`} className="text-slate-900 hover:text-slate-800">
          {title}
        </a>
      </li>
    ))}
  </ul>
);

const Sidebar: React.FC<SidebarProps> = ({ contentParents }) => (
  <nav className="sticky top-[4.5rem] w-64 pr-8 text-base lg:text-sm xl:w-72 xl:pr-16">
    <ul className="-ml-0.5 h-[calc(100vh-4.5rem)] overflow-y-auto py-7 pl-0.5 space-y-8">
      {contentParents.map(({ title, content }) => (
        <li key={title}>
          <h3 className="font-semibold tracking-tight text-slate-900">{title}</h3>
          <ContentList contentData={content.sort((a, b) => a.order - b.order)} />
        </li>
      ))}
    </ul>
  </nav>
);

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  const contentParents = GetContentParents()?.sort((a, b) => a.order - b.order) || [];

  return (
    <body>
      <Header />
      <main className="relative flex justify-center mx-auto max-w-8xl sm:px-2 lg:px-8 xl:px-12">
        <label htmlFor="navigation" className="fixed bottom-0 left-0 z-50 flex items-center justify-center w-12 h-12 mb-4 ml-4 bg-white border rounded-full shadow-lg cursor-pointer text-slate-600 border-slate-300 lg:hidden transition duration-200 ease-in-out active:scale-95" aria-label="Toggle Navigation">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
          </svg>
        </label>
        <input type="checkbox" name="navigation" id="navigation" className="hidden peer" />
        <div className="fixed top-[3.5rem] h-screen shadow-xl px-4 left-0 hidden peer-checked:block lg:relative lg:top-0 lg:h-auto lg:px-0 lg:block lg:flex-none lg:shadow-none">
          <div className="absolute inset-y-0 right-0 w-full lg:w-[50vw] bg-white lg:bg-slate-50"></div>
          <Sidebar contentParents={contentParents} />
        </div>
        {children}
      </main>
    </body>
  );
};

export default RootLayout;
export { metadata };
