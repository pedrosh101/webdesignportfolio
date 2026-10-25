import Image from "next/image";
import {
  type Block,
  type Project,
  type Locale,
  resolveLocalized,
} from "@/lib/portfolio/types";

function BlockRenderer({ block, locale }: { block: Block; locale: Locale }) {
  switch (block.type) {
    case "heading":
      return (
        <h3 className="text-xl md:text-2xl font-medium m-0 pt-8">
          {block.text[locale]}
        </h3>
      );

    case "intro":
      return (
        <p className="text-base leading-relaxed text-[#3a372f] m-0 w-full">
          {block.text[locale]}
        </p>
      );

    case "paragraph":
      return (
        <p className="max-w-[62ch] text-base leading-relaxed text-[#3a372f] m-0">
          {block.text[locale]}
        </p>
      );

    case "quote":
      return (
        <blockquote className="max-w-[62ch] border-l-2 border-[#b3402e] pl-4 text-lg italic text-[#4a473f] m-0">
          {block.text[locale]}
        </blockquote>
      );

    case "image":
      return (
        <div className="relative w-full aspect-16/8 overflow-hidden">
          <Image
            src={block.image.src}
            alt={block.image.alt[locale]}
            fill
            sizes="(max-width: 900px) 100vw, 60vw"
            className="object-contain"
          />
        </div>
      );

    case "imageGrid":
      return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {block.images.map((image, i) => (
            <div
              key={image.src + i}
              className="relative w-full aspect-4/3 bg-[#ece9e1] overflow-hidden"
            >
              <Image
                src={image.src}
                alt={image.alt[locale]}
                fill
                sizes="(max-width: 900px) 50vw, 30vw"
                className="object-contain"
              />
            </div>
          ))}
        </div>
      );

    default:
      return null;
  }
}

export default function ProjectView({
  project,
  locale,
  visitLabel,
}: {
  project: Project;
  locale: Locale;
  visitLabel: string;
}) {
  return (
    <article className="flex flex-col gap-6 animate-[fadeIn_0.25s_ease-out]">
      <header className="flex items-baseline justify-between gap-4 border-b border-[#e3e0d8] pb-4">
        <h2 className="text-[clamp(28px,4vw,44px)] font-medium leading-[1.1] m-0">
          {resolveLocalized(project.title, locale)}
        </h2>
        <span className="text-sm text-[#8a8578] whitespace-nowrap">
          {project.year}
        </span>
      </header>

      {project.tags && project.tags.length > 0 && (
        <ul className="flex flex-wrap gap-x-4 gap-y-2 list-none m-0 p-0 text-[13px] text-[#8a8578]">
          {project.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      )}

      {project.link && (
        <a
          className="self-start text-sm text-[#b3402e] no-underline border-b border-current pb-0.5 hover:italic"
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          {visitLabel} ↗
        </a>
      )}

      <div className="flex flex-col gap-4">
        {project.blocks.map((block, i) => (
          <BlockRenderer block={block} locale={locale} key={i} />
        ))}
      </div>
    </article>
  );
}
