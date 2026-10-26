import { useRef, useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const links = [
  { id: "hero", label: "About" },
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
    <header>
      {/* Desktop: a floating menu centred at the top */}
      <nav aria-label="Main" className="fixed inset-x-0 top-4 z-20 hidden justify-center md:flex">
        <ul className="flex items-center gap-7 rounded-full border border-line bg-paper/95 px-7 py-2.5 text-sm backdrop-blur-sm">
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
      </nav>

      {/* Phone: a floating menu button in the top-right corner */}
      <div className="fixed top-4 right-4 z-20 md:hidden">
        <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" aria-label="Open menu" className="size-11 rounded-full bg-paper/95">
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
      </div>
    </header>
  );
};

export default Navbar;
