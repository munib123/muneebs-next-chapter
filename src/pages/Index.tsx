import { useEffect } from "react";
import { HeroSection } from "@/components/portfolio/HeroSection";
import { AboutSection } from "@/components/portfolio/AboutSection";
import { EducationSection } from "@/components/portfolio/EducationSection";
import { ExperienceSection } from "@/components/portfolio/ExperienceSection";
import { SkillsSection } from "@/components/portfolio/SkillsSection";
import { ProjectsSection } from "@/components/portfolio/ProjectsSection";
import { CertificatesSection } from "@/components/portfolio/CertificatesSection";
import { ContactSection } from "@/components/portfolio/ContactSection";
import { NavDock } from "@/components/portfolio/NavDock";
import { profile } from "@/content/profile";

const Index = () => {
  useEffect(() => {
    // Structured data (JSON-LD)
    const data = {
      "@context": "https://schema.org",
      "@type": "Person",
      name: profile.name,
      jobTitle: profile.role,
      url: window.location.origin,
      sameAs: [profile.github, profile.linkedin],
    };
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.innerHTML = JSON.stringify(data);
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <main>
      <HeroSection />
      <AboutSection />
      <EducationSection />
      <ExperienceSection />
      <SkillsSection />
      <ProjectsSection />
      <CertificatesSection />
      <ContactSection />
      <NavDock />
    </main>
  );
};

export default Index;
