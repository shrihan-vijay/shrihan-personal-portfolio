import { Section } from "./Section";

export function AboutSection() {
  return (
    <Section id="about" title="About" eyebrow="Background">
      <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr]">
        <p className="text-lg font-medium leading-8 text-slate-800 dark:text-slate-200">
          CS student at UVA building at the intersection of AI, software engineering, and
          cybersecurity.
        </p>
        <div className="space-y-5 text-base leading-7 text-slate-600 dark:text-slate-400">
          <p>
            My work spans AI/ML engineering, full-stack development, and cybersecurity operations.
            I enjoy turning ambiguous technical problems into reliable systems, whether that means
            building a multi-agent RAG pipeline, training a computer vision model, or hardening
            enterprise security infrastructure.
          </p>
          <p>
            I am currently seeking Summer 2027 software engineering and AI internship opportunities
            where I can contribute to meaningful products, learn from strong engineering teams, and
            keep building at the frontier of intelligent software.
          </p>
        </div>
      </div>
    </Section>
  );
}
