import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Clock, Facebook, Instagram, Mail, MapPin, MessageCircle, Phone, Send, Youtube } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — The M.T School System, Karachi" },
      { name: "description", content: "Visit, call or message The M.T School System in Karachi. Address, phone, email and working hours." },
      { property: "og:title", content: "Contact — The M.T School System" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  return (
    <>
      <PageHero eyebrow="Contact" title="Let's talk" subtitle="We'd love to hear from you — visit, call or send us a message." />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-2 space-y-4">
            <InfoCard icon={MapPin} title="Address">
              Plot # A-01,02, Block F, Zennat Villas,<br/>Abdullah Shah Ghazi Goth, Scheme-33, Karachi, Pakistan
            </InfoCard>
            <InfoCard icon={Phone} title="Phone">
              <a href="tel:+923063121642" className="hover:text-primary">0306 3121642</a>
            </InfoCard>
            <InfoCard icon={Mail} title="Email">
              <a href="mailto:engr.alihassan106@gmail.com" className="hover:text-primary break-all">engr.alihassan106@gmail.com</a>
            </InfoCard>
            <InfoCard icon={Clock} title="Working Hours">
              Monday – Friday · 8:00 AM – 2:30 PM<br/>Saturday · 8:00 AM – 12:00 PM
            </InfoCard>
            <div className="rounded-2xl bg-card p-6 border border-border/60 shadow-soft">
              <div className="text-sm font-semibold mb-3">Follow us</div>
              <div className="flex gap-2">
                {[Facebook, Instagram, Youtube].map((I, i) => (
                  <a key={i} href="#" className="h-10 w-10 grid place-items-center rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition" aria-label="Social">
                    <I className="h-4 w-4" />
                  </a>
                ))}
              </div>
              <a href="https://wa.me/923063121642" className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#25D366] text-white font-semibold px-5 py-2.5 text-sm shadow-soft">
                <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* <form onSubmit={(e) => e.preventDefault()} className="lg:col-span-3 rounded-3xl bg-card p-8 border border-border/60 shadow-soft grid gap-4"> */}
           <form
  action="https://api.web3forms.com/submit"
  method="POST"
  className="lg:col-span-3 rounded-3xl bg-card p-8 border border-border/60 shadow-soft grid gap-4"
>
<input
  type="hidden"
  name="access_key"
  value="ff0516a5-4a34-49f3-b8e5-391effea798d"
/>

<input
  type="hidden"
  name="subject"
  value="New Contact Form Submission - MT School System"
/>

<input
  type="hidden"
  name="from_name"
  value="MT School System Website"
/>

            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Your name" name="name" />
              <Field label="Phone" name="phone" type="tel" />
            </div>
            <Field label="Email" name="email" type="email" />
            <Field label="Subject" name="subject" />
            <label className="text-sm">
              <span className="font-medium text-foreground/85">Message</span>
              {/* <textarea rows={6} className="mt-1.5 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring" /> */}
            <textarea
  name="message"
  rows={6}
  required
  className="mt-1.5 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
/>
            </label>
            {/* <button className="mt-2 inline-flex justify-center items-center gap-2 rounded-full gradient-primary text-primary-foreground font-semibold px-6 py-3 shadow-soft hover:shadow-glow transition">
              Send message <Send className="h-4 w-4" />
            </button> */}

            <button
  type="submit"
  className="mt-2 inline-flex justify-center items-center gap-2 rounded-full gradient-primary text-primary-foreground font-semibold px-6 py-3 shadow-soft hover:shadow-glow transition"
>
  Send Message <Send className="h-4 w-4" />
</button>
          </form>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl overflow-hidden shadow-elegant border border-border/60 aspect-[16/9]">
            <iframe
              title="School Location"
              src="https://www.google.com/maps?q=Scheme+33+Karachi+Pakistan&output=embed"
              className="w-full h-full"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </>
  );
}

function InfoCard({ icon: Icon, title, children }: { icon: any; title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl bg-card p-6 border border-border/60 shadow-soft flex gap-4">
      <div className="h-11 w-11 shrink-0 grid place-items-center rounded-xl gradient-primary text-white shadow-soft">
        <Icon className="h-5 w-5" />
      </div>
      <div className="min-w-0">
        <div className="font-semibold">{title}</div>
        <div className="mt-1 text-sm text-muted-foreground leading-relaxed">{children}</div>
      </div>
    </div>
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
