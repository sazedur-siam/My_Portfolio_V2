import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { CircleAlert, CircleCheck, FileText, Loader2, Mail, MapPin, Send } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Reveal from "@/components/Reveal";
import Section from "@/components/Section";
import { Bio } from "@/data/constants";
import { accentAt } from "@/lib/accents";

const channels = [
  { label: "Location", value: Bio.location, icon: MapPin },
  Bio.email && { label: "Email", value: Bio.email, href: `mailto:${Bio.email}`, icon: Mail },
  { label: "LinkedIn", value: "Connect on LinkedIn", href: Bio.linkedin, icon: FaLinkedin },
  { label: "GitHub", value: "github.com/sazedur-siam", href: Bio.github, icon: FaGithub },
  { label: "Resume", value: "View my CV", href: Bio.resume, icon: FileText },
].filter(Boolean);

const Field = ({ id, label, children }) => (
  <div className="flex flex-col gap-1.5">
    <Label htmlFor={id} className="text-xs text-muted-foreground">
      {label}
    </Label>
    {children}
  </div>
);

const inputClass = "h-10 rounded-lg border-input bg-background";

const Contact = () => {
  const form = useRef(null);
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("sending");
    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );
      form.current.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  return (
    <Section
      id="contact"
      eyebrow="Say hello"
      title="Get in Touch"
      description="Have a role, a project or just a question? Send a message and I'll get back to you."
    >
      <div className="grid gap-5 md:grid-cols-[1fr_1.4fr]">
        <Reveal className="rounded-2xl border border-border bg-gradient-to-b from-background to-muted p-6">
          <h3 className="text-base font-medium tracking-tight">Contact details</h3>
          <p className="mt-1 text-sm text-muted-foreground">{Bio.availability}.</p>
          <ul className="mt-6 flex flex-col gap-4">
            {channels.map(({ label, value, href, icon: Icon }, i) => {
              const content = (
                <>
                  <span
                    className="tint flex size-10 shrink-0 items-center justify-center rounded-xl"
                    style={{ "--c": accentAt(i) }}
                  >
                    <Icon className="size-4" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs text-muted-foreground">{label}</span>
                    <span className="block truncate text-sm font-medium">{value}</span>
                  </span>
                </>
              );
              return (
                <li key={label}>
                  {href ? (
                    <a
                      href={href}
                      target={href.startsWith("mailto:") ? undefined : "_blank"}
                      rel="noreferrer"
                      className="-m-2 flex items-center gap-3 rounded-xl p-2 transition-colors hover:bg-accent"
                    >
                      {content}
                    </a>
                  ) : (
                    <div className="flex items-center gap-3">{content}</div>
                  )}
                </li>
              );
            })}
          </ul>
        </Reveal>

        <Reveal delay={0.1} className="rounded-2xl border border-border bg-card p-6">
          <h3 className="text-base font-medium tracking-tight">Send me a message</h3>
          <form ref={form} onSubmit={handleSubmit} className="mt-5 flex flex-col gap-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <Field id="from_name" label="Name">
                <Input id="from_name" name="from_name" required autoComplete="name" className={inputClass} />
              </Field>
              <Field id="from_email" label="Email">
                <Input
                  id="from_email"
                  name="from_email"
                  type="email"
                  required
                  autoComplete="email"
                  className={inputClass}
                />
              </Field>
            </div>
            <Field id="subject" label="Subject">
              <Input id="subject" name="subject" required className={inputClass} />
            </Field>
            <Field id="message" label="Message">
              <Textarea
                id="message"
                name="message"
                rows={5}
                required
                className="min-h-32 rounded-lg border-input bg-background"
              />
            </Field>

            <div className="flex flex-wrap items-center gap-3">
              <Button type="submit" size="lg" className="h-10 px-5" disabled={status === "sending"}>
                {status === "sending" ? (
                  <Loader2 data-icon="inline-start" className="animate-spin" />
                ) : (
                  <Send data-icon="inline-start" />
                )}
                {status === "sending" ? "Sending…" : "Send message"}
              </Button>
              {status === "sent" && (
                <p role="status" className="flex items-center gap-1.5 text-sm text-success">
                  <CircleCheck className="size-4" />
                  Thanks! Your message is on its way.
                </p>
              )}
              {status === "error" && (
                <p role="alert" className="flex items-center gap-1.5 text-sm text-destructive">
                  <CircleAlert className="size-4" />
                  Something went wrong. Please try LinkedIn instead.
                </p>
              )}
            </div>
          </form>
        </Reveal>
      </div>
    </Section>
  );
};

export default Contact;
