import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useToast } from "@/hooks/use-toast";
import PageHeader from "@/components/PageHeader";
import { site, socialLinks } from "@/lib/site";
import { Clock, Mail, MapPin, Phone, Send } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const subject = encodeURIComponent(
      `[Portfolio] ${formData.subject || "New message"}`
    );
    const body = encodeURIComponent(
      `Hi Logesh,\n\n${formData.message}\n\n— ${formData.name}\nReply to: ${formData.email}`
    );

    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;

    toast({
      title: "Opening your mail client",
      description:
        "Your message has been drafted — just hit send. You can also email me directly.",
    });
  };

  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: site.email,
      href: `mailto:${site.email}`,
      hint: "Best for detailed enquiries",
    },
    {
      icon: Phone,
      label: "Phone",
      value: site.phone,
      href: site.phoneHref,
      hint: "Weekdays, 9am – 6pm IST",
    },
    {
      icon: MapPin,
      label: "Location",
      value: site.location,
      href: undefined,
      hint: "Open to remote & on-site",
    },
  ];

  const faqs = [
    {
      question: "What kinds of roles are you looking for?",
      answer:
        "Entry-level data scientist, data analyst or BI developer roles — full-time, internship or freelance. I'm strongest where analytics meets the business: dashboards, predictive models and reporting people trust.",
    },
    {
      question: "Are you open to freelance or contract projects?",
      answer:
        "Yes. I take on analytics and dashboarding projects, pipeline builds and data-cleaning work. Share a short brief and I'll reply with an estimate.",
    },
    {
      question: "What is your preferred tech stack?",
      answer:
        "Python and SQL for analysis and modelling, Power BI and Tableau for visualisation, and React when a result needs to live on the web. I'm tool-agnostic — I choose what fits the problem.",
    },
    {
      question: "How soon can you start?",
      answer:
        "Immediately for freelance and internships. For full-time roles I'm happy to work around a standard notice-free start date — just mention the timeline in your message.",
    },
  ];

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
      <PageHeader
        eyebrow="Contact"
        title="Let's work together"
        description="Hiring for a data role, or have an analytics project in mind? Send me a message — I reply within one working day."
      />

      <div className="mt-16 grid gap-10 lg:grid-cols-5">
        {/* Left column — direct channels */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-6 lg:col-span-2"
        >
          <div className="card-surface p-6">
            <h2 className="mb-5 text-lg font-semibold tracking-tight">
              Direct channels
            </h2>
            <div className="space-y-2">
              {contactMethods.map((method) => {
                const inner = (
                  <>
                    <div className="icon-tile shrink-0">
                      <method.icon className="h-5 w-5" />
                    </div>
                    <div className="min-w-0">
                      <div className="font-code text-[11px] uppercase tracking-wider text-muted-foreground">
                        {method.label}
                      </div>
                      <div className="truncate text-sm font-medium text-foreground">
                        {method.value}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {method.hint}
                      </div>
                    </div>
                  </>
                );
                return method.href ? (
                  <a
                    key={method.label}
                    href={method.href}
                    className="flex items-center gap-4 rounded-lg p-3 transition-colors hover:bg-accent"
                  >
                    {inner}
                  </a>
                ) : (
                  <div key={method.label} className="flex items-center gap-4 p-3">
                    {inner}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="card-surface p-6">
            <h2 className="mb-4 text-lg font-semibold tracking-tight">Elsewhere</h2>
            <div className="space-y-1">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 rounded-lg p-2.5 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                >
                  <social.icon className="h-4 w-4 text-primary" />
                  {social.label}
                </a>
              ))}
            </div>
          </div>

          <div className="flex items-start gap-3 rounded-xl border border-primary/25 bg-primary/5 p-5 text-sm">
            <Clock className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
            <p className="leading-relaxed text-muted-foreground">
              <span className="font-medium text-foreground">Response time:</span>{" "}
              I aim to reply to every genuine message within 24 hours on working
              days.
            </p>
          </div>
        </motion.div>

        {/* Right column — form */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-3"
        >
          <div className="card-surface h-full p-6 md:p-8">
            <h2 className="mb-1 text-lg font-semibold tracking-tight">
              Send a message
            </h2>
            <p className="mb-7 text-sm text-muted-foreground">
              This opens your mail client with everything pre-filled — nothing
              is stored or sent to a server.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">
                    Name <span className="text-primary">*</span>
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-background/60"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">
                    Email <span className="text-primary">*</span>
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@company.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-background/60"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">
                  Subject <span className="text-primary">*</span>
                </Label>
                <Input
                  id="subject"
                  name="subject"
                  placeholder="e.g. Data analyst role — referral"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="bg-background/60"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">
                  Message <span className="text-primary">*</span>
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell me about the role, project, or question..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="resize-none bg-background/60"
                />
              </div>

              <Button type="submit" size="lg" className="w-full gap-2 font-medium">
                <Send className="h-4 w-4" />
                Compose Message
              </Button>
            </form>
          </div>
        </motion.div>
      </div>

      {/* FAQ */}
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mx-auto mt-24 max-w-3xl"
      >
        <div className="mb-8 space-y-3 text-center">
          <p className="eyebrow">FAQ</p>
          <h2 className="text-3xl font-bold tracking-tight">Common questions</h2>
        </div>

        <Accordion type="single" collapsible className="card-surface px-6">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={faq.question}
              value={`item-${i}`}
              className={i === faqs.length - 1 ? "border-b-0" : undefined}
            >
              <AccordionTrigger className="text-left text-sm font-medium hover:text-primary hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="leading-relaxed text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.section>
    </div>
  );
};

export default Contact;
