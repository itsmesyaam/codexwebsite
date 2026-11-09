import { Section, Eyebrow, ButtonLink } from "@/components/ui";
import { Reveal } from "@/components/motion";
import { site } from "@/content/site";

export default function HomePage() {
  return (
    <Section pad="pt-32 pb-24 sm:pt-40 sm:pb-32">
      <Reveal>
        <div className="max-w-4xl">
          <Eyebrow className="mb-4">Part 1 Initialized</Eyebrow>
          <h1 className="text-display">
            Cod<span className="text-accent">X</span>Q Digital Architecture
          </h1>
          <p className="mt-6 text-lead text-muted max-w-2xl">
            {site.description}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <ButtonLink href="/contact/">Get in touch</ButtonLink>
            <ButtonLink href="/services/" variant="secondary">
              Explore services
            </ButtonLink>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
