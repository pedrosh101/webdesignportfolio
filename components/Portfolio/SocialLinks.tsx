type Social = { instagram: string; youtube: string; linkedin: string };

export default function SocialLinks({
  social,
  className = "",
}: {
  social: Social;
  className?: string;
}) {
  const links = [
    { label: social.instagram, href: "#" },
    { label: social.youtube, href: "#" },
    {
      label: social.linkedin,
      href: "https://www.linkedin.com/in/pedrohenriquedasilvalima/",
    },
  ];

  return (
    <div className={`flex gap-5 text-sm ${className}`}>
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-neutral-900 no-underline hover:italic"
        >
          {link.label}
        </a>
      ))}
    </div>
  );
}
