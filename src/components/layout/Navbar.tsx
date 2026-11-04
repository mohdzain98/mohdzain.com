import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { scroller } from "react-scroll";
import { ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ThemeSegmented, ThemeToggle } from "@/components/theme/ThemeToggle";
import { cn } from "@/lib/utils";
import { HOME_SECTIONS, NAV_LINKS, RESUME_URL, isActive } from "@/config/nav";

function goToSection(id: string, delay = 0) {
  window.setTimeout(
    () => scroller.scrollTo(id, { smooth: true, duration: 50 }),
    delay,
  );
}

const desktopLink =
  "relative inline-flex items-center px-1 text-sm tracking-wide text-foreground/80 transition-colors hover:text-foreground " +
  "after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:origin-left after:scale-x-0 after:bg-foreground after:transition-transform";
const desktopActive = "font-semibold text-foreground after:scale-x-100";

export default function Navbar() {
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const onHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the drawer whenever the route changes.
  const [lastPath, setLastPath] = useState(pathname);
  if (lastPath !== pathname) {
    setLastPath(pathname);
    setDrawerOpen(false);
  }

  return (
    <header
      id="nav"
      className={cn(
        "bg-(--hero-bg)/90 sticky top-0 z-50 border-b backdrop-blur-md transition-shadow",
        scrolled && "shadow-sm",
      )}
    >
      <div className="mx-auto flex h-14 w-full max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="text-xl font-bold tracking-tight text-foreground no-underline"
        >
          MZ
        </Link>

        {/* Desktop navigation */}
        <nav
          className="hidden items-stretch gap-6 self-stretch lg:flex"
          aria-label="Primary"
        >
          {onHome ? (
            <DropdownMenu>
              <DropdownMenuTrigger
                className={cn(
                  desktopLink,
                  desktopActive,
                  "inline-flex cursor-pointer items-center gap-1 border-0 bg-transparent outline-none",
                )}
              >
                Home <ChevronDown className="size-3.5" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {HOME_SECTIONS.map((s) => (
                  <DropdownMenuItem
                    key={s.id}
                    onSelect={() => goToSection(s.id)}
                  >
                    <s.icon className="size-4" />
                    {s.label}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Link to="/" className={cn(desktopLink, "no-underline")}>
              Home
            </Link>
          )}

          {NAV_LINKS.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              aria-current={isActive(pathname, l.match) ? "page" : undefined}
              className={cn(
                desktopLink,
                "no-underline",
                isActive(pathname, l.match) && desktopActive,
              )}
            >
              {l.label}
            </Link>
          ))}
          <a
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(desktopLink, "no-underline")}
          >
            Resume
          </a>
          <div className="flex items-center">
            <ThemeToggle />
          </div>
        </nav>

        {/* Mobile: theme toggle + left drawer */}
        <div className="flex items-center gap-1 lg:hidden">
          <ThemeToggle />
          <Sheet open={drawerOpen} onOpenChange={setDrawerOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Open menu">
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="left"
              showCloseButton={false}
              className="w-[85vw] max-w-xs gap-0 p-0"
            >
              <SheetTitle className="sr-only">Navigation menu</SheetTitle>
              <SheetDescription className="sr-only">
                Site navigation links
              </SheetDescription>

              <div className="flex h-14 items-center justify-between border-b px-5">
                <Link
                  to="/"
                  className="text-xl font-bold tracking-tight text-foreground no-underline"
                  onClick={() => setDrawerOpen(false)}
                >
                  MZ
                </Link>
                <SheetClose asChild>
                  <Button variant="ghost" size="icon" aria-label="Close menu">
                    <X className="size-5" />
                  </Button>
                </SheetClose>
              </div>

              <a
                href={RESUME_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setDrawerOpen(false)}
                className="flex items-center gap-1.5 border-b px-5 py-4 text-base font-medium text-foreground no-underline"
              >
                Resume <ArrowUpRight className="size-4" />
              </a>

              <nav
                aria-label="Mobile"
                className="flex-1 overflow-y-auto px-2 py-3"
              >
                <ul className="m-0 list-none p-0">
                  <li>
                    <Link
                      to="/"
                      onClick={() => setDrawerOpen(false)}
                      className={cn(
                        "block rounded-md px-3 py-3 text-[15px] no-underline",
                        onHome
                          ? "font-semibold text-foreground"
                          : "text-muted-foreground",
                      )}
                    >
                      Home
                    </Link>
                    {onHome && (
                      <ul className="m-0 mb-1 ml-5 list-none border-l pl-3">
                        {HOME_SECTIONS.map((s) => (
                          <li key={s.id}>
                            <button
                              type="button"
                              onClick={() => {
                                setDrawerOpen(false);
                                goToSection(s.id, 250);
                              }}
                              className="text-muted-foreground hover:text-foreground flex w-full cursor-pointer items-center gap-2 rounded-md border-0 bg-transparent px-3 py-2 text-left text-sm"
                            >
                              <s.icon className="size-4" />
                              {s.label}
                            </button>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                  {NAV_LINKS.map((l) => {
                    const active = isActive(pathname, l.match);
                    return (
                      <li key={l.to}>
                        <Link
                          to={l.to}
                          onClick={() => setDrawerOpen(false)}
                          aria-current={active ? "page" : undefined}
                          className={cn(
                            "block rounded-md px-3 py-3 text-[15px] no-underline",
                            active
                              ? "font-semibold text-foreground"
                              : "text-muted-foreground",
                          )}
                        >
                          {l.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </nav>

              <div className="border-t px-5 py-4">
                <ThemeSegmented />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
