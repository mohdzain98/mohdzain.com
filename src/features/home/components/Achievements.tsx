import { Icon } from "@/components/icons/Icon";
import React from "react";
import "@/features/home/styles/intro.css";
import SectionHeader from "@/components/layout/SectionHeader";
import { Link } from "react-router-dom";

const Achivements = () => {
  return (
    <div
      className="py-12 px-4 lg:px-[9%]"
      id="achievements"
      style={{ backgroundColor: "#dfe5faff" }}
    >
      <div className="container mx-auto px-4 md:px-2 mt-6 mb-6">
        <SectionHeader
          title="Achievements"
          subtitle="Highlights from competitive wins, academic milestones, and recognition earned along the way."
        />
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-6">
            <div
              className="rounded-lg border bg-card text-card-foreground  p-4"
              style={{ borderRadius: 8 }}
            >
              <div className="p-4">
                <div className="flex flex-col md:flex-row md:items-start gap-4">
                  <div>
                    <div className="flex justify-between flex-row items-start">
                      <div>
                        <h3 className="text-xl font-medium font-bold mb-1">
                          Financial AI Hackathon Championship 2025 - 1st Place
                        </h3>
                        <p className="text-muted-foreground mb-4">
                          LandingAI, New York | Team: LoanLens AI
                        </p>
                      </div>
                      <div>
                        <div className="bg-primary/10 text-2xl py-2 px-4 rounded-md text-primary hidden md:block">
                          <Icon name="trophy" className="size-[1em]" />
                        </div>
                      </div>
                    </div>
                    <p className="mb-2">
                      Won 1st place at Financial AI Hackathon 2025{" "}
                      <strong>LandingAI </strong>
                      by building an agentic AI system for loan underwriting.
                    </p>
                    <p className="mb-0 text-muted-foreground">
                      Automated document extraction, fraud detection, and
                      decision intelligence with explainable AI workflows.
                    </p>
                  </div>
                </div>
                <div>
                  <Link
                    to="/achievements/landingai-financial-ai-hackathon"
                    className="no-underline font-semibold inline-flex items-center gap-1 text-foreground mt-6"
                    style={{ fontSize: "14px" }}
                  >
                    View Details{" "}
                    <Icon name="arrow-right" className="size-[0.875em] ml-1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-12 md:col-span-6">
            <div
              className="rounded-lg border bg-card text-card-foreground  h-full p-4"
              style={{ borderRadius: 8 }}
            >
              <div className="p-4">
                <div className="flex justify-between items-center gap-4 mb-2">
                  <div>
                    <h3 className="text-xl font-medium font-bold mb-1">
                      GATE 2022
                    </h3>
                    <p className="text-muted-foreground mb-0">
                      All India Rank 1579
                    </p>
                  </div>
                  <div className="bg-green-600/10 text-2xl py-2 px-4 rounded-md text-green-600 dark:text-green-400 text-[1.75rem] hidden md:block">
                    <Icon name="medal" className="size-[1em]" />
                  </div>
                </div>
                <p className="mb-0">
                  Achieved AIR 1579 in the Graduate Aptitude Test in Engineering
                  (GATE) 2022.
                </p>
                <p className="mb-0 text-muted-foreground">
                  Paper Computer Science and Information Technology (CS)
                  conducted by IIT Kharagpur.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achivements;
