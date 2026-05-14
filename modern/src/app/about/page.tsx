import type { Metadata } from "next";
import Image from "next/image";
import { SectionTitle } from "@/components/section-title";

export const metadata: Metadata = {
  title: "Background",
};

export default function AboutPage() {
  return (
    <>
      <section className="page-hero compact-hero">
        <SectionTitle eyebrow="About" title="Background" level="h1" />
      </section>

      <section className="section-block about-layout">
        <div className="prose-grid about-prose">
          <p>
            I started coding because someone told me I probably could not make
            it work. In high school, I had joined a math club late and we were
            studying optimal strategy for the Nim game. For our final
            presentation, I proposed building a small program so people could
            play against it during the demo instead of only seeing the theory.
            I was told it would be too complicated to finish in time.
          </p>
          <p>
            I came back the next day with a prototype running on my calculator.
          </p>
          <p>
            That kind of challenge still motivates me. 
            I like problems that force you to dig into details, understand how systems actually
            behave, and keep iterating until things finally click.
          </p>
          <p>
            I originally thought I might work closer to prosthetics or assisted
            surgery, because I liked the idea of building technology that could
            directly help people. Through my studies at the ENSIMAG, I realized I genuinely
            enjoyed the engineering side itself: experimenting, optimizing, and
            solving complex technical problems.
          </p>
          <p>
            That path led me to query planning, optimization, and
            interoperability for analytical database systems, where small
            details matter and where understanding why a system behaves
            differently than expected is often half the job.
          </p>
          <p>
            Outside engineering, I have always liked balancing technical work
            with creative and human projects. I was part of ENSIMAG&apos;s art
            society, volunteered on projects in Africa and Venezuela, where I
            spent part of my childhood.
          </p>
        </div>

        <aside className="about-side" aria-label="Portrait">
          <span className="about-portrait-wrap" aria-hidden="true">
            <Image
              src="/img/about-portrait.jpg"
              alt="Portrait of Morgane Rouvroy"
              width={196}
              height={196}
              sizes="(max-width: 760px) 190px, (max-width: 1200px) 22vw, 224px"
              className="about-portrait"
              priority
            />
          </span>
        </aside>
      </section>
    </>
  );
}
