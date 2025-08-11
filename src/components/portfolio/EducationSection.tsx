import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { profile } from "@/content/profile";

export const EducationSection = () => {
  return (
    <section id="education" className="container py-20 md:py-28">
      <h3 className="font-display text-2xl md:text-3xl mb-6">Education</h3>
      <div className="grid md:grid-cols-2 gap-6">
        {profile.education.map((edu) => (
          <Card key={edu.title} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-lg">{edu.title}</CardTitle>
              <p className="text-xs text-muted-foreground">{edu.period}</p>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{edu.details}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
