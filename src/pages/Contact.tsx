import { useEffect, useMemo, useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail } from "lucide-react";

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { profile } from "@/content/profile";

const schema = z.object({
  name: z.string().min(2, "Please enter your full name"),
  email: z.string().email("Enter a valid email address"),
  subject: z.string().min(3, "Subject is too short"),
  message: z.string().min(10, "Message should be at least 10 characters"),
});

type FormValues = z.infer<typeof schema>;

const ACCESS_KEY = "59f4edff-8d09-480e-bde5-17e5328595af"; // Public Web3Forms access key

const Contact = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", email: "", subject: "", message: "" },
  });

  const meta = useMemo(() => ({
    title: `Contact ${profile.name} | ${profile.role}`,
    description: `Get in touch with ${profile.name}, ${profile.role}. Send a message for collaborations, internships, or freelance work.`,
    canonical: `${window.location.origin}/contact`,
  }), []);

  useEffect(() => {
    // Title
    const prevTitle = document.title;
    document.title = meta.title;

    // Meta description
    const existingDesc = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    let descEl = existingDesc ?? document.createElement("meta");
    descEl.setAttribute("name", "description");
    descEl.setAttribute("content", meta.description);
    if (!existingDesc) document.head.appendChild(descEl);

    // Canonical
    const existingCanonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    let canonicalEl = existingCanonical ?? document.createElement("link");
    canonicalEl.setAttribute("rel", "canonical");
    canonicalEl.setAttribute("href", meta.canonical);
    if (!existingCanonical) document.head.appendChild(canonicalEl);

    // Structured data
    const data = {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      name: `Contact ${profile.name}`,
      url: meta.canonical,
      mainEntity: {
        "@type": "Person",
        name: profile.name,
        jobTitle: profile.role,
        url: window.location.origin,
        sameAs: [profile.github, profile.linkedin],
      },
    };
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.innerHTML = JSON.stringify(data);
    document.head.appendChild(script);

    return () => {
      document.title = prevTitle;
      document.head.removeChild(script);
      // Keep meta/ canonical as they are still valid for SPA navigation
    };
  }, [meta]);

  const onSubmit = async (values: FormValues) => {
    try {
      setLoading(true);
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          name: values.name,
          email: values.email,
          subject: values.subject,
          message: values.message,
          from_name: values.name,
          reply_to: values.email,
          source: "lovable-portfolio",
        }),
      });
      const data = await res.json();

      if (data?.success) {
        toast({ title: "Message sent successfully", description: "Thanks! I will get back to you soon." });
        form.reset();
      } else {
        toast({
          variant: "destructive",
          title: "Failed to send",
          description: data?.message || "Please try again later.",
        });
      }
    } catch (e) {
      toast({ variant: "destructive", title: "Network error", description: "Please check your connection and try again." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="container py-20 md:py-24">
      <header className="max-w-2xl">
        <p className="text-sm tracking-wider text-muted-foreground">Contact</p>
        <h1 className="font-display text-3xl md:text-4xl mb-3">Contact {profile.name}</h1>
        <p className="text-muted-foreground">Have a question, proposal, or just want to say hi? Fill out the form and I’ll respond as soon as possible.</p>
      </header>

      <section className="mt-8 grid md:grid-cols-2 gap-8">
        <article className="rounded-xl border border-border bg-card p-6 shadow-sm">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Your name</FormLabel>
                    <FormControl>
                      <Input placeholder="John Doe" autoComplete="name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="you@example.com" autoComplete="email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="subject"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Subject</FormLabel>
                    <FormControl>
                      <Input placeholder="How can I help?" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Write your message..." rows={6} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="pt-2">
                <Button type="submit" variant="hero" disabled={loading}>
                  <Mail className="mr-2" />
                  {loading ? "Sending..." : "Send message"}
                </Button>
              </div>
            </form>
          </Form>
        </article>

        <aside className="rounded-xl border border-border bg-card p-6">
          <h2 className="font-semibold mb-2">Other ways to reach me</h2>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>
              <a className="underline underline-offset-4" href={profile.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </li>
            <li>
              <a className="underline underline-offset-4" href={profile.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
            </li>
          </ul>
        </aside>
      </section>
    </main>
  );
};

export default Contact;
