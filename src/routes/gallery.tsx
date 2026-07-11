import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { useState } from "react";
import { X } from "lucide-react";
import heroClassroom from "@/assets/hero-classroom.jpg";
import heroStem from "@/assets/hero-stem.jpg";
import facLibrary from "@/assets/facility-library.jpg";
import facComputer from "@/assets/facility-computer.jpg";
import facScience from "@/assets/facility-science.jpg";
import progPre from "@/assets/program-preschool.jpg";
import progPrimary from "@/assets/program-primary.jpg";
import progSecondary from "@/assets/program-secondary.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — The M.T School System" },
      { name: "description", content: "Photos of our students, classrooms, labs, sports, events and celebrations." },
      { property: "og:title", content: "Gallery — The M.T School System" },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: Gallery,
});

const items = [
  { src: "/Imges/27.jpeg", cat: "Classrooms", alt: "Bright classroom" },
  { src: "/Imges/16.jpeg", cat: "Activities", alt: "STEM & robotics" },
  { src: "/Imges/75.jpg", cat: "Activities", alt: "STEM & robotics" },
  { src: "/Imges/74.jpg", cat: "Activities", alt: "STEM & robotics" },
   { src: "/Imges/52.jpg", cat: "Activities", alt: "STEM & robotics" },
  { src: "/Imges/19.jpeg", cat: "Robotics Lab", alt: "Robotics lab" },
  { src: "/Imges/76.jpg", cat: "Teachers", alt: "Preschoolers" },
  { src: "/Imges/31.jpg", cat: "Classrooms", alt: "Primary classroom" },
  { src: "/Imges/77.jpg", cat: "Teachers", alt: "Secondary students" },
  { src: "/Imges/78.jpg", cat: "Teachers", alt: "Secondary students" },
  { src: "/Imges/79.jpg", cat: "Teachers", alt: "Secondary students" },
  { src: "/Imges/80.jpg", cat: "Teachers", alt: "Secondary students" },
];
const cats = ["All", "Teachers", "Classrooms", "Robotics Lab", "Activities"];

function Gallery() {
  const [cat, setCat] = useState("All");
  const [open, setOpen] = useState<string | null>(null);
  const shown = cat === "All" ? items : items.filter((i) => i.cat === cat);
  return (
    <>
      <PageHero eyebrow="Gallery" title="Life at The M.T School System" subtitle="A window into our classrooms, activities and celebrations." />
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {cats.map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={`rounded-full px-4 py-2 text-sm font-semibold border transition ${
                  cat === c
                    ? "gradient-primary text-primary-foreground border-transparent shadow-soft"
                    : "bg-card border-border text-foreground/80 hover:bg-muted"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {shown.map((it, i) => (
              <button
                key={i}
                onClick={() => setOpen(it.src)}
                className="group relative aspect-[4/3] rounded-2xl overflow-hidden shadow-soft hover:shadow-elegant"
              >
                <img src={it.src} alt={it.alt} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/30 transition" />
                <span className="absolute bottom-3 left-3 rounded-full bg-white/90 text-primary text-xs font-semibold px-3 py-1">{it.cat}</span>
              </button>
            ))}
          </div>
        </div>
      </section>
      {open && (
        <div className="fixed inset-0 z-[60] grid place-items-center bg-primary/90 backdrop-blur-sm p-4" onClick={() => setOpen(null)}>
          <button className="absolute top-6 right-6 h-11 w-11 grid place-items-center rounded-full bg-white/10 text-white" aria-label="Close">
            <X />
          </button>
          <img src={open} alt="" className="max-h-[85vh] max-w-full rounded-2xl shadow-elegant" />
        </div>
      )}
    </>
  );
}
