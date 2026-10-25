"use client";

import { useState } from "react";
import { useLocale } from "next-intl";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { categories } from "@/lib/portfolio/data";
import { resolveLocalized, type Locale } from "@/lib/portfolio/types";
import ProjectView from "./ProjectView";
import AboutView from "./AboutView";

type View =
  | { type: "idle" }
  | { type: "about" }
  | { type: "project"; slug: string };

type Copy = {
  name: string;
  tagline: string;
  saibaMais: string;
  comingSoon: string;
  visitProject: string;
  social: { instagram: string; youtube: string; linkedin: string };
  about: { title: string; body: string };
};

export default function PortfolioClient({ copy }: { copy: Copy }) {
  const locale = useLocale() as Locale;
  const [expandedCategory, setExpandedCategory] = useState<string | null>(
    "websites",
  );
  const [view, setView] = useState<View>({ type: "idle" });

  function toggleCategory(key: string) {
    setExpandedCategory((current) => (current === key ? null : key));
  }

  function selectProject(slug: string) {
    setView({ type: "project", slug });
  }

  const activeProject =
    view.type === "project"
      ? categories.flatMap((c) => c.projects).find((p) => p.slug === view.slug)
      : null;

  return (
    <div className="flex flex-col md:flex-row md:items-stretch gap-10 m-5 min-h-[calc(100vh-40px)] text-black">
      <aside className="flex flex-col w-full md:w-85 md:shrink-0 md:h-[calc(100vh-40px)] md:sticky md:top-5 md:overflow-y-auto">
        <div className="flex flex-col gap-3">
          <div className="flex items-baseline justify-between gap-4">
            <h1 className="text-base font-medium m-0">{copy.name}</h1>
            <LanguageSwitcher />
          </div>

          <p className="text-sm leading-relaxed m-0 text-black/80">
            {copy.tagline}
            <br />
            <button
              type="button"
              className="appearance-none bg-transparent border-none p-0 font-inherit text-sm text-black/80 cursor-pointer hover:italic"
              onClick={() => setView({ type: "about" })}
            >
              {copy.saibaMais}
            </button>
          </p>
        </div>

        <nav className="flex flex-col gap-1 mt-6">
          {categories.map((category) => {
            const isOpen = expandedCategory === category.key;
            return (
              <div className="flex flex-col" key={category.key}>
                <button
                  type="button"
                  className={`appearance-none bg-transparent w-fit border-none py-1.5 text-left font-inherit text-base text-neutral-900 cursor-pointer ${
                    isOpen ? "not-italic font-medium" : "hover:italic"
                  }`}
                  aria-expanded={isOpen}
                  onClick={() => toggleCategory(category.key)}
                >
                  {resolveLocalized(category.label, locale)}
                </button>

                {isOpen && (
                  <ul className="list-none m-0 mb-2 pl-1 flex flex-col">
                    {category.projects.length > 0 ? (
                      category.projects.map((project) => {
                        const isActive =
                          view.type === "project" && view.slug === project.slug;
                        return (
                          <li key={project.slug}>
                            <button
                              type="button"
                              className={`appearance-none bg-transparent border-none w-full flex items-baseline justify-between gap-3 py-1 font-inherit text-[15px] cursor-pointer ${
                                isActive
                                  ? "text-[#b3402e] not-italic font-medium"
                                  : "text-[#4a473f] hover:italic hover:text-neutral-900"
                              }`}
                              onClick={() => selectProject(project.slug)}
                            >
                              <span>{resolveLocalized(project.title, locale)}</span>
                              <span className="text-[#8a8578] text-sm">
                                {project.year}
                              </span>
                            </button>
                          </li>
                        );
                      })
                    ) : (
                      <li className="py-1 text-sm text-[#8a8578]">
                        {copy.comingSoon}
                      </li>
                    )}
                  </ul>
                )}
              </div>
            );
          })}
        </nav>

        <div className="mt-auto flex gap-5 pt-6 md:pt-10 text-sm">
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-900 no-underline hover:italic"
          >
            {copy.social.instagram}
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-900 no-underline hover:italic"
          >
            {copy.social.youtube}
          </a>
          <a
            href="https://www.linkedin.com/in/pedrohenriquedasilvalima/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-900 no-underline hover:italic"
          >
            {copy.social.linkedin}
          </a>
        </div>
      </aside>
          
      <main className="flex-1 min-w-0">
        {view.type === "project" && activeProject && (
          <ProjectView
            project={activeProject}
            locale={locale}
            visitLabel={copy.visitProject}
          />
        )}

        {view.type === "about" && (
          <AboutView title={copy.about.title} body={copy.about.body} />
        )}


      </main>
    </div>
  );
}
