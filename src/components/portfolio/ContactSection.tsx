import { Button } from "@/components/ui/button";
import { profile } from "@/content/profile";
import { Github, Linkedin, Mail } from "lucide-react";

export const ContactSection = () => {
  return (
    <section id="contact" className="container py-20 md:py-28">
      <h3 className="font-display text-2xl md:text-3xl mb-6">Contact</h3>
      <p className="text-muted-foreground max-w-2xl">
        I'm open to collaborations, internships, and freelance opportunities. Connect with me on LinkedIn or explore my work on GitHub.
      </p>
      <div className="flex flex-wrap gap-3 pt-4">
        <Button asChild variant="default">
          <a href="/contact"><Mail className="mr-2 size-4"/>Send a message</a>
        </Button>
        <Button asChild variant="hero">
          <a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin className="mr-2 size-4"/>LinkedIn</a>
        </Button>
        <Button asChild variant="soft">
          <a href={profile.github} target="_blank" rel="noreferrer"><Github className="mr-2 size-4"/>GitHub</a>
        </Button>
        <Button asChild variant="outline">
          <a href="#home"><Mail className="mr-2 size-4"/>Back to top</a>
        </Button>
      </div>
    </section>
  );
};
