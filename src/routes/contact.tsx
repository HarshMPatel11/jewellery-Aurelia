import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Boutiques — Aurelia" },
      {
        name: "description",
        content: "Visit our Jaipur, Mumbai, and Delhi boutiques, or speak with an Aurelia advisor.",
      },
      { property: "og:title", content: "Contact — Aurelia" },
    ],
  }),
  component: ContactPage,
});

const boutiques = [
  { city: "Jaipur", address: "Johari Bazaar, MI Road · Jaipur 302003", phone: "+91 141 220 5555" },
  {
    city: "Mumbai",
    address: "Linking Road, Bandra West · Mumbai 400050",
    phone: "+91 22 6712 9000",
  },
  {
    city: "New Delhi",
    address: "DLF Emporio, Vasant Kunj · New Delhi 110070",
    phone: "+91 11 4666 3300",
  },
];

function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main>
        <section className="bg-cream py-20 text-center px-6">
          <div className="eyebrow">In Conversation</div>
          <h1 className="font-serif text-5xl md:text-6xl mt-4">Speak with us</h1>
          <div className="gold-divider mx-auto mt-6" />
        </section>

        <section className="mx-auto max-w-6xl px-6 py-20 grid lg:grid-cols-2 gap-16">
          <form
            className="space-y-6"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thank you. An advisor will reach you within a day.");
            }}
          >
            <div className="eyebrow">Send a message</div>
            <h2 className="font-serif text-3xl">Inquiries, custom orders, appointments</h2>
            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Name" name="name" />
              <Field label="Phone" name="phone" />
            </div>
            <Field label="Email" name="email" type="email" />
            <Field label="Subject" name="subject" />
            <div>
              <label className="text-[0.7rem] tracking-[0.28em] uppercase text-muted-foreground">
                Message
              </label>
              <textarea
                required
                rows={5}
                className="w-full bg-transparent border-b border-border focus:border-gold outline-none py-3 text-sm"
              />
            </div>
            <button className="btn-gold">Submit Inquiry</button>
          </form>

          <div>
            <div className="eyebrow">Direct lines</div>
            <h2 className="font-serif text-3xl mt-2">Reach an advisor</h2>
            <div className="gold-divider mt-5" />
            <ul className="mt-8 space-y-5 text-sm">
              <li className="flex items-center gap-4">
                <Phone className="h-4 w-4 text-gold" /> +91 80 4567 8900
              </li>
              <li className="flex items-center gap-4">
                <Mail className="h-4 w-4 text-gold" /> salon@aurelia.in
              </li>
              <li className="flex items-center gap-4">
                <MessageCircle className="h-4 w-4 text-gold" /> WhatsApp +91 98765 43210
              </li>
            </ul>

            <h3 className="font-serif text-2xl mt-14">Boutiques</h3>
            <div className="gold-divider mt-4" />
            <div className="mt-8 space-y-8">
              {boutiques.map((b) => (
                <div key={b.city} className="flex gap-4">
                  <MapPin className="h-5 w-5 text-gold shrink-0 mt-1" />
                  <div>
                    <div className="font-serif text-xl">{b.city}</div>
                    <div className="text-sm text-foreground/70 mt-1">{b.address}</div>
                    <div className="text-sm text-muted-foreground mt-1">{b.phone}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

function Field({ label, name, type = "text" }: { label: string; name: string; type?: string }) {
  return (
    <div>
      <label
        htmlFor={name}
        className="text-[0.7rem] tracking-[0.28em] uppercase text-muted-foreground"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required
        className="w-full bg-transparent border-b border-border focus:border-gold outline-none py-3 text-sm"
      />
    </div>
  );
}
