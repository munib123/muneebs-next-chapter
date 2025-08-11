import { Home, User2, GraduationCap, BriefcaseBusiness, Layers3, FolderGit2, BadgeCheck, Mail } from "lucide-react";

const items = [
  { id: "home", label: "Home", Icon: Home },
  { id: "about", label: "About", Icon: User2 },
  { id: "education", label: "Education", Icon: GraduationCap },
  { id: "experience", label: "Experience", Icon: BriefcaseBusiness },
  { id: "skills", label: "Skills", Icon: Layers3 },
  { id: "projects", label: "Projects", Icon: FolderGit2 },
  { id: "certificates", label: "Certificates", Icon: BadgeCheck },
  { id: "contact", label: "Contact", Icon: Mail },
];

export const NavDock = () => {
  return (
    <nav aria-label="Section navigation" className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <ul className="flex gap-3 rounded-2xl border border-border/60 bg-background/70 backdrop-blur-md shadow-xl p-2">
        {items.map(({ id, label, Icon }) => (
          <li key={id}>
            <a
              href={`#${id}`}
              className="group flex items-center gap-2 rounded-xl px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              aria-label={label}
            >
              <span className="rounded-md p-2 bg-secondary/60 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <Icon className="size-4" />
              </span>
              <span className="hidden md:inline-block">{label}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
