import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Award, Compass, Heart, Lightbulb, Shield, Target } from "lucide-react";
import logoAsset from "@/assets/mt-logo.asset.json";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — The M.T School System, Karachi" },
      { name: "description", content: "Learn about our story, vision, mission and values. A student-focused school in Karachi established in 2021." },
      { property: "og:title", content: "About — The M.T School System" },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

const values = [
  { icon: Shield, title: "Integrity", desc: "Honesty and strong moral principles in all we do." },
  { icon: Award, title: "Excellence", desc: "A relentless pursuit of quality in learning and character." },
  { icon: Heart, title: "Respect", desc: "Kindness and empathy for every member of our community." },
  { icon: Lightbulb, title: "Innovation", desc: "Curiosity, creativity, and forward thinking." },
  { icon: Compass, title: "Leadership", desc: "Confident learners who inspire and take initiative." },
  { icon: Target, title: "Responsibility", desc: "Accountable citizens who serve their community." },
];

function About() {
  return (
    <>
      <PageHero eyebrow="About Us" title="A revolutionary way to educate" subtitle="Established in 2021, The M.T School System is a modern, student-focused school in the heart of Karachi." />

      <section className="py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-6 text-lg text-foreground/85 leading-relaxed">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary">Our Story</h2>
          <p>
            Founded in 2021, The M.T School System was born from a simple
            belief: children deserve an education that prepares them for the
            real world — one that balances strong academics with creativity,
            technology, and character. From our first classroom, we have grown
            into a vibrant learning community serving families across Scheme-33
            and beyond.
          </p>
          <p>
            Every day, our teachers and staff work together to make school a
            place children look forward to. Small class sizes, engaging
            lessons, and a safe campus form the foundation for lifelong learners.
          </p>
        </div>
      </section>

      <section className="py-24 bg-muted/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8">
          {[
            { title: "Our Vision", body: "To be a leading school known for academic excellence, character development, and innovation — empowering the next generation of thinkers, creators, and leaders." },
            { title: "Our Mission", body: "To provide a nurturing, modern learning environment that combines rigorous academics with STEM, arts and values-based education, so every child can thrive." },
          ].map((c) => (
            <div key={c.title} className="rounded-3xl bg-card p-10 shadow-soft border border-border/60">
              <h3 className="font-display text-2xl font-bold text-secondary">{c.title}</h3>
              <p className="mt-4 text-muted-foreground leading-relaxed">{c.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-semibold uppercase tracking-[0.24em] text-secondary">Our Values</span>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold">The principles we live by</h2>
          </div>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((v) => (
              <div key={v.title} className="rounded-2xl bg-card p-8 border border-border/60 shadow-soft hover:shadow-elegant transition-all">
                <div className="h-12 w-12 grid place-items-center rounded-2xl gradient-primary text-white shadow-soft">
                  <v.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-display text-xl font-bold">{v.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-muted/40">
        {/* <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-[auto_1fr] gap-10 items-center"> */}
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div>
  <img
    src="/Imges/80.jpg"
    alt="Principal"
    className="w-full h-[500px] object-cover rounded-3xl shadow-elegant"
  />
</div>
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.24em] text-secondary">Principal's Message</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold">A message to our families</h2>
            <p className="mt-6 text-foreground/85 leading-relaxed">
              "At The M.T School System, we believe every child is unique. Our
              role is to discover each student's strengths and help them grow
              academically, socially and emotionally. Thank you for entrusting
              us with your child's education — we take that responsibility
              seriously and with great joy."
            </p>
            <p className="mt-4 font-semibold text-primary">— The Principal</p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.24em] text-secondary">Teaching Philosophy</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold">Student-centered learning</h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            We design learning experiences that put students at the center —
            fostering curiosity, critical thinking, collaboration, and
            innovation. Our teachers guide, mentor and inspire, using modern
            tools and time-tested practices to help every child succeed.
          </p>
        </div>
      </section>
    </>
  );
}
