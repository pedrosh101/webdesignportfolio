import { categories } from "@/lib/portfolio/data";
import { resolveLocalized, type Locale } from "@/lib/portfolio/types";

type Props = {
  locale: Locale;
  expandedCategory: string | null;
  activeSlug: string | null;
  comingSoon: string;
  onToggleCategory: (key: string) => void;
  onSelectProject: (slug: string) => void;
  className?: string;
};

export default function NavList({
  locale,
  expandedCategory,
  activeSlug,
  comingSoon,
  onToggleCategory,
  onSelectProject,
  className = "",
}: Props) {
  return (
    <nav className={`flex flex-col gap-1 ${className}`}>
      {categories.map((category) => {
        const isOpen = expandedCategory === category.key;
        return (
          <div className="flex flex-col" key={category.key}>
            <button
              type="button"
              className={`appearance-none bg-transparent w-fit border-none py-2.5 md:py-1.5 text-left font-inherit text-base text-neutral-900 cursor-pointer ${
                isOpen ? "not-italic font-medium" : "hover:italic"
              }`}
              aria-expanded={isOpen}
              onClick={() => onToggleCategory(category.key)}
            >
              {resolveLocalized(category.label, locale)}
            </button>

            {isOpen && (
              <ul className="list-none m-0 mb-2 pl-1 flex flex-col">
                {category.projects.length > 0 ? (
                  category.projects.map((project) => {
                    const isActive = activeSlug === project.slug;
                    return (
                      <li key={project.slug}>
                        <button
                          type="button"
                          className={`appearance-none bg-transparent border-none w-full flex items-baseline justify-between gap-3 py-2 md:py-1 font-inherit text-[15px] cursor-pointer ${
                            isActive
                              ? "not-italic font-medium"
                              : "text-[#4a473f] hover:italic hover:text-neutral-900"
                          }`}
                          onClick={() => onSelectProject(project.slug)}
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
                  <li className="py-1 text-sm text-[#8a8578]">{comingSoon}</li>
                )}
              </ul>
            )}
          </div>
        );
      })}
    </nav>
  );
}
