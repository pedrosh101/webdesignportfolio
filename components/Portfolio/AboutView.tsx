import Image from "next/image";

export default function AboutView({
  title,
  body,
}: {
  title: string;
  body: string;
}) {
  const paragraphs = body.split("\n\n");

  return (
    <article className="flex flex-col gap-6 w-full animate-[fadeIn_0.25s_ease-out]">
      <header className="border-b border-[#e3e0d8] pb-4">
        <h2 className="text-[clamp(28px,4vw,44px)] font-medium leading-[1.1] m-0">
          {title}
        </h2>
      </header>

      <div className="flex flex-col md:flex-row 2xl:gap-24 gap-14 2xl:w-3/4 w-full items-start">
        <div className="w-full md:w-1/2 flex flex-col gap-4 text-base leading-relaxed text-[#3a372f]">
          {paragraphs.map((paragraph, i) => (
            <p className="m-0" key={i}>
              {paragraph}
            </p>
          ))}
        </div>

        <div className="relative aspect-square w-full md:w-1/2 shrink-0 md:sticky md:top-4">
          <Image
            src="/projects/picture.jpg"
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover grayscale"
            priority
          />
        </div>
      </div>
    </article>
  );
}
