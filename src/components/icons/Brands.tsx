import type { SVGProps } from "react";
import { siGithub, siInstagram, siWhatsapp, siX } from "simple-icons";

type IconProps = SVGProps<SVGSVGElement>;

export function BrandIcon({ path, ...props }: IconProps & { path: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      width="1em"
      height="1em"
      aria-hidden="true"
      {...props}
    >
      <path d={path} />
    </svg>
  );
}

// simple-icons dropped LinkedIn, so its glyph is inlined here.
const LINKEDIN_PATH =
  "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z";

export const GithubIcon = (p: IconProps) => (
  <BrandIcon path={siGithub.path} {...p} />
);
export const InstagramIcon = (p: IconProps) => (
  <BrandIcon path={siInstagram.path} {...p} />
);
export const WhatsappIcon = (p: IconProps) => (
  <BrandIcon path={siWhatsapp.path} {...p} />
);
export const XIcon = (p: IconProps) => <BrandIcon path={siX.path} {...p} />;
export const LinkedinIcon = (p: IconProps) => (
  <BrandIcon path={LINKEDIN_PATH} {...p} />
);

/**
 * Simplified AWS mark: "aws" lettering with the orange smile arrow.
 * (simple-icons no longer ships an AWS logo, so this is drawn here.)
 */
export const AwsIcon = (props: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    width="1em"
    height="1em"
    aria-hidden="true"
    {...props}
  >
    <text
      x="12"
      y="12.5"
      textAnchor="middle"
      fontSize="11.5"
      fontWeight="800"
      fontFamily="Arial, Helvetica, sans-serif"
      fill="currentColor"
    >
      aws
    </text>
    <path
      d="M3.5 16.2c4.6 3.2 12.3 3.3 17.2-.2"
      fill="none"
      stroke="#FF9900"
      strokeWidth="1.9"
      strokeLinecap="round"
    />
    <path
      d="M18.6 14.4l2.4 1.1-.9 2.4"
      fill="none"
      stroke="#FF9900"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
