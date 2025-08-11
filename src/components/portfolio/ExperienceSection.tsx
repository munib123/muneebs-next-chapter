import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { profile } from "@/content/profile";

export const ExperienceSection = () => {
  return (
    <section id="experience" className="container py-20 md:py-28">
      <h3 className="font-display text-2xl md:text-3xl mb-6">Experience</h3>
      <div className="grid md:grid-cols-3 gap-6">
        {profile.experience.map((exp) => (
          <Card key={exp.title} className="md:col-span-1 hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-lg">{exp.title}</CardTitle>
              <p className="text-xs text-muted-foreground">{exp.period}</p>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
                {exp.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
