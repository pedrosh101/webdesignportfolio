"use client";

import { useCallback, useState } from "react";
import { useLocale } from "next-intl";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { categories } from "@/lib/portfolio/data";
import type { Locale } from "@/lib/portfolio/types";
import ProjectView from "./ProjectView";
import AboutView from "./AboutView";
import NavList from "./NavList";
import SocialLinks from "./SocialLinks";
import MobileMenu from "./MobileMenu";

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
  inProgress: string;
  menu: string;
  close: string;
  social: { instagram: string; youtube: string; linkedin: string };
  about: { title: string; body: string };
};

function Tagline({
  tagline,
  saibaMais,
  onAbout,
}: {
  tagline: string;
  saibaMais: string;
  onAbout: () => void;
}) {
  return (
    <p className="text-sm leading-relaxed m-0 text-black/80">
      {tagline}
      <br />
      <button
        type="button"
        className="appearance-none bg-transparent border-none p-0 font-inherit text-sm text-black/80 cursor-pointer hover:italic"
        onClick={onAbout}
      >
        {saibaMais}
      </button>
    </p>
  );
}

export default function PortfolioClient({ copy }: { copy: Copy }) {
  const locale = useLocale() as Locale;
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  const [view, setView] = useState<View>({ type: "idle" });
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  function toggleCategory(key: string) {
    setExpandedCategory((current) => (current === key ? null : key));
  }

  function showView(next: View) {
    setView(next);
    setMenuOpen(false);
    window.scrollTo({ top: 0 });
  }

  const activeSlug = view.type === "project" ? view.slug : null;
  const activeProject = activeSlug
    ? categories.flatMap((c) => c.projects).find((p) => p.slug === activeSlug)
    : null;

  const navProps = {
    locale,
    expandedCategory,
    activeSlug,
    comingSoon: copy.comingSoon,
    onToggleCategory: toggleCategory,
    onSelectProject: (slug: string) => showView({ type: "project", slug }),
  };

  return (
    <div className="flex flex-col md:flex-row md:items-stretch gap-6 md:gap-10 m-5 min-h-[calc(100dvh-40px)] text-black">
      {/* Mobile: barra de topo com o botão do menu lateral */}
      <header className="flex items-center justify-between gap-4 md:hidden">
        <h1 className="text-base font-medium m-0">{copy.name}</h1>
        <button
          type="button"
          onClick={() => setMenuOpen(true)}
          aria-label={copy.menu}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          className="-mr-2 appearance-none bg-transparent border-none p-2 text-neutral-900 cursor-pointer"
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            aria-hidden="true"
          >
            <path d="M4 8h16M4 16h16" />
          </svg>
        </button>
      </header>

      {/* Mobile: apresentação só na home */}
      {view.type === "idle" && (
        <div className="md:hidden">
          <Tagline
            tagline={copy.tagline}
            saibaMais={copy.saibaMais}
            onAbout={() => showView({ type: "about" })}
          />
        </div>
      )}

      {/* Desktop: sidebar fixa */}
      <aside className="hidden md:flex flex-col w-85 shrink-0 h-[calc(100vh-40px)] sticky top-5 overflow-y-auto">
        <div className="flex flex-col gap-3">
          <div className="flex items-baseline justify-between gap-4">
            <h1 className="text-base font-medium m-0">{copy.name}</h1>
            <LanguageSwitcher />
          </div>

          <Tagline
            tagline={copy.tagline}
            saibaMais={copy.saibaMais}
            onAbout={() => showView({ type: "about" })}
          />
        </div>

        <NavList {...navProps} className="mt-6" />

        <SocialLinks social={copy.social} className="mt-auto pt-10" />
      </aside>

      <main className="flex-1 min-w-0">
        {view.type === "project" && activeProject && (
          <ProjectView
            project={activeProject}
            locale={locale}
            visitLabel={copy.visitProject}
            inProgressLabel={copy.inProgress}
          />
        )}

        {view.type === "about" && (
          <AboutView title={copy.about.title} body={copy.about.body} />
        )}
      </main>

      {/* Mobile: redes sociais no fim da página */}
      <footer className="md:hidden mt-auto pt-6">
        <SocialLinks social={copy.social} />
      </footer>

      {/* Mobile: menu lateral com idioma + navegação */}
      <MobileMenu
        open={menuOpen}
        onClose={closeMenu}
        title={copy.menu}
        closeLabel={copy.close}
        header={<LanguageSwitcher />}
      >
        <button
          type="button"
          onClick={() => showView({ type: "about" })}
          className={`appearance-none bg-transparent w-fit border-none py-2.5 text-left font-inherit text-base cursor-pointer ${
            view.type === "about"
              ? "text-black not-italic font-medium"
              : "text-neutral-900 hover:italic"
          }`}
        >
          {copy.about.title}
        </button>
        <NavList {...navProps} />
      </MobileMenu>
    </div>
  );
}
