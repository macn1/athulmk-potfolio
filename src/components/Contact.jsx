import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { profile } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn } from "../utils/motion";
import Icon from "./Icons";
import SectionHeading from "./SectionHeading";

const contactItems = [
  { icon: "mail", label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  {
    icon: "phone",
    label: "Phone",
    value: profile.phone,
    href: `tel:${profile.phone.replace(/\s/g, "")}`,
  },
  { icon: "pin", label: "Location", value: profile.location },
  {
    icon: "linkedin",
    label: "LinkedIn",
    value: "linkedin.com/in/athulmk1",
    href: profile.linkedin,
  },
  { icon: "github", label: "GitHub", value: "github.com/macn1", href: profile.github },
];

const inputClass =
  "w-full bg-white/[0.04] border border-line focus:border-accent/70 py-3.5 px-4 placeholder:text-secondary/70 text-white rounded-xl outline-none text-[14px] transition-colors";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState({ type: "idle", text: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus({ type: "loading", text: "" });

    const serviceId = import.meta.env.VITE_APP_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY;

    // Without EmailJS credentials, fall back to the visitor's mail client.
    if (!serviceId || !templateId || !publicKey) {
      const subject = encodeURIComponent(`Portfolio enquiry from ${form.name}`);
      const body = encodeURIComponent(`${form.message}\n\n${form.name}\n${form.email}`);
      window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
      setStatus({ type: "success", text: "Opening your email app to send the message." });
      return;
    }

    emailjs
      .send(
        serviceId,
        templateId,
        {
          from_name: form.name,
          to_name: profile.name,
          from_email: form.email,
          to_email: profile.email,
          message: form.message,
        },
        publicKey
      )
      .then(
        () => {
          setStatus({
            type: "success",
            text: "Thank you. I will get back to you as soon as possible.",
          });
          setForm({ name: "", email: "", message: "" });
        },
        (error) => {
          console.error(error);
          setStatus({
            type: "error",
            text: `Something went wrong. Please try again or email ${profile.email}.`,
          });
        }
      );
  };

  return (
    <>
      <SectionHeading index="06" eyebrow="Contact" title="Let's build something together.">
        I'm open to full stack and backend roles, and to freelance projects. Send a
        message and I'll reply as soon as I can.
      </SectionHeading>

      <div className="mt-12 grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-8">
        <motion.div variants={fadeIn("right", "spring", 0.1, 0.8)} className="space-y-3">
          {contactItems.map((item) => {
            const content = (
              <>
                <span className="w-10 h-10 rounded-lg bg-accent/15 text-accent flex items-center justify-center shrink-0">
                  <Icon name={item.icon} className="w-[18px] h-[18px]" />
                </span>
                <span className="min-w-0">
                  <span className="block font-mono text-[11px] uppercase tracking-[0.16em] text-secondary">
                    {item.label}
                  </span>
                  <span className="block text-white text-[14px] truncate">{item.value}</span>
                </span>
              </>
            );
            const base = "glass rounded-xl p-4 flex items-center gap-4";
            return item.href ? (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className={`${base} hover:border-accent/50 transition-colors`}
              >
                {content}
              </a>
            ) : (
              <div key={item.label} className={base}>
                {content}
              </div>
            );
          })}
        </motion.div>

        <motion.form
          variants={fadeIn("left", "spring", 0.1, 0.8)}
          onSubmit={handleSubmit}
          className="glass rounded-2xl p-6 sm:p-8 flex flex-col gap-5"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <label className="flex flex-col gap-2">
              <span className="text-white-100 text-[13px] font-medium">Your name</span>
              <input
                type="text"
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="Jane Doe"
                className={inputClass}
              />
            </label>
            <label className="flex flex-col gap-2">
              <span className="text-white-100 text-[13px] font-medium">Your email</span>
              <input
                type="email"
                name="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="jane@company.com"
                className={inputClass}
              />
            </label>
          </div>
          <label className="flex flex-col gap-2">
            <span className="text-white-100 text-[13px] font-medium">Message</span>
            <textarea
              rows={6}
              name="message"
              required
              value={form.message}
              onChange={handleChange}
              placeholder="Tell me about your project or role..."
              className={`${inputClass} resize-none`}
            />
          </label>

          <div className="flex flex-wrap items-center gap-4">
            <button
              type="submit"
              disabled={status.type === "loading"}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-primary font-semibold text-[14px] hover:bg-white-100 transition-colors disabled:opacity-60"
            >
              {status.type === "loading" ? "Sending..." : "Send message"}
              <Icon name="arrow" className="w-4 h-4" />
            </button>
            {status.text && (
              <p
                role="status"
                className={`text-[13px] ${
                  status.type === "error" ? "text-[#ff8a8a]" : "text-accent2"
                }`}
              >
                {status.text}
              </p>
            )}
          </div>
        </motion.form>
      </div>
    </>
  );
};

export default SectionWrapper(Contact, "contact");
