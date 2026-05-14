import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getProjectBySlug, projectCaseStudies } from "@/lib/portfolio-content";
import { loadLegacyProjectBlocks } from "@/lib/legacy-project";
import type { ReactNode } from "react";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

function normalizeInlineHref(href: string) {
  return href
    .trim()
    .replace(/^\/static\/projects\//, "/projects/")
    .replace(/^\/static\/img\//, "/img/");
}

function isExternalHref(href: string) {
  return /^(https?:\/\/|mailto:)/i.test(href);
}

function renderEmphasis(text: string, keyPrefix: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  const pattern = /(`[^`]+`|\*\*[^*]+\*\*|\*[^*]+\*|_[^_]+_)/g;
  let index = 0;
  let match: RegExpExecArray | null;

  while ((match = pattern.exec(text)) !== null) {
    if (match.index > index) {
      nodes.push(text.slice(index, match.index));
    }

    const token = match[0];
    if (token.startsWith("`") && token.endsWith("`")) {
      nodes.push(
        <code key={`${keyPrefix}-${match.index}-code`}>{token.slice(1, -1)}</code>,
      );
    } else if (token.startsWith("**") && token.endsWith("**")) {
      nodes.push(
        <strong key={`${keyPrefix}-${match.index}-bold`}>{token.slice(2, -2)}</strong>,
      );
    } else if (token.startsWith("*") && token.endsWith("*")) {
      nodes.push(
        <em key={`${keyPrefix}-${match.index}-italic-star`}>{token.slice(1, -1)}</em>,
      );
    } else if (token.startsWith("_") && token.endsWith("_")) {
      nodes.push(
        <em key={`${keyPrefix}-${match.index}-italic`}>{token.slice(1, -1)}</em>,
      );
    } else {
      nodes.push(token);
    }

    index = match.index + token.length;
  }

  if (index < text.length) {
    nodes.push(text.slice(index));
  }

  return nodes;
}

function renderInlineMarkdown(text: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  const linkPattern = /\[([^\]]+)\]\(([^)]+)\)/g;
  let index = 0;
  let linkMatch: RegExpExecArray | null;
  let segment = 0;

  while ((linkMatch = linkPattern.exec(text)) !== null) {
    if (linkMatch.index > index) {
      const before = text.slice(index, linkMatch.index);
      nodes.push(...renderEmphasis(before, `seg-${segment}`));
      segment += 1;
    }

    const label = linkMatch[1].trim();
    const href = normalizeInlineHref(linkMatch[2]);
    const external = isExternalHref(href);

    nodes.push(
      <a
        key={`link-${linkMatch.index}-${href}`}
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noreferrer" : undefined}
      >
        {renderEmphasis(label, `link-label-${segment}`)}
      </a>,
    );

    segment += 1;
    index = linkMatch.index + linkMatch[0].length;
  }

  if (index < text.length) {
    const rest = text.slice(index);
    nodes.push(...renderEmphasis(rest, `seg-${segment}`));
  }

  return nodes;
}

function normalizeListItem(text: string) {
  return text.replace(/^\s*(?:[•·▪◦●◉○*-]\s*)+/, "").trim();
}

export function generateStaticParams() {
  return projectCaseStudies.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return { title: "Post not found" };
  }

  return {
    title: project.title,
    description: project.summary,
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const legacyBlocks = project.legacyMarkdownPath
    ? await loadLegacyProjectBlocks(project.legacyMarkdownPath)
    : null;

  return (
    <>
      <section className="page-hero compact-hero">
        <p className="hero-kicker">Post</p>
        <h1>{project.title}</h1>
        <p className="hero-summary">{project.summary}</p>
        <div className="actions">
          <Link href="/posts">Back to posts</Link>
        </div>
      </section>

      <section className="section-block">
        <div className="project-detail-image-wrap">
          <Image
            src={project.image}
            alt={project.imageAlt}
            width={1200}
            height={720}
            sizes="(max-width: 760px) 100vw, (max-width: 1100px) calc(100vw - 2rem), 920px"
            className={`project-detail-image ${
              project.slug === "armnn-onnx" ? "project-detail-image-logo" : ""
            }`}
          />
        </div>
      </section>

      {legacyBlocks ? (
        <section className="section-block project-prose">
          <p className="project-inline-meta">
            {project.role} · {project.period}
          </p>
          <ul className="project-tags" aria-label="Project tags">
            {project.tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>

          <div className="legacy-markdown">
            {legacyBlocks.map((block, index) => {
              if (block.type === "h2") {
                return <h2 key={`${block.text}-${index}`}>{renderInlineMarkdown(block.text)}</h2>;
              }
              if (block.type === "h3") {
                return <h3 key={`${block.text}-${index}`}>{renderInlineMarkdown(block.text)}</h3>;
              }
              if (block.type === "ul") {
                return (
                  <ul className="project-bullets" key={`ul-${index}`}>
                    {block.items.map((item) => {
                      const cleanItem = normalizeListItem(item);
                      return <li key={item}>{renderInlineMarkdown(cleanItem)}</li>;
                    })}
                  </ul>
                );
              }
              if (block.type === "media") {
                const mediaAlt = block.alt || `${project.title} media`;
                if (block.href?.toLowerCase().endsWith(".mp4")) {
                  return (
                    <figure key={`${block.src}-${index}`} className="legacy-media">
                      <video
                        controls
                        preload="metadata"
                        className="legacy-media-video"
                        poster={block.src}
                      >
                        <source src={block.href} type="video/mp4" />
                        Your browser does not support embedded video.
                      </video>
                      <figcaption>
                        <a href={block.href} target="_blank" rel="noreferrer">
                          Open video in a new tab
                        </a>
                      </figcaption>
                    </figure>
                  );
                }

                return (
                  <figure key={`${block.src}-${index}`} className="legacy-media">
                    {block.href ? (
                      <a href={block.href} target="_blank" rel="noreferrer">
                        <Image
                          src={block.src}
                          alt={mediaAlt}
                          unoptimized
                          width={1200}
                          height={720}
                          sizes="(max-width: 760px) 100vw, (max-width: 980px) calc(100vw - 3rem), 720px"
                          className="legacy-media-image"
                        />
                      </a>
                    ) : (
                      <Image
                        src={block.src}
                        alt={mediaAlt}
                        unoptimized
                        width={1200}
                        height={720}
                        sizes="(max-width: 760px) 100vw, (max-width: 980px) calc(100vw - 3rem), 720px"
                        className="legacy-media-image"
                      />
                    )}
                  </figure>
                );
              }
              return (
                <p key={`${block.text}-${index}`}>{renderInlineMarkdown(block.text)}</p>
              );
            })}
          </div>

          {project.links ? (
            <p className="project-links detail-links">
              {project.links.map((link) => (
                <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
                  {link.label}
                </a>
              ))}
            </p>
          ) : null}
        </section>
      ) : (
        <section className="section-block project-prose">
          <h2>Role and context</h2>
          <p className="project-inline-meta">
            {project.role} · {project.period}
          </p>

          <ul className="project-tags" aria-label="Project tags">
            {project.tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>

          {project.links ? (
            <p className="project-links detail-links">
              {project.links.map((link) => (
                <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
                  {link.label}
                </a>
              ))}
            </p>
          ) : null}

          <h2>What I built</h2>
          <ul className="project-bullets">
            {project.details.map((item) => (
              <li key={item}>{normalizeListItem(item)}</li>
            ))}
          </ul>

          <h2>System constraints</h2>
          <ul className="project-bullets">
            {project.constraints.map((item) => (
              <li key={item}>{normalizeListItem(item)}</li>
            ))}
          </ul>

          <h2>Architecture and tradeoffs</h2>
          <ul className="project-bullets">
            {project.architecture.map((item) => (
              <li key={item}>{normalizeListItem(item)}</li>
            ))}
          </ul>

          <h2>Outcomes</h2>
          <ul className="project-bullets">
            {project.outcomes.map((item) => (
              <li key={item}>{normalizeListItem(item)}</li>
            ))}
          </ul>
        </section>
      )}
    </>
  );
}
