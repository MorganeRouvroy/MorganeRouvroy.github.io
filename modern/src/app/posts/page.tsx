import type { Metadata } from "next";
import { ProjectsBrowser } from "@/components/projects-browser";
import { SectionTitle } from "@/components/section-title";
import { projectCaseStudies } from "@/lib/portfolio-content";

export const metadata: Metadata = {
  title: "Posts",
};

export default function PostsPage() {
  return (
    <>
      <section className="page-hero compact-hero">
        <SectionTitle
          eyebrow="Posts"
          title="Posts"
          subtitle="Click any post to open the full write-up. Academic posts are available via the toggle."
          level="h1"
        />
      </section>

      <section className="section-block">
        <ProjectsBrowser projects={projectCaseStudies} />
      </section>
    </>
  );
}
