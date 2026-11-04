"use client";

import { useCallback, useState, type ReactNode } from "react";
import { useLocale } from "next-intl";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { Link, usePathname } from "@/i18n/navigation";
import { categories } from "@/lib/portfolio/data";
import type { Locale } from "@/lib/portfolio/types";
import NavList from "./NavList";
import SocialLinks from "./SocialLinks";
import MobileMenu from "./MobileMenu";

type Copy = {
  name: string;
  tagline: string;
  saibaMais: string;
  comingSoon: string;
  menu: string;
  close: string;
  aboutLabel: string;
  social: { instagram: string; youtube: string; linkedin: string; whatsapp: string };
};

function Tagline({
  tagline,
  saibaMais,
  onNavigate,
}: {
  tagline: string;
  saibaMais: string;
  onNavigate: () => void;
}) {
  return (
    <p className="text-sm leading-relaxed m-0 text-black/80">
      {tagline}
      <br />
      <Link
        href="/about"
        scroll={false}
        onClick={onNavigate}
        className="text-sm text-black/80 italic md:not-italic hover:italic"
      >
        {saibaMais}
      </Link>
    </p>
  );
}

export default function PortfolioShell({
  copy,
  children,
}: {
  copy: Copy;
  children: ReactNode;
}) {
  const locale = useLocale() as Locale;

  const pathname = usePathname();
  const isHome = pathname === "/";
  const isAbout = pathname === "/about";
  const activeSlug = pathname.match(/^\/projects\/([^/]+)/)?.[1] ?? null;
  const activeCategoryKey = activeSlug
    ? (categories.find((c) => c.projects.some((p) => p.slug === activeSlug))
        ?.key ?? null)
    : null;

  const [expandedCategory, setExpandedCategory] = useState<string | null>(
    activeCategoryKey,
  );
  const [menuOpen, setMenuOpen] = useState(false);

  // Quando o projeto ativo muda de categoria (voltar do navegador, troca de idioma,
  // link direto), abre a categoria dele.
  const [syncedCategoryKey, setSyncedCategoryKey] = useState(activeCategoryKey);
  if (syncedCategoryKey !== activeCategoryKey) {
    setSyncedCategoryKey(activeCategoryKey);
    if (activeCategoryKey) setExpandedCategory(activeCategoryKey);
  }

  // Fecha o menu mobile sempre que a página muda (inclusive voltar/avançar do navegador).
  const [menuPathname, setMenuPathname] = useState(pathname);
  if (menuPathname !== pathname) {
    setMenuPathname(pathname);
    setMenuOpen(false);
  }

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  function toggleCategory(key: string) {
    setExpandedCategory((current) => (current === key ? null : key));
  }

  function handleNavigate() {
    setMenuOpen(false);
    window.scrollTo({ top: 0 });
  }

  const navProps = {
    locale,
    expandedCategory,
    activeSlug,
    comingSoon: copy.comingSoon,
    onToggleCategory: toggleCategory,
    onNavigate: handleNavigate,
  };

  return (
    <div className="flex flex-col md:flex-row md:items-stretch gap-6 md:gap-10 m-5 min-h-[calc(100dvh-40px)] text-black">
      <header className="flex items-center justify-between gap-4 md:hidden">
        <Link href="/">
          <h1 className="text-base font-medium m-0">{copy.name}</h1>
        </Link>
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

      {isHome && (
        <div className="md:hidden">
          <Tagline
            tagline={copy.tagline}
            saibaMais={copy.saibaMais}
            onNavigate={handleNavigate}
          />
          <NavList {...navProps} className="mt-6" />
        </div>
      )}

      <aside className="hidden md:flex flex-col w-85 shrink-0 h-[calc(100vh-40px)] sticky top-5 overflow-y-auto">
        <div className="flex flex-col gap-3">
          <div className="flex items-baseline justify-between gap-4">
            <Link href="/">
              <h1 className="text-base font-medium m-0">{copy.name}</h1>
            </Link>
            <LanguageSwitcher />
          </div>

          <Tagline
            tagline={copy.tagline}
            saibaMais={copy.saibaMais}
            onNavigate={handleNavigate}
          />
        </div>

        <NavList {...navProps} className="mt-6" />

        <SocialLinks social={copy.social} className="mt-auto pt-10" />
      </aside>

      <main className="flex-1 min-w-0">{children}</main>

      <footer className="md:hidden mt-auto pt-6">
        <SocialLinks social={copy.social} />
      </footer>

      <MobileMenu
        open={menuOpen}
        onClose={closeMenu}
        title={copy.menu}
        closeLabel={copy.close}
        header={<LanguageSwitcher />}
      >
        <Link
          href="/about"
          scroll={false}
          onClick={handleNavigate}
          aria-current={isAbout ? "page" : undefined}
          className={`appearance-none bg-transparent w-fit border-none py-2.5 text-left font-inherit text-base cursor-pointer ${
            isAbout
              ? "text-black not-italic font-medium"
              : "text-neutral-900 hover:italic"
          }`}
        >
          {copy.aboutLabel}
        </Link>
        <NavList {...navProps} />
      </MobileMenu>
    </div>
  );
}
