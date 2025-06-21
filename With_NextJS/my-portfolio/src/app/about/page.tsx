"use client";
import { useState, useEffect } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { Card, CardHeader, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { CommandMenu } from "../components/command-menu";
import { Section } from "../components/ui/section";
import {
  GlobeIcon,
  MailIcon,
  ArrowRightIcon,
  ExternalLinkIcon,
} from "lucide-react";
import { Button } from "../components/ui/button";
import { RESUME_DATA } from "../data/resume-data";
import { ProjectCard } from "../components/project-card";
import FlowiseChatbot from "../components/chatbot";
import { ViewSwitch, ViewMode } from "../components/view-switch";
import { SimpleView } from "../components/simplified-view";

export default function Page() {
  const [viewMode, setViewMode] = useState<ViewMode>("initial");

  const handleViewModeChange = (mode: ViewMode) => {
    setViewMode(mode);
  };

  useEffect(() => {
    if (viewMode !== "initial") {
      localStorage.setItem("portfolioViewMode", viewMode);
    }
  }, [viewMode]);

  useEffect(() => {
    const savedViewMode = localStorage.getItem("portfolioViewMode") as
      | ViewMode
      | null;
    if (savedViewMode && ["simple", "detailed"].includes(savedViewMode)) {
      setViewMode(savedViewMode);
    }
  }, []);

  if (viewMode === "initial") {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-black px-4 py-8">
        <div className="mb-8 text-center">
          <h1 className="mb-6 text-3xl font-bold text-white sm:text-4xl">
            How would you like to view my portfolio?
          </h1>
          <p className="text-sm text-gray-400 sm:text-base">
            Choose a view mode to continue
          </p>
        </div>
        <ViewSwitch
          currentView="simple"
          onChange={handleViewModeChange}
          size="large"
        />
      </div>
    );
  }

  if (viewMode === "simple") {
    return (
      <div className="animate-scale-in">
        <SimpleView />
        <div className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2 transform sm:bottom-8">
          <ViewSwitch currentView={viewMode} onChange={handleViewModeChange} />
        </div>
        <div className="fixed bottom-6 right-4 z-50 sm:right-6">
          <FlowiseChatbot />
        </div>
      </div>
    );
  }

  return (
    <div className="animate-scale-in">
      <main className="container relative mx-auto min-h-screen scroll-my-12 overflow-auto bg-black p-4 sm:p-6 md:p-16 print:p-12">
        <section className="mx-auto w-full max-w-3xl space-y-10 rounded-2xl bg-black text-white print:bg-white print:text-black">
          <div className="flex items-center justify-between gap-8 rounded-xl border border-gray-800 p-4">
            <div className="flex-1 space-y-2.5">
              <h1 className="text-3xl font-bold tracking-tight">
                {RESUME_DATA.name}
              </h1>
              <p className="max-w-md text-pretty font-mono text-sm text-muted-foreground print:text-[12px]">
                {RESUME_DATA.about}
              </p>
              <p className="max-w-md font-mono text-xs text-muted-foreground">
                <a
                  className="inline-flex gap-x-1.5 align-baseline leading-none hover:underline"
                  href={RESUME_DATA.locationLink}
                  target="_blank"
                >
                  <GlobeIcon className="h-3 w-3" />
                  {RESUME_DATA.location}
                </a>
              </p>
              <div className="flex gap-x-1 pt-1 font-mono text-sm text-muted-foreground print:hidden">
                {RESUME_DATA.contact.email && (
                  <Button
                    className="h-8 w-8"
                    variant="outline"
                    size="icon"
                    asChild
                  >
                    <a href={`mailto:${RESUME_DATA.contact.email}`}>
                      <MailIcon className="h-4 w-4" />
                    </a>
                  </Button>
                )}
                {RESUME_DATA.contact.social.map((social) => (
                  <Button
                    key={social.name}
                    className="h-8 w-8"
                    variant="outline"
                    size="icon"
                    asChild
                  >
                    <a href={social.url} target="_blank">
                      <ExternalLinkIcon className="h-4 w-4" />
                    </a>
                  </Button>
                ))}
              </div>
            </div>

            <Avatar className="hidden h-32 w-32 rounded-xl border-2 border-gray-800 md:block">
              <AvatarImage
                alt={RESUME_DATA.name}
                src={RESUME_DATA.avatarUrl}
                className="rounded-xl"
              />
              <AvatarFallback>{RESUME_DATA.initials}</AvatarFallback>
            </Avatar>
          </div>

          <Section>
            <h2 className="text-xl font-bold">About</h2>
            <p className="text-pretty font-mono text-sm text-muted-foreground print:text-[12px]">
              {RESUME_DATA.summary}
            </p>
          </Section>

          <Section>
            <h2 className="text-xl font-bold">Key Highlights</h2>
            <div className="-mx-3 grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-4 print:grid-cols-4 print:gap-2">
              {RESUME_DATA.keyHighlights.map((point) => (
                <Card key={point.title} className="flex flex-col items-start gap-2 p-4">
                  <div className="text-2xl">{point.icon}</div>
                  <div>
                    <h3 className="font-semibold">{point.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {point.description}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </Section>

          <Section>
            <h2 className="text-xl font-bold">Work Experience</h2>
            {RESUME_DATA.work.map((work) => (
              <Card key={work.company}>
                <CardHeader>
                  <div className="flex items-center justify-between gap-x-2 text-base">
                    <h3 className="inline-flex items-center gap-x-1 font-semibold leading-none">
                      {work.company}
                      {work.badges.map((badge) => (
                        <Badge key={badge} variant="secondary" className="align-middle text-xs">
                          {badge}
                        </Badge>
                      ))}
                    </h3>
                    <div className="text-sm tabular-nums text-gray-500">
                      {work.start} - {work.end}
                    </div>
                  </div>
                  <h4 className="font-mono text-sm">{work.title}</h4>
                </CardHeader>
                <CardContent className="mt-2">
                  <p className="mb-2 text-xs">{work.description}</p>
                  {work.bulletPoints?.length > 0 && (
                    <ul className="mt-2 text-xs">
                      {work.bulletPoints.map((point, index) => (
                        <li key={index} className="mb-1 flex items-center gap-x-2">
                          <ArrowRightIcon className="h-3 w-3 flex-shrink-0 text-gray-500" />
                          {point.text}
                        </li>
                      ))}
                    </ul>
                  )}
                </CardContent>
              </Card>
            ))}
          </Section>

          <Section>
            <h2 className="text-xl font-bold">Education</h2>
            {RESUME_DATA.education.map((edu) => (
              <Card key={edu.school}>
                <CardHeader>
                  <div className="flex items-center justify-between gap-x-2 text-base">
                    <h3 className="font-semibold">{edu.school}</h3>
                    <div className="text-sm tabular-nums text-gray-500">
                      {edu.start} - {edu.end}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="mt-2">{edu.degree}</CardContent>
              </Card>
            ))}
          </Section>

          <Section>
            <h2 className="text-xl font-bold">Skills</h2>
            <div className="flex flex-wrap gap-1">
              {RESUME_DATA.skills.map((skill) => (
                <Badge key={skill}>{skill}</Badge>
              ))}
            </div>
          </Section>

          <Section>
            <h2 className="text-xl font-bold">Projects</h2>
            <div className="-mx-3 grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
              {RESUME_DATA.projects.map((project) => (
                <ProjectCard
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  tags={project.techStack}
                  link={project.link?.href}
                />
              ))}
            </div>
          </Section>

          <Section>
            <h2 className="text-xl font-bold">Achievements & Honourable Mentions</h2>
            {RESUME_DATA.achievements.map((ach) => (
              <Card key={ach.title}>
                <CardHeader>
                  <h3 className="font-semibold">{ach.title}</h3>
                </CardHeader>
                <CardContent className="mt-2">{ach.by}</CardContent>
              </Card>
            ))}
          </Section>
        </section>

        <CommandMenu
          links={[
            { url: RESUME_DATA.personalWebsiteUrl, title: "Personal Website" },
            ...RESUME_DATA.contact.social.map((s) => ({
              url: s.url,
              title: s.name,
            })),
          ]}
        />

        <FlowiseChatbot />

        <div className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2 transform sm:bottom-8">
          <ViewSwitch currentView={viewMode} onChange={handleViewModeChange} />
        </div>
      </main>
    </div>
  );
}
