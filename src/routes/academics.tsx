import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { BookOpen, Users, Monitor, ClipboardList, Sparkles, Heart } from "lucide-react";
import progPre from "@/assets/program-preschool.jpg";
import progPrimary from "@/assets/program-primary.jpg";
import progSecondary from "@/assets/program-secondary.jpg";

export const Route = createFileRoute("/academics")({
  head: () => ({
    meta: [
      { title: "Academics — The M.T School System" },
      { name: "description", content: "Preschool, primary and secondary programs with smart classrooms, qualified teachers, digital learning and personalized attention." },
      { property: "og:title", content: "Academics — The M.T School System" },
      { property: "og:url", content: "/academics" },
    ],
    links: [{ rel: "canonical", href: "/academics" }],
  }),
  component: Academics,
});

const levels = [
  { img: "/Imges/60.jpg", name: "Early Years", age: "Ages 3-5", body: "A joyful start with play-based learning, phonics, early numeracy, motor skills and social development in a warm, safe environment." },
  { img: "/Imges/42.jpg", name: "Primary School", age: "Grades 1–5", body: "Strong foundations in literacy, mathematics, science and languages, complemented by arts, sports and character education." },
  { img: "/Imges/61.jpg", name: "Secondary School", age: "Grades 6–10", body: "Rigorous academics with STEM electives, digital literacy, critical thinking and preparation for higher education and life." },
];

const features = [
  { icon: Sparkles, title: "Smart Classrooms" },
  { icon: Users, title: "Qualified Teachers" },
  { icon: BookOpen, title: "Modern Curriculum" },
  { icon: Monitor, title: "Digital Learning" },
  { icon: ClipboardList, title: "Student Assessments" },
  { icon: Heart, title: "Individual Attention" },
];

function Academics() {
  return (
    <>
      <PageHero eyebrow="Academics" title="A curriculum designed for tomorrow" subtitle="From first steps to secondary school — a joined-up program that grows with your child." />

      <section className="py-24 space-y-20">
        {levels.map((l, i) => (
          <div key={l.name} className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className={`grid gap-10 lg:grid-cols-2 items-center ${i % 2 ? "lg:[&>*:first-child]:order-2" : ""}`}>
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-elegant">
                <img src={l.img} alt={l.name} loading="lazy" className="h-full w-full object-cover" />
              </div>
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.24em] text-secondary">{l.age}</span>
                <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-primary">{l.name}</h2>
                <p className="mt-4 text-lg text-muted-foreground leading-relaxed">{l.body}</p>
                <Link to="/admissions" className="mt-6 inline-flex items-center rounded-full gradient-primary text-primary-foreground font-semibold px-5 py-2.5 text-sm shadow-soft">
                  Apply for {l.name}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </section>

      <section className="py-24 bg-muted/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold">What every classroom includes</h2>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <div key={f.title} className="rounded-2xl bg-card p-8 border border-border/60 shadow-soft flex items-center gap-4">
                <div className="h-12 w-12 grid place-items-center rounded-xl gradient-primary text-white shadow-soft">
                  <f.icon className="h-5 w-5" />
                </div>
                <h3 className="font-semibold text-lg">{f.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
