import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight, GraduationCap, Users, ShieldCheck, BookOpen, Cpu, Bot,
  Monitor, Sparkles, Palette, Heart, Star, Quote, Calendar, MapPin, Phone,
  Beaker, Library, Trees, Camera, Video,
} from "lucide-react";
import logoAsset from "@/assets/mt-logo.asset.json";
import heroClassroom from "@/assets/hero-classroom.jpg";
import heroStem from "@/assets/hero-stem.jpg";
import facLibrary from "@/assets/facility-library.jpg";
import facComputer from "@/assets/facility-computer.jpg";
import facScience from "@/assets/facility-science.jpg";
import progPre from "@/assets/program-preschool.jpg";
import progPrimary from "@/assets/program-primary.jpg";
import progSecondary from "@/assets/program-secondary.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "The M.T School System — Karachi | Revolutionary Way to Educate" },
      { name: "description", content: "Premium education in Karachi from preschool to secondary. STEM, robotics, smart classrooms, safe campus. Admissions open for the new session." },
      { property: "og:title", content: "The M.T School System — Karachi | Revolutionary Way to Educate" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <Hero />
      <Welcome />
      <WhyUs />
      <Programs />
      <Facilities />
      <Activities />
      <AdmissionCTA />
      <Testimonials />
      <NewsPreview />
      <ContactPreview />
    </>
  );
}

