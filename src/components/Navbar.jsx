import { useRef, useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const links = [
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

const Navbar = ({ activeId }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pendingTarget = useRef(null);

  // The open sheet locks page scroll, so jump to the section only once it has closed
  const handleMenuLink = (event, id) => {
    event.preventDefault();
    pendingTarget.current = id;
    setMenuOpen(false);
  };

  const handleMenuClosed = (event) => {
    const id = pendingTarget.current;
    if (!id) return;
    event.preventDefault();
    pendingTarget.current = null;
    document.getElementById(id)?.scrollIntoView();
    window.history.replaceState(null, "", `#${id}`);
  };

  return (
    <header className="sticky top-0 z-20 border-b border-line bg-paper/95 backdrop-blur-sm">
      <nav aria-label="Main" className="mx-auto flex h-16 w-full max-w-5xl items-center justify-between px-5 sm:px-8">
        <a href="#hero" className="font-semibold tracking-tight">
          Ruchira Bogahawatta
        </a>

        <ul className="hidden items-center gap-7 text-sm md:flex">
          {links.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                aria-current={activeId === id ? "true" : undefined}
                className={cn("link text-ink-soft hover:text-ink", activeId === id && "text-ink")}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" aria-label="Open menu" className="md:hidden">
              <Menu className="size-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="top" onCloseAutoFocus={handleMenuClosed} className="gap-0 px-5 pt-16 pb-8">
            <SheetTitle className="sr-only">Sections</SheetTitle>
            <ul className="flex flex-col">
              {links.map(({ id, label }) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    onClick={(event) => handleMenuLink(event, id)}
                    className="block py-2.5 text-base font-medium"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
};

export default Navbar;
