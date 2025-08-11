import { Button } from "@/components/ui/button";
import { profile } from "@/content/profile";
import { Github, Linkedin } from "lucide-react";

export const HeroSection = () => {
  return (
    <section id="home" className="container py-24 md:py-32">
      <header className="space-y-6">
        <p className="text-sm tracking-wider text-muted-foreground">Portfolio</p>
        <h1 className="font-display text-4xl md:text-6xl font-bold leading-tight">
          I'm {profile.name}
        </h1>
        <h2 className="text-xl md:text-2xl text-muted-foreground">{profile.role}</h2>
        <p className="max-w-2xl text-muted-foreground">
          {profile.summary}
        </p>
        <div className="flex flex-wrap items-center gap-3 pt-2">
          <Button asChild variant="hero">
            <a href={profile.resumeUrl} target="_blank" rel="noreferrer">View Resume</a>
          </Button>
          <Button asChild variant="soft">
            <a href="#contact">Contact</a>
          </Button>
          <div className="flex items-center gap-2 ml-1">
            <a href={profile.github} aria-label="GitHub" className="rounded-md p-2 bg-secondary hover:bg-secondary/80 transition-colors">
              <Github className="size-4" />
            </a>
            <a href={profile.linkedin} aria-label="LinkedIn" className="rounded-md p-2 bg-secondary hover:bg-secondary/80 transition-colors">
              <Linkedin className="size-4" />
            </a>
          </div>
        </div>
      </header>
    </section>
  );
};