function Hero() {
  return (
    <section className="relative min-h-screen pt-24 sm:pt-32 pb-20 overflow-hidden gradient-hero text-white">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -left-40 h-[32rem] w-[32rem] rounded-full bg-white/10 blur-3xl" />
        <div className="absolute top-1/2 -right-40 h-[32rem] w-[32rem] rounded-full bg-secondary/30 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-14 lg:grid-cols-12 lg:gap-10 items-center">
        <div className="lg:col-span-6 animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/15 text-white ring-1 ring-white/25 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em]">
            <Sparkles className="h-3.5 w-3.5" /> Admissions Open · 20266
          </span>
          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] text-white">
            Building Bright Futures Through{" "}
            <span className="italic text-white/90">Quality Education</span>
          </h1>
          <p className="mt-6 text-lg text-white/85 max-w-xl">
            Empowering young minds through innovation, creativity, academic
            excellence, and character development — a revolutionary way to
            educate in the heart of Karachi.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/admissions"
              className="inline-flex items-center gap-2 rounded-full bg-white text-primary font-semibold px-6 py-3 shadow-elegant hover:shadow-glow transition-all"
            >
              Apply Now <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full border-2 border-white/40 text-white font-semibold px-6 py-3 hover:bg-white/10 transition"
            >
              Contact Us
            </Link>
          </div>
          <dl className="mt-12 grid grid-cols-3 gap-6 max-w-md">
            {[
              ["500+", "Students"],
              ["30+", "Teachers"],
              ["4+", "Years"],
            ].map(([n, l]) => (
              <div key={l}>
                <dt className="text-3xl font-display font-bold text-white">{n}</dt>
                <dd className="text-xs uppercase tracking-wider text-white/70 mt-1">{l}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="lg:col-span-6 relative">
          <div className="relative aspect-[5/4] rounded-3xl overflow-hidden shadow-elegant">
            <img
              src="/Imges/71.png"
              alt="Students learning at The M.T School System"
              width={1600}
              height={1000}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 via-transparent to-transparent" />
          </div>
          <div className="hidden sm:block absolute -bottom-8 -left-28 w-56 rounded-2xl overflow-hidden shadow-elegant ring-4 ring-background animate-float-slow">
            <img src="/Imges/76.png" alt="STEM & robotics" width={1400} height={300} loading="lazy" className="h-40 w-full object-cover" />
          </div>
          <div className="hidden sm:flex absolute -top-6 -right-6 items-center gap-3 rounded-2xl glass px-4 py-3 shadow-soft">
            <img src={logoAsset.url} alt="" className="h-10 w-10 rounded-full" />
            <div className="text-xs">
              <div className="font-semibold text-primary">Est. 2021</div>
              <div className="text-muted-foreground">Karachi, Pakistan</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Welcome() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <span className="text-xs font-semibold uppercase tracking-[0.24em] text-secondary">Welcome</span>
        <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold">
          A revolutionary way to educate — <span className="text-gradient">since 2021</span>
        </h2>
        <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
          The M.T School System is a student-focused institution combining a
          modern curriculum, safe learning environment, and qualified teachers
          to prepare children for a rapidly changing world. From preschool
          through secondary, every learner is nurtured to reach their fullest
          academic and personal potential.
        </p>
      </div>
    </section>
  );
}

const whyItems = [
  { icon: Users, title: "Experienced Teachers", desc: "Qualified educators passionate about every child's growth." },
  { icon: Sparkles, title: "Smart Learning", desc: "Interactive lessons, digital tools, and modern pedagogy." },
  { icon: ShieldCheck, title: "Safe Campus", desc: "CCTV monitored, secure and hygienic learning environment." },
  { icon: BookOpen, title: "Modern Curriculum", desc: "Balanced academics aligned with international standards." },
  { icon: Cpu, title: "STEM Education", desc: "Science, tech, engineering & math from an early age." },
  { icon: Bot, title: "Robotics Learning", desc: "Hands-on robotics that builds problem solvers." },
  { icon: Monitor, title: "Computer Education", desc: "Digital literacy and coding across grade levels." },
  { icon: Heart, title: "Individual Growth", desc: "Small classes with attention for every student." },
  { icon: Palette, title: "Creative Learning", desc: "Art, music and expression woven into daily learning." },
  { icon: GraduationCap, title: "Parent Engagement", desc: "Regular updates and open communication with families." },
];

function WhyUs() {
  return (
    <section className="py-24 bg-muted/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-[0.24em] text-secondary">Why choose us</span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold">
            Ten reasons parents choose <span className="text-gradient">The M.T School System</span>
          </h2>
        </div>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {whyItems.map((it) => (
            <div
              key={it.title}
              className="group rounded-2xl bg-card p-6 shadow-soft border border-border/60 hover:-translate-y-1 hover:shadow-elegant transition-all"
            >
              <div className="h-11 w-11 grid place-items-center rounded-xl gradient-primary text-white shadow-soft group-hover:scale-110 transition">
                <it.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-semibold text-base">{it.title}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const programs = [
  { img: "/Imges/60.jpg", title: "Early Years", age: "Ages Ages 5-7", desc: "A joyful start with play-based learning, early literacy and social skills." },
  { img: "/Imges/42.jpg", title: "Primary School", age: "Grades 1–5", desc: "Building strong foundations in literacy, numeracy, science and creativity." },
  { img: "/Imges/61.jpg", title: "Secondary School", age: "Grades 6–10", desc: "Rigorous academics, STEM electives and preparation for higher education." },
];

function Programs() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.24em] text-secondary">Programs</span>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold">Academic programs for every stage</h2>
          </div>
          <Link to="/academics" className="text-primary font-semibold text-sm inline-flex items-center gap-1 hover:gap-2 transition-all">
            View all academics <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {programs.map((p) => (
            <article key={p.title} className="group rounded-3xl overflow-hidden bg-card border border-border/60 shadow-soft hover:shadow-elegant transition-all">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={p.img} alt={p.title} width={1200} height={900} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <span className="absolute top-4 left-4 rounded-full bg-white/95 text-primary text-xs font-semibold px-3 py-1">
                  {p.age}
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-display text-2xl font-bold text-primary">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
                <Link to="/academics" className="mt-4 inline-flex items-center gap-1 text-secondary font-semibold text-sm hover:gap-2 transition-all">
                  Learn more <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const facilities = [
  { img: "/Imges/58.jpeg", icon: Library, title: "Library" },
  { img: "/Imges/56.jpg", icon: Monitor, title: "Robotics Lab" },
  { img: "/Imges/59.jpeg", icon: Beaker, title: "Science Lab" },
];
const facilityChips = ["Smart Classrooms","Play Area","Sports Ground","CCTV Security","Clean Campus","Digital Learning"];

function Facilities() {
  return (
    <section className="py-24 bg-muted/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-[0.24em] text-secondary">Facilities</span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold">A modern campus built for learning</h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {facilities.map((f) => (
            <div key={f.title} className="group relative aspect-[4/5] rounded-3xl overflow-hidden shadow-soft hover:shadow-elegant transition-all">
              <img src={f.img} alt={f.title} width={1200} height={800} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/40 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                <f.icon className="h-6 w-6 text-white/80" />
                <h3 className="mt-2 font-display text-2xl font-bold">{f.title}</h3>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {facilityChips.map((c) => (
            <span key={c} className="rounded-full bg-card border border-border px-4 py-2 text-sm text-foreground/80 shadow-soft">
              {c}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

const activities = [
  { icon: Cpu, name: "STEM" }, { icon: Bot, name: "Robotics" },
  { icon: Monitor, name: "Coding" }, { icon: Users, name: "Debate" },
  { icon: Beaker, name: "Science Fair" }, { icon: Palette, name: "Arts" },
  { icon: Trees, name: "Sports" }, { icon: Heart, name: "Community" },
];

function Activities() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-[0.24em] text-secondary">Activities</span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold">Beyond the classroom</h2>
          <p className="mt-4 text-muted-foreground">Enrichment programs that shape well-rounded students.</p>
        </div>
        <div className="mt-12 grid gap-4 grid-cols-2 sm:grid-cols-4">
          {activities.map((a) => (
            <div key={a.name} className="group rounded-2xl bg-card border border-border/60 p-6 text-center shadow-soft hover:shadow-elegant hover:-translate-y-1 transition-all">
              <div className="mx-auto h-14 w-14 grid place-items-center rounded-2xl gradient-primary text-white shadow-soft group-hover:scale-110 transition">
                <a.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-semibold">{a.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AdmissionCTA() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl gradient-hero p-10 sm:p-16 text-center text-white shadow-elegant">
          <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-secondary/40 blur-3xl" />
          <div className="relative">
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.24em] text-white/80">Enroll today</span>
            <h2 className="mt-3 text-3xl sm:text-5xl font-bold">Admissions Open for New Session</h2>
            <p className="mt-4 max-w-2xl mx-auto text-white/85">
              Give your child a strong start with a school that puts learning,
              safety, and character first. Limited seats available.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link to="/admissions" className="inline-flex items-center gap-2 rounded-full bg-white text-primary font-semibold px-6 py-3 shadow-soft hover:shadow-glow transition">
                Apply Now <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full border-2 border-white/40 text-white font-semibold px-6 py-3 hover:bg-white/10 transition">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const testimonials = [
  { name: "Ayesha Khan", role: "Parent of Grade 3 Student", quote: "The teachers genuinely care. My daughter loves going to school and her progress has been remarkable." },
  { name: "Bilal Ahmed", role: "Parent of Grade 6 Student", quote: "The STEM and robotics program stands out. My son has become curious, confident and eager to learn." },
  { name: "Sana Malik", role: "Parent of Preschooler", quote: "A warm, safe environment for young children. The staff communicate with us every step of the way." },
];

function Testimonials() {
  return (
    <section className="py-24 bg-muted/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-[0.24em] text-secondary">Testimonials</span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold">What parents say</h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.name} className="rounded-3xl bg-card p-8 shadow-soft border border-border/60 hover:shadow-elegant transition-all">
              <Quote className="h-8 w-8 text-secondary" />
              <blockquote className="mt-4 text-foreground/90 leading-relaxed">"{t.quote}"</blockquote>
              <div className="mt-6 flex items-center gap-3">
                <div className="h-11 w-11 grid place-items-center rounded-full gradient-primary text-white font-bold">
                  {t.name[0]}
                </div>
                <figcaption>
                  <div className="font-semibold">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </figcaption>
                <div className="ml-auto flex text-secondary">
                  {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
                </div>
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

// const news = [
//   { tag: "Event", date: "Mar 12", title: "Culture Day", desc: "A special day promoting respect, diversity, and cultural appreciation." },
//   { tag: "Announcement", date: "Feb 20", title: "Admissions Open for New Session", desc: "Applications are now being accepted for the upcoming academic year." },
//   { tag: "Celebration", date: "Jan 30", title: "Robotics Competition Winners", desc: "Congratulations to our robotics team on their outstanding performance." },
// ];


const news = [
  {
    tag: "Event",
    date: "Dec 02",
    title: "Culture Day",
    desc: "A special day promoting respect, diversity, and cultural appreciation.",
    image: "/Imges/62.jpg",
  },
  {
    tag: "Announcement",
    date: "Apr 01",
    title: "Admissions Open for New Session",
    desc: "Applications are now being accepted for the upcoming academic year.",
    image: "/Imges/45.jpg",
  },
  {
    tag: "Competition",
    date: "Jan 30",
    title: "Robotics Competition Winners",
    desc: "Inter-grade robotics challenge — build, code and compete.",
    image: "/Imges/19.jpeg",
  },
];

function NewsPreview() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.24em] text-secondary">News & Events</span>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold">Latest from campus</h2>
          </div>
          <Link to="/news" className="text-primary font-semibold text-sm inline-flex items-center gap-1 hover:gap-2 transition-all">
            All news <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {news.map((n) => (
            <article key={n.title} className="group rounded-3xl overflow-hidden bg-card border border-border/60 shadow-soft hover:shadow-elegant transition-all">
              <div className="aspect-[16/10] gradient-primary relative">
                <div className="absolute inset-0 grid place-items-center text-white/30">
                  
                  <div className="aspect-[16/10] relative overflow-hidden">
                <img
  src={n.image}
  alt={n.title}
  className="w-full h-full object-cover"
/>
                  </div>

                 
                  
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 text-xs">
                  <span className="rounded-full bg-secondary/10 text-secondary px-3 py-1 font-semibold uppercase tracking-wider">{n.tag}</span>
                  <span className="text-muted-foreground flex items-center gap-1"><Calendar className="h-3.5 w-3.5" /> {n.date}</span>
                </div>
                <h3 className="mt-3 font-display text-xl font-bold text-primary">{n.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{n.desc}</p>
              </div>

              

            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactPreview() {
  return (
    <section className="py-24 bg-muted/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-10 lg:grid-cols-2 items-center">
        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.24em] text-secondary">Get in touch</span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold">Visit our campus in Karachi</h2>
          <p className="mt-4 text-muted-foreground max-w-lg">
            We'd love to show you around. Schedule a visit, ask a question, or start your admission inquiry.
          </p>
          <ul className="mt-8 space-y-4 text-sm">
            <li className="flex gap-4">
              <div className="h-10 w-10 shrink-0 grid place-items-center rounded-xl bg-primary/10 text-primary"><MapPin className="h-5 w-5" /></div>
              <div>
                <div className="font-semibold">Address</div>
                <div className="text-muted-foreground">Plot # A-01,02, Block F, Zennat Villas, Abdullah Shah Ghazi Goth, Scheme-33, Karachi</div>
              </div>
            </li>
            <li className="flex gap-4">
              <div className="h-10 w-10 shrink-0 grid place-items-center rounded-xl bg-primary/10 text-primary"><Phone className="h-5 w-5" /></div>
              <div>
                <div className="font-semibold">Phone</div>
                <a href="tel:+923063121642" className="text-muted-foreground hover:text-primary">0306 3121642</a>
              </div>
            </li>
          </ul>
          <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full gradient-primary text-primary-foreground font-semibold px-6 py-3 shadow-soft">
            Send an inquiry <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="rounded-3xl overflow-hidden shadow-elegant aspect-[4/3] bg-card border border-border/60">
          <iframe
            title="School Location"
            src="https://www.google.com/maps?q=Scheme+33+Karachi+Pakistan&output=embed"
            className="w-full h-full"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
