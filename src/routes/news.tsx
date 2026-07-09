import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Calendar } from "lucide-react";
import heroClassroom from "@/assets/hero-classroom.jpg";
import heroStem from "@/assets/hero-stem.jpg";
import facLibrary from "@/assets/facility-library.jpg";
import facComputer from "@/assets/facility-computer.jpg";
import facScience from "@/assets/facility-science.jpg";
import progPre from "@/assets/program-preschool.jpg";
import progPrimary from "@/assets/program-primary.jpg";
import progSecondary from "@/assets/program-secondary.jpg";

export const Route = createFileRoute("/news")({
  head: () => ({
    meta: [
      { title: "News & Events — The M.T School System" },
      { name: "description", content: "Latest announcements, celebrations and events at The M.T School System, Karachi." },
      { property: "og:title", content: "News & Events — The M.T School System" },
      { property: "og:url", content: "/news" },
    ],
    links: [{ rel: "canonical", href: "/news" }],
  }),
  component: News,
});

const posts = [
  { img: "/Imges/62.jpg", tag: "Event", date: "Dec 02", title: "Culture Day", desc: "A special day promoting respect, diversity, and cultural appreciation." },
  { img: "/Imges/52.jpg", tag: "Celebration", date: "Mar 12", title: "Children’s Day ", desc: "A joyful celebration honoring every child's happiness, talent, and bright future." },
  { img: "/Imges/53.jpg", tag: "Celebration", date: "Apr 05", title: "Sports Day", desc: "A day of games, teamwork and school spirit for all grades." },
  { img: "/Imges/40.jpg", tag: "Celebration", date: "Apr 22", title: "Earth Day Celebration", desc: "Tree planting, awareness walks and eco-friendly projects." },
  { img: "/Imges/20.jpeg", tag: "Competition", date: "May 10", title: "Robotics Competition", desc: "Inter-grade robotics challenge — build, code and compete." },
  { img: "/Imges/51.jpg", tag: "Celebration", date: "May 15", title: "Orange day", desc: "A joyful celebration with colorful activities and creative classroom learning." },
  { img: "/Imges/2.jpeg", tag: "Celebration", date: "Sep 12", title: "Eid Milad-un-Nabi (S.A.W)", desc: "A respectful gathering marking Eid Milad-un-Nabi." },
  { img: "/Imges/54.jpg", tag: "Celebration", date: "Feb 14", title: "Valentine's Day — Kindness Day", desc: "Spreading kindness and appreciation across our campus." },
  { img: "/Imges/55.jpg", tag: "Season", date: "Mar 01", title: "Welcome Spring", desc: "Colorful spring-themed activities and outdoor learning." },
];

function News() {
  return (
    <>
      <PageHero eyebrow="News & Events" title="What's happening at school" subtitle="Announcements, celebrations, and moments from our year." />
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <article key={p.title} className="group rounded-3xl overflow-hidden bg-card border border-border/60 shadow-soft hover:shadow-elegant transition-all">
              <div className="aspect-[16/9] relative overflow-hidden">
                <img src={p.img} alt={p.title} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/20 to-transparent" />
                <div className="absolute top-4 left-4 rounded-full bg-white/95 text-primary text-xs font-bold uppercase tracking-wider px-3 py-1">{p.tag}</div>
                <div className="absolute bottom-4 right-4 rounded-full glass text-white text-xs font-semibold px-3 py-1 flex items-center gap-1">
                  <Calendar className="h-3.5 w-3.5" /> {p.date}
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-bold text-primary">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
