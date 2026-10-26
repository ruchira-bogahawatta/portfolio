const links = [
  { label: "GitHub", href: "https://github.com/ruchira-bogahawatta" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/ruchira-bogahawatta" },
  { label: "Facebook", href: "https://www.facebook.com/ruchira.bogahawatta/" },
  { label: "Email", href: "mailto:ruchira.bogahawatta@gmail.com" },
];

const Footer = () => {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-3 px-5 py-8 text-sm text-ink-soft sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>© {new Date().getFullYear()} Ruchira Bogahawatta</p>
        <ul className="flex flex-wrap gap-x-6 gap-y-1">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="link hover:text-ink"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
