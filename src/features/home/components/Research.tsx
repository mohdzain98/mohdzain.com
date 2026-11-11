import { buttonVariants } from "@/components/ui/button";
import { Icon } from "@/components/icons/Icon";
import { cn } from "@/lib/utils";
import React, { useState } from "react";
import "@/features/home/styles/intro.css";
import SectionHeader from "@/components/layout/SectionHeader";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

interface ResearchItemProps {
  title: string;
  abstract: string;
  publishedIn: string;
  date: string;
  authors: string;
  link: string;
  tags?: string[];
}

const ResearchItem = ({
  title,
  abstract,
  publishedIn,
  date,
  authors,
  link,
  tags,
}: ResearchItemProps) => {
  const [expanded, setExpanded] = useState(false);
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  return (
    <div
      className="mt-6 mb-12"
      style={{
        backgroundColor: "var(--card)",
        border: "1px solid rgba(148, 163, 184, 0.18)",
        borderTop: "3px solid #2563eb",
        borderRadius: 8,
        padding: isTabletOrMobile ? "22px 18px" : "28px 30px",
      }}
    >
      <p
        className="mb-2"
        style={{
          fontSize: "11px",
          letterSpacing: "0.16em",
          textTransform: "uppercase",
          fontWeight: 700,
          color: "var(--primary)",
        }}
      >
        Featured Publication
      </p>

      {/* Title */}
      <h3
        className="font-bold text-foreground mb-4"
        style={{
          fontSize: isTabletOrMobile ? "1.3rem" : "1.55rem",
          lineHeight: 1.35,
        }}
      >
        {title}
      </h3>

      {/* Authors */}
      <p className="text-foreground mb-2">{authors}</p>

      {/* Publication Info */}
      <p className="text-muted-foreground mb-4">
        <em>{publishedIn}</em> • {date}
      </p>

      {/* Tags */}
      <div className="flex justify-between flex-row">
        <div>
          {tags && tags.length > 0 && (
            <div className="mb-4">
              {tags.map((tag: string, idx: number) => (
                <span
                  key={idx}
                  className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium bg-primary/10 text-primary mr-2 ${
                    isTabletOrMobile ? "mb-2" : ""
                  }`}
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
        <div>
          <span
            className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium bg-amber-400/10 text-muted-foreground mr-2 ${
              isTabletOrMobile ? "mb-2" : ""
            }`}
          >
            M.Tech Thesis
          </span>
        </div>
      </div>

      {/* Abstract */}
      <div className="mb-4">
        <h3 className="text-xl font-medium font-semibold text-foreground mb-2">
          Abstract
        </h3>
        <p className="text-foreground" style={{ lineHeight: "1.6" }}>
          {expanded
            ? abstract
            : `${abstract.substring(0, 500)}${
                abstract.length > 500 ? "..." : ""
              }`}
        </p>
        {abstract.length > 300 && (
          <button
            onClick={() => setExpanded(!expanded)}
            className={cn(
              buttonVariants({ variant: "link", size: "default" }),
              "text-primary p-0 no-underline font-semibold",
            )}
          >
            {expanded ? (
              <>
                <Icon name="chevron-up" className="size-[1em]" /> Show less
              </>
            ) : (
              <>
                <Icon name="chevron-down" className="size-[1em]" /> Read full
                abstract
              </>
            )}
          </button>
        )}
      </div>

      {/* Read More Link */}
      {link && (
        <div className="flex flex-row gap-12">
          <Link
            to={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary no-underline font-semibold"
          >
            Access Paper{" "}
            <Icon
              name="arrow-up-right-from-square"
              className="size-[0.875em]"
            />
          </Link>
          <Link
            to={"/blogs/color-images-cryptosystem"}
            className="text-primary no-underline font-semibold"
          >
            Read More <Icon name="arrow-right" className="size-[0.875em]" />
          </Link>
        </div>
      )}
    </div>
  );
};

const Research = () => {
  const researchPapers = [
    {
      title:
        "A DNA Based Color Image Cryptosystem using Chaotic Maps, Spiral Mixing and Non Linear Binary Operator",
      abstract:
        "The goal of image cryptosystems is to protect image transmission when there are network adversaries present. To ensure secrecy, images are subject to encryption to produce unintelligible cipher images; the techniques used for this process differ significantly from those applied to text data. The majority of the cryptosystems consider complicated or confusion–diffusion architectures that change and permute the values of the pixels. These frequently entail binary operations like bitwise , addition–subtraction, DNA operations, etc, and are carried out utilizing chaotic maps, each having certain limitations.This paper employs a non- linear binary function applicable to traditional and DNA techniques for color image cryptosystems.In the proposed method, each of the color components of the image follows some steps which start with inter - channel mixing and mix rows, taking the values from the initial vector and mixing it.Arnold’s cat map algorithm is then applied to shuffle the pixels, and a novel spiral mixing of the pixels is applied in four different directions to prevent the differential attack.Finally, encoding, substitution, and decoding based on DNA is carried out.A multiple collapse chaotic map is used to derive initialization vectors, rule maps, and DNA substitution maps which are used in encoding and decoding processes.Experimental results and analysis show that the proposed cryptosystem results in cipher images that are resistant to different types of cryptographic attacks, thereby providing a secure color image encryption and decryption scheme.",
      publishedIn: "Nature Scientific Reports",
      date: "September 2025",
      authors: "Chiranjeev Bhaya, Mohd Zain & Abhay Kumar Singh",
      link: "https://www.nature.com/articles/s41598-025-04021-4",
      tags: ["DNA based Cryptography", "Chaotic Maps", "Image Encryption"],
    },
  ];
  return (
    <section className="research px-4 py-12 lg:px-[9%]" id="research">
      <div className="container mx-auto mt-6 px-4 md:px-2">
        <div>
          <SectionHeader
            title="Research"
            subtitle="Published work focused on secure image cryptography, algorithmic design, and rigorous experimental analysis."
          />
          <div>
            {researchPapers.map((paper, idx) => (
              <ResearchItem key={idx} {...paper} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Research;
