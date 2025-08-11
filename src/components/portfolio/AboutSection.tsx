import { profile } from "@/content/profile";

export const AboutSection = () => {
  return (
    <section id="about" className="container py-20 md:py-28">
      <div className="grid md:grid-cols-3 gap-8 items-start">
        <img
          src={profile.avatar.src}
          alt={profile.avatar.alt}
          loading="lazy"
          className="w-40 h-40 md:w-56 md:h-56 rounded-xl object-cover border border-border shadow-lg"
        />
        <div className="md:col-span-2 space-y-4">
          <h3 className="font-display text-2xl md:text-3xl">About Me</h3>
          <p className="text-muted-foreground leading-relaxed">
            {profile.summary}
          </p>
        </div>
      </div>
    </section>
  );
};
