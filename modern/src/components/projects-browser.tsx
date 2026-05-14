"use client";

import { useMemo, useState } from "react";
import { ProjectCard } from "@/components/project-card";
import type { ProjectCaseStudy } from "@/lib/portfolio-content";

export function ProjectsBrowser({ projects }: { projects: ProjectCaseStudy[] }) {
  const [query, setQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState<string>("All");
  const [showAcademic, setShowAcademic] = useState(false);

  const scopedProjects = useMemo(
    () => projects.filter((project) => showAcademic || !project.isAcademic),
    [projects, showAcademic],
  );

  const tags = useMemo(() => {
    const values = new Set<string>();
    for (const project of scopedProjects) {
      for (const tag of project.tags) {
        values.add(tag);
      }
    }
    return ["All", ...Array.from(values).sort((a, b) => a.localeCompare(b))];
  }, [scopedProjects]);

  const effectiveTag = tags.includes(selectedTag) ? selectedTag : "All";

  const filtered = useMemo(() => {
    const normalized = query.trim().toLowerCase();

    return scopedProjects.filter((project) => {
      const matchesTag = effectiveTag === "All" || project.tags.includes(effectiveTag);
      if (!matchesTag) {
        return false;
      }

      if (!normalized) {
        return true;
      }

      const haystack = [
        project.title,
        project.role,
        project.summary,
        ...project.tags,
      ]
        .join(" ")
        .toLowerCase();

      return haystack.includes(normalized);
    });
  }, [query, scopedProjects, effectiveTag]);

  return (
    <div className="projects-browser">
      <div className="projects-toolbar">
        <input
          type="search"
          placeholder="Search posts..."
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          className="projects-search"
          aria-label="Search posts"
        />

        <div className="tag-filter" role="tablist" aria-label="Post tag filter">
          {tags.map((tag) => {
            const active = effectiveTag === tag;
            return (
              <button
                key={tag}
                type="button"
                className={`tag-filter-chip ${active ? "tag-filter-chip-active" : ""}`}
                onClick={() => setSelectedTag(tag)}
                role="tab"
                aria-selected={active}
              >
                {tag}
              </button>
            );
          })}
        </div>

        <label className="scope-toggle">
          <input
            type="checkbox"
            checked={showAcademic}
            onChange={(event) => setShowAcademic(event.target.checked)}
          />
          Include academic posts
        </label>
      </div>

      <p className="projects-count">
        {filtered.length} post{filtered.length > 1 ? "s" : ""}
      </p>

      <div className="projects-list projects-gallery">
        {filtered.map((project) => (
          <ProjectCard key={project.slug} project={project} compact />
        ))}
      </div>
    </div>
  );
}
