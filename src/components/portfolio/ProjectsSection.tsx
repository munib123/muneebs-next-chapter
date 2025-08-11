import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { profile } from "@/content/profile";
import { ArrowUpRight } from "lucide-react";

export const ProjectsSection = () => {
  return (
    <section id="projects" className="container py-20 md:py-28">
      <h3 className="font-display text-2xl md:text-3xl mb-6">Projects</h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {profile.projects.map((p) => (
          <Card key={p.title} className="group hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-lg">{p.title}</CardTitle>
              <div className="flex flex-wrap gap-2 pt-2">
                {p.stack.map((t) => (
                  <span key={t} className="text-xs px-2 py-1 rounded-md bg-secondary">{t}</span>
                ))}
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{p.description}</p>
            </CardContent>
            <CardFooter>
              <Button asChild variant="soft" className="ml-auto">
                <a href={p.href} target="_blank" rel="noreferrer" aria-label={`Open ${p.title}`}>
                  View <ArrowUpRight className="ml-1 size-4" />
                </a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
