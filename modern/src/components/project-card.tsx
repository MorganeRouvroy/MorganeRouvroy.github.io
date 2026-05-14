import Link from "next/link";
import Image from "next/image";
import type { ProjectCaseStudy } from "@/lib/portfolio-content";

export function ProjectCard({
  project,
  compact = false,
}: {
  project: ProjectCaseStudy;
  compact?: boolean;
}) {
  const visibleDetails = compact ? project.details.slice(0, 2) : project.details;

  return (
    <article
      className={`project-card ${compact ? "project-card-compact" : ""} ${
        project.highlight ? "project-highlight" : ""
      }`}
    >
      <Link
        className={`project-image-wrap ${compact ? "project-image-wrap-compact" : ""}`}
        href={`/posts/${project.slug}`}
      >
        <Image
          src={project.image}
          alt={project.imageAlt}
          width={1200}
          height={720}
          sizes={
            compact
              ? "(max-width: 760px) 100vw, (max-width: 1199px) 50vw, 33vw"
              : "(max-width: 760px) 100vw, (max-width: 1199px) 92vw, 720px"
          }
          className={`project-image ${compact ? "project-image-compact" : ""} ${
            project.slug === "armnn-onnx" ? "project-image-logo" : ""
          }`}
        />
      </Link>

      <div className="project-header">
        <div>
          <p className="project-role">{project.role}</p>
          <h2>
            <Link className="project-title-link" href={`/posts/${project.slug}`}>
              {project.title}
            </Link>
          </h2>
        </div>
        <p className="project-period">{project.period}</p>
      </div>

      <p className="project-summary">{project.summary}</p>

      <ul className="project-details">
        {visibleDetails.map((detail) => (
          <li key={detail}>{detail}</li>
        ))}
      </ul>

      <ul className="project-tags" aria-label="Technologies and themes">
        {project.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>

      <p className="project-cta">
        <Link href={`/posts/${project.slug}`}>Read full post</Link>
      </p>

      {project.links ? (
        <p className="project-links">
          {project.links.map((link) => (
            <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
              {link.label}
            </a>
          ))}
        </p>
      ) : null}
    </article>
  );
}
