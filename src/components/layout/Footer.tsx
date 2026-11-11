import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
  XIcon,
} from "@/components/icons/Brands";
import { SOCIALS } from "@/config/nav";

const SOCIAL_LINKS = [
  { label: "LinkedIn", href: SOCIALS.linkedin, Icon: LinkedinIcon },
  { label: "GitHub", href: SOCIALS.github, Icon: GithubIcon },
  { label: "Instagram", href: SOCIALS.instagram, Icon: InstagramIcon },
  { label: "X", href: SOCIALS.x, Icon: XIcon },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-neutral-900 py-6 text-white">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:px-6 lg:px-8">
        <div className="text-center sm:text-left">
          <p className="mb-1 text-sm">&copy; 2026 Mohd Zain</p>
          <p className="mb-0 text-xs text-white/60">
            Updated on : 05 November, 2026 V: 3.1.0
          </p>
        </div>

        <div className="flex items-center gap-4">
          <ul className="m-0 flex list-none items-center gap-2 p-0">
            {SOCIAL_LINKS.map(({ label, href, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="inline-flex size-9 items-center justify-center rounded-full text-white/80 transition-colors hover:bg-white/10 hover:text-white"
                >
                  <Icon className="size-[18px]" />
                </a>
              </li>
            ))}
          </ul>
          <Button
            variant="outline"
            size="sm"
            className="border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Back to Top <ArrowUp className="size-3.5" />
          </Button>
        </div>
      </div>
    </footer>
  );
}
