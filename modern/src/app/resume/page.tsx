import type { Metadata } from "next";
import { ContactIcon } from "@/components/contact-icon";
import { SectionTitle } from "@/components/section-title";
import {
  resumeEducation,
  resumeExperience,
  resumeInterests,
  resumeLanguages,
  resumeProfile,
  resumeProjectsHighlight,
  resumeVolunteering,
  topSkills,
} from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Resume",
};

export default function ResumePage() {
  return (
    <>
      <section className="page-hero compact-hero">
        <SectionTitle
          eyebrow="Resume"
          title="Senior Software Engineer"
          subtitle="Query optimization, database systems, and metadata interoperability"
          level="h1"
        />
      </section>

      <section className="section-block resume-layout">
        <aside className="resume-sidebar">
          <article className="note-card resume-section">
            <p className="note-kicker">Profile</p>
            <p>{resumeProfile}</p>
          </article>

          <article className="note-card note-card-alt resume-section">
            <p className="note-kicker">Top skills</p>
            <ul className="inline-list">
              {topSkills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </article>

          <article className="note-card resume-section">
            <p className="note-kicker">Languages</p>
            <ul className="resume-meta-list">
              {resumeLanguages.map((item) => (
                <li key={item.name}>
                  <strong>{item.name}</strong>
                  <span>{item.level}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="note-card resume-section">
            <p className="note-kicker">Interests</p>
            <ul className="inline-list">
              {resumeInterests.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="note-card resume-section">
            <p className="note-kicker">Contact</p>
            <div className="actions">
              <a
                href="https://www.linkedin.com/in/morgane-rouvroy/"
                target="_blank"
                rel="noreferrer"
              >
                <ContactIcon kind="linkedin" className="contact-icon" />
                LinkedIn
              </a>
              <a href="mailto:morgane.rouvroy@hotmail.com">
                <ContactIcon kind="email" className="contact-icon" />
                Email
              </a>
              <a href="https://github.com/mrouvroy-floe" target="_blank" rel="noreferrer">
                <ContactIcon kind="github" className="contact-icon" />
                GitHub
              </a>
            </div>
          </article>
        </aside>

        <div className="resume-main">
          <article className="note-card resume-section">
            <p className="note-kicker">Experience</p>
            <div className="resume-stack">
              {resumeExperience.map((company) => (
                <section key={company.company} className="resume-company">
                  <div className="resume-company-head">
                    <h2>{company.company}</h2>
                    <span>{company.companyPeriod}</span>
                  </div>
                  <p className="resume-item-subtitle">{company.companyMeta}</p>

                  <div className="resume-role-stack">
                    {company.roles.map((role) => (
                      <section
                        key={`${role.role}-${role.period}`}
                        className="resume-item"
                      >
                        <div className="resume-item-head">
                          <h3>{role.role}</h3>
                          <span>{role.period}</span>
                        </div>
                        {role.employmentType ? (
                          <p className="resume-role-meta">{role.employmentType}</p>
                        ) : null}
                        {role.location ? <p className="resume-role-meta">{role.location}</p> : null}
                        <ul>
                          {role.details.map((detail) => (
                            <li key={detail}>{detail}</li>
                          ))}
                        </ul>
                        {role.links ? (
                          <p className="project-links">
                            {role.links.map((link) => (
                              <a
                                key={link.href}
                                href={link.href}
                                target="_blank"
                                rel="noreferrer"
                              >
                                {link.label}
                              </a>
                            ))}
                          </p>
                        ) : null}
                        {role.skills ? (
                          <ul className="inline-list">
                            {role.skills.map((skill) => (
                              <li key={skill}>{skill}</li>
                            ))}
                          </ul>
                        ) : null}
                      </section>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </article>

          <article className="note-card resume-section">
            <p className="note-kicker">Education</p>
            <div className="resume-stack compact-stack">
              {resumeEducation.map((item) => (
                <section key={`${item.degree}-${item.period}`} className="resume-item">
                  <div className="resume-item-head">
                    <h3>{item.degree}</h3>
                    <span>{item.period}</span>
                  </div>
                  <p className="resume-item-subtitle">{item.school}</p>
                  <p>{item.notes}</p>
                </section>
              ))}
            </div>
          </article>

          <article className="note-card resume-section">
            <p className="note-kicker">Project highlight</p>
            <div className="resume-stack compact-stack">
              {resumeProjectsHighlight.map((item) => (
                <section key={item.title} className="resume-item compact-item">
                  <div className="resume-item-head">
                    <h3>{item.title}</h3>
                    <span>{item.period}</span>
                  </div>
                  <p>{item.details}</p>
                </section>
              ))}
            </div>
          </article>

          <article className="note-card resume-section">
            <p className="note-kicker">Volunteering</p>
            <div className="resume-stack compact-stack">
              {resumeVolunteering.map((item) => (
                <section key={`${item.role}-${item.period}`} className="resume-item compact-item">
                  <div className="resume-item-head">
                    <h3>{item.role}</h3>
                    <span>{item.period}</span>
                  </div>
                  <p className="resume-item-subtitle">{item.org}</p>
                </section>
              ))}
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
