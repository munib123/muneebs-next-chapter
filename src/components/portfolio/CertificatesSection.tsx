import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { profile } from "@/content/profile";

export const CertificatesSection = () => {
  return (
    <section id="certificates" className="container py-20 md:py-28">
      <h3 className="font-display text-2xl md:text-3xl mb-6">Certificates</h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {profile.certificates.map((c) => (
          <Card key={c.title} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-lg">{c.title}</CardTitle>
              <p className="text-xs text-muted-foreground">{c.issuer}</p>
            </CardHeader>
            <CardContent>
              <Button asChild variant="soft">
                <a href={c.href} target="_blank" rel="noreferrer" aria-label={`Open ${c.title} certificate`}>
                  View Certificate
                </a>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
