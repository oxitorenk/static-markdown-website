import type { Metadata } from "next";
import React from "react";
import "./globals.css";
import GetContentParents from "@/components/GetContentParents";

export const metadata: Metadata = {
  title: "Unity Atoms",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const firstParent = GetContentParents().sort((a, b) => a.order > b.order ? 1 : -1)[0];
  const firstChild = firstParent.content.sort((a, b) => (a.order > b.order ? 1 : -1))[0];

  const header = (
    <header className="sticky top-0 z-50 flex items-center justify-between px-3 py-2 border-b shadow-lg bg-white/90 backdrop-blur-sm border-slate-400/40">
      <a href={"/" + firstChild.slug} className="flex items-center space-x-1">
        <img
          src="https://unity-atoms.github.io/unity-atoms/img/atom-icon-pure-purple.png"
          alt="unity atoms logo"
          className="h-full max-h-8"
        />
        <p className="text-lg font-semibold tracking-tight text-slate-900">
          Unity Atoms
        </p>
      </a>
    </header>
  );

  return (
    <body>
      {header}
      {children}
    </body>
  );
}
