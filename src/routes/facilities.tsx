import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Sparkles, Monitor, Beaker, Library, Trees, Trophy, Shield, Sprout, Cpu } from "lucide-react";
import facLibrary from "@/assets/facility-library.jpg";
import facComputer from "@/assets/facility-computer.jpg";
import facScience from "@/assets/facility-science.jpg";

export const Route = createFileRoute("/facilities")({
  head: () => ({
    meta: [
      { title: "Facilities — The M.T School System" },
      { name: "description", content: "Smart classrooms, computer and science labs, library, sports facilities, CCTV security and a clean campus." },
      { property: "og:title", content: "Facilities — The M.T School System" },
      { property: "og:url", content: "/facilities" },
    ],
    links: [{ rel: "canonical", href: "/facilities" }],
  }),
  component: Facilities,
});

const featured = [
  { img: "/Imges/58.jpeg", title: "Library", desc: "Curated collection of storybooks, encyclopedias and reference material to encourage a lifelong love of reading." },
  { img: "/Imges/56.jpg", title: "Robotics Lab", desc: "Hands-on robotics learning that inspires creativity, innovation, and problem-solving." },
  { img: "/Imges/59.jpeg", title: "Science Lab", desc: "Age-appropriate equipment for hands-on experiments in physics, chemistry and biology." },
];

const grid = [
  { icon: Sparkles, title: "Spacious Classrooms" },
  { icon: Monitor, title: "Digital Learning Tools" },
  { icon: Library, title: "Library" },
  { icon: Beaker, title: "Science Lab" },
  { icon: Cpu, title: "Computer Lab" },
  { icon: Trees, title: "Play Area" },
  { icon: Trophy, title: "Sports Facilities" },
  { icon: Shield, title: "CCTV Security" },
  { icon: Sprout, title: "Hygienic Campus" },
];

function Facilities() {
  return (
    <>
      <PageHero eyebrow="Facilities" title="A campus built for learning" subtitle="Everything your child needs to explore, discover and grow." />

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-8 md:grid-cols-3">
          {featured.map((f) => (
            <article key={f.title} className="group rounded-3xl overflow-hidden bg-card border border-border/60 shadow-soft hover:shadow-elegant transition-all">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={f.img} alt={f.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="p-6">
                <h3 className="font-display text-2xl font-bold text-primary">{f.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="py-24 bg-muted/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold">All facilities at a glance</h2>
          </div>
          <div className="mt-12 grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-3">
            {grid.map((g) => (
              <div key={g.title} className="rounded-2xl bg-card p-8 border border-border/60 shadow-soft flex items-center gap-4 hover:shadow-elegant transition-all">
                <div className="h-12 w-12 grid place-items-center rounded-xl gradient-primary text-white shadow-soft shrink-0">
                  <g.icon className="h-5 w-5" />
                </div>
                <h3 className="font-semibold">{g.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
