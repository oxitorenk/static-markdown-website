import React from "react";

const QuickStartVideo = () => (
  <a
    href="https://www.youtube.com/watch?v=raQ3iHhE_Kk&ab_channel=Unity"
    target="_blank"
    className="flex flex-col w-full mt-4 overflow-hidden rounded-lg shadow-xl md:flex-row md:w-4/5"
  >
    <div className="flex items-center justify-center w-full px-4 py-16 text-sm font-normal md:w-1/3 text-slate-900/20 bg-gradient-to-br from-indigo-200 via-sky-100 to-indigo-100">
      <img
        src="https://unity.com/sites/default/files/styles/810_scale_width/public/2020-02/unity-scriptable-object-handling-player-death_0.jpg?itok=dfR_85Q-"
        alt=""
      />
    </div>

    <div className="w-full px-6 py-4 border-t border-b border-r md:w-2/3 border-slate-200">
      <h3 className="text-xl font-semibold tracking-tight text-slate-900">
        Game Architecture with Scriptable Objects
      </h3>

      <p className="mt-1 text-lg text-slate-600">
        Watch this GDC talk to understand the core ideas behind this plugin.
      </p>
    </div>
  </a>
);

const QuickAccessItem = ({href, title, description} : {href:string, title:string, description:string}) => (
  <li>
    <a
      href={href}
      className="block px-6 py-4 border rounded bg-slate-50 border-slate-100 hover:bg-white"
    >
      <h4 className="font-bold tracking-tight text-slate-900">{title}</h4>

      <p className="text-slate-600">{description}</p>
    </a>
  </li>
);

const Home = () => (
  <div className="flex-auto max-w-2xl min-w-0 px-4 py-10 lg:max-w-none lg:pr-0 lg:pl-8 xl:px-16">
    <article>
      <header>
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          Quick Start
        </h1>
      </header>

      <p className="mt-2 text-xl text-slate-600">
        Need to get started quickly with Unity Atoms? You will learn all the basics in just minutes.
      </p>

      <QuickStartVideo />

      <h3 className="mt-16 text-base font-bold tracking-tight text-slate-900">
        Quick Access
      </h3>

      <ul className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2">
        <QuickAccessItem
          href="/introduction/installation"
          title="Installation"
          description="Welcome to Unity Atoms! There are several ways to add Unity Atoms to your project. Learn how to install unity atoms to your project."
        />
        <QuickAccessItem
          href="/tutorials/creating-atoms"
          title="Creating Atoms"
          description="There are several ways of creating Atoms in your project. Learn how to create atoms and use them."
        />
        <QuickAccessItem
          href="/tutorials/generator"
          title="Generator"
          description="Almost any project will eventually have custom data or reference types. Learn how to create atoms from custom data."
        />
        <QuickAccessItem
          href="/subpackages/base-atoms"
          title="Base Atoms"
          description="Base set of Atoms based on Unity Atoms Core. Learn more about them."
        />
      </ul>
    </article>
  </div>
);

export default Home;
