import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { CircleAlert, CircleCheck, Loader2, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Section from "@/components/Section";
import { Bio } from "@/data/constants";

const Field = ({ id, label, children }) => (
  <div className="flex flex-col gap-1.5">
    <Label htmlFor={id} className="text-xs text-muted-foreground">
      {label}
    </Label>
    {children}
  </div>
);

const inputClass = "h-11 rounded-lg border-input bg-background";

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
      title="Let's work together"
      description={
        <>
          Have a role, a project or just a question? Send a message and I'll get back to you
          {Bio.email ? (
            <>
              {" "}
              — or write to{" "}
              <a href={`mailto:${Bio.email}`} className="text-primary hover:underline">
                {Bio.email}
              </a>
            </>
          ) : null}
          .
        </>
      }
    >
      <form ref={form} onSubmit={handleSubmit} className="flex flex-col gap-4">
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
            className="min-h-36 rounded-lg border-input bg-background"
          />
        </Field>

        <Button type="submit" size="lg" className="h-11 w-full" disabled={status === "sending"}>
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
      </form>
    </Section>
  );
};

export default Contact;
