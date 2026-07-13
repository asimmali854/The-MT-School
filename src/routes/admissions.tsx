import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { ChevronDown, FileText, ClipboardCheck, GraduationCap, Send } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/admissions")({
  head: () => ({
    meta: [
      { title: "Admissions — The M.T School System | Apply Now" },
      { name: "description", content: "Admissions are open. Learn about our process, eligibility, required documents and how to apply to The M.T School System in Karachi." },
      { property: "og:title", content: "Admissions — The M.T School System" },
      { property: "og:url", content: "/admissions" },
    ],
    links: [{ rel: "canonical", href: "/admissions" }],
  }),
  component: Admissions,
});

const steps = [
  { icon: FileText, title: "Inquiry", desc: "Submit an admission inquiry form or visit the school office." },
  { icon: ClipboardCheck, title: "Assessment", desc: "Age-appropriate interaction or entry assessment." },
  { icon: GraduationCap, title: "Enrollment", desc: "Complete registration, pay fees and welcome to M.T!" },
];

const faqs = [
  { q: "When do admissions open?", a: "Admissions for the new academic session are currently open. Contact the office for exact deadlines." },
  { q: "What ages do you accept?", a: "We accept students from preschool (age 3) through secondary (Grade 10)." },
  { q: "What documents are required?", a: "Birth certificate / B-Form, previous school report (if applicable), passport-size photos, and copies of parents' CNICs." },
  { q: "Is there an entry test?", a: "For older grades, students take a short age-appropriate assessment. Preschool applicants attend a friendly interaction." },
  { q: "How can I get fee details?", a: "Please contact the admissions office at 0306 3121642 for the latest fee structure." },
];

function Admissions() {
  return (
    <>
      <PageHero eyebrow="Admissions" title="Join our learning community" subtitle="Admissions are open for the new session. Here's everything you need to apply." />

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold">Admission process</h2>
            <p className="mt-4 text-muted-foreground">Three simple steps to enroll your child.</p>
          </div>
          <div className="mt-14 grid md:grid-cols-3 gap-6">
            {steps.map((s, i) => (
              <div key={s.title} className="relative rounded-3xl bg-card p-8 border border-border/60 shadow-soft">
                <div className="absolute -top-4 -left-4 h-10 w-10 rounded-full gradient-primary text-white grid place-items-center text-sm font-bold shadow-soft">{i + 1}</div>
                <s.icon className="h-8 w-8 text-secondary" />
                <h3 className="mt-4 font-display text-xl font-bold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-muted/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8">
          <div className="rounded-3xl bg-card p-8 border border-border/60 shadow-soft">
            <h3 className="font-display text-2xl font-bold text-primary">Eligibility criteria</h3>
            <ul className="mt-4 space-y-3 text-sm text-foreground/85">
              {["Preschool: age 3+ by admission month","Primary: appropriate age & previous class record","Secondary: report card & short entry assessment","Complete required documents"].map((x) => (
                <li key={x} className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-secondary shrink-0"/>{x}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl bg-card p-8 border border-border/60 shadow-soft">
            <h3 className="font-display text-2xl font-bold text-primary">Required documents</h3>
            <ul className="mt-4 space-y-3 text-sm text-foreground/85">
              {["Birth certificate / B-Form","Previous school report card (if any)","4 passport-size photos","Copies of parents' CNIC","Vaccination record"].map((x) => (
                <li key={x} className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-secondary shrink-0"/>{x}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold">Admission inquiry</h2>
            <p className="mt-4 text-muted-foreground">We'll respond within one working day.</p>
          </div>
          {/* <form onSubmit={(e) => e.preventDefault()} className="mt-10 grid gap-4 rounded-3xl bg-card p-8 border border-border/60 shadow-soft"> */}
            <form
  action="https://api.web3forms.com/submit"
  method="POST"
  className="lg:col-span-3 rounded-3xl bg-card p-8 border border-border/60 shadow-soft grid gap-4"
><input
  type="hidden"
  name="access_key"
  value="ff0516a5-4a34-49f3-b8e5-391effea798d"
/>
<input
  type="hidden"
  name="from_name"
  value="New Contact Form Submission - MT School System"
/>

<input
  type="hidden"
  name="subject"
  value="New Admission Inquiry - MT School System"
/>
            
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Parent name" name="parent" />
              <Field label="Phone number" name="phone" type="tel" />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Child name" name="child" />
              <Field label="Grade applying for" name="grade" />
            </div>
            <Field label="Email" name="email" type="email" />
            <label className="text-sm">
              <span className="font-medium text-foreground/85">Message</span>
              {/* <textarea rows={4} className="mt-1.5 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring" /> */}
            <textarea
  name="message"
  rows={6}
  required
  className="mt-1.5 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
/>
            </label>
            <button className="mt-2 inline-flex justify-center items-center gap-2 rounded-full gradient-primary text-primary-foreground font-semibold px-6 py-3 shadow-soft hover:shadow-glow transition">
              Submit inquiry <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      </section>

      <section className="py-24 bg-muted/40">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold">Frequently asked questions</h2>
          </div>
          <div className="mt-10 space-y-3">
            {faqs.map((f) => <FAQ key={f.q} {...f} />)}
          </div>
        </div>
      </section>
    </>
  );
}

function Field({ label, name, type = "text" }: { label: string; name: string; type?: string }) {
  return (
    <label className="text-sm block">
      <span className="font-medium text-foreground/85">{label}</span>
      <input name={name} type={type} required className="mt-1.5 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
    </label>
  );
}

function FAQ({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-2xl bg-card border border-border/60 overflow-hidden">
      <button onClick={() => setOpen((o) => !o)} className="w-full flex items-center justify-between gap-4 p-5 text-left font-semibold hover:bg-muted/40">
        <span>{q}</span>
        <ChevronDown className={`h-4 w-4 shrink-0 transition ${open ? "rotate-180" : ""}`} />
      </button>
      {open && <div className="px-5 pb-5 text-sm text-muted-foreground">{a}</div>}
    </div>
  );
}
