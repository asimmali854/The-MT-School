import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Cpu, Bot, Monitor, Users, Beaker, Palette, Trophy, Heart } from "lucide-react";

export const Route = createFileRoute("/activities")({
  head: () => ({
    meta: [
      { title: "Student Activities — The M.T School System" },
      { name: "description", content: "STEM, robotics, coding, debate, science fair, arts, sports and community service — programs that build well-rounded students." },
      { property: "og:title", content: "Activities — The M.T School System" },
      { property: "og:url", content: "/activities" },
    ],
    links: [{ rel: "canonical", href: "/activities" }],
  }),
  component: Activities,
});

const items = [
  { icon: Cpu, title: "STEM", desc: "Hands-on projects that connect science, technology, engineering and math to real problems." },
  { icon: Bot, title: "Robotics", desc: "Design, build and program robots — turning imagination into working machines." },
  { icon: Monitor, title: "Coding", desc: "Age-appropriate coding from block-based tools to real programming languages." },
  { icon: Users, title: "Debate", desc: "Public speaking, research and critical thinking through structured debate." },
  { icon: Beaker, title: "Science Fair", desc: "An annual celebration of curiosity, experimentation and creative problem solving." },
  { icon: Palette, title: "Arts", desc: "Drawing, painting, crafts and music — space for every child to express themselves." },
  { icon: Trophy, title: "Sports", desc: "Cricket, football and indoor sports that build fitness, teamwork and discipline." },
  { icon: Heart, title: "Community Service", desc: "Projects that teach empathy, kindness and civic responsibility." },
];

function Activities() {
  return (
    <>
      <PageHero eyebrow="Activities" title="Beyond the classroom" subtitle="Enrichment programs that develop confidence, creativity and character." />
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((a) => (
            <div key={a.title} className="group rounded-3xl bg-card p-8 border border-border/60 shadow-soft hover:-translate-y-1 hover:shadow-elegant transition-all">
              <div className="h-14 w-14 grid place-items-center rounded-2xl gradient-primary text-white shadow-soft group-hover:scale-110 transition">
                <a.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-display text-xl font-bold text-primary">{a.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{a.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
