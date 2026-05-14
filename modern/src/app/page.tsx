import Link from "next/link";
import { ContactIcon } from "@/components/contact-icon";
import { ProjectCard } from "@/components/project-card";
import { SectionTitle } from "@/components/section-title";
import { projectCaseStudies } from "@/lib/portfolio-content";
import { expertise, focusAreas, personalSide, topSkills } from "@/lib/site-data";

export default function Home() {
  return (
    <>
      <section className="hero page-hero">
        <p className="hero-kicker">Senior Software Engineer</p>
        <h1>Database Systems, Metadata Interoperability, and Query Optimization</h1>
        <p className="hero-summary">
          I work on analytical infrastructure where planner behavior, metadata
          accessibility, and system constraints directly shape performance.
        </p>

        <ul className="focus-pills" aria-label="Focus areas">
          {focusAreas.map((area) => (
            <li key={area}>{area}</li>
          ))}
        </ul>

        <div className="actions">
          <a href="https://github.com/mrouvroy-floe" target="_blank" rel="noreferrer">
            <ContactIcon kind="github" className="contact-icon" />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/morgane-rouvroy/"
            target="_blank"
            rel="noreferrer"
          >
            <ContactIcon kind="linkedin" className="contact-icon" />
            LinkedIn
          </a>
        </div>
      </section>

      <section className="section-block split-grid">
        <div className="note-card">
          <p className="note-kicker">Field note</p>
          <p>
            I like understanding why systems do not behave as expected, then
            turning that into concrete architecture or optimization work.
          </p>
        </div>

        <div className="note-card note-card-alt">
          <p className="note-kicker">Outside work</p>
          <ul className="inline-list">
            {personalSide.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-block">
        <div className="note-card">
          <p className="note-kicker">Top skills</p>
          <ul className="inline-list">
            {topSkills.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-block">
        <SectionTitle
          eyebrow="Featured"
          title="Featured posts"
          subtitle="A few posts that represent my current work and background."
        />
        <div className="projects-list">
          {projectCaseStudies.slice(0, 2).map((project) => (
            <ProjectCard key={project.slug} project={project} compact />
          ))}
        </div>
        <div className="actions">
          <Link href="/posts">See all posts</Link>
        </div>
      </section>

      <section className="section-block">
        <SectionTitle
          eyebrow="Expertise"
          title="What I work on"
          subtitle="Main technical areas I spend most of my time on."
        />
        <div className="expertise-grid">
          {expertise.map((area) => (
            <article key={area.title} className="expertise-card">
              <h2>{area.title}</h2>
              <ul>
                {area.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
