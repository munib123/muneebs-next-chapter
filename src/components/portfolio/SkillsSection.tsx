import { Badge } from "@/components/ui/badge";
import { profile } from "@/content/profile";

export const SkillsSection = () => {
  return (
    <section id="skills" className="container py-20 md:py-28">
      <h3 className="font-display text-2xl md:text-3xl mb-6">Skills</h3>
      <div className="flex flex-wrap gap-2">
        {profile.skills.map((skill) => (
          <Badge key={skill} className="bg-secondary text-foreground hover:bg-secondary/80">{skill}</Badge>
        ))}
      </div>
    </section>
  );
};
