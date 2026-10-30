"use client";

import { useLocale } from "next-intl";

type Social = { instagram: string; youtube: string; linkedin: string };

const CV = {
  pt: { label: "Currículo", file: "Currículo - Pedro Henrique Lima.pdf" },
  en: { label: "Resume", file: "Resume - Pedro Henrique Lima.pdf" },
} as const;

const linkClassName = "text-neutral-900 no-underline hover:italic";

export default function SocialLinks({
  social,
  className = "",
}: {
  social: Social;
  className?: string;
}) {
  const locale = useLocale();
  const cv = locale === "pt" ? CV.pt : CV.en;

  const links = [
    // { label: social.instagram, href: "#" },
    // { label: social.youtube, href: "#" },
    {
      label: social.linkedin,
      href: "https://www.linkedin.com/in/pedrohenriquedasilvalima/",
    },
  ];

  return (
    <div className={`flex flex-wrap gap-x-5 gap-y-2 text-sm ${className}`}>
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className={linkClassName}
        >
          {link.label}
        </a>
      ))}

      <a
        href={`/cv/${encodeURIComponent(cv.file)}`}
        download={cv.file}
        className={linkClassName}
      >
        {cv.label}
      </a>
    </div>
  );
}
