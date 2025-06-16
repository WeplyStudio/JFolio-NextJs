import { SectionWrapper } from './SectionWrapper';
import { aboutData, siteConfig } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Briefcase, GraduationCap, Lightbulb } from 'lucide-react';

export function AboutSection() {
  return (
    <SectionWrapper id="about" hasBackgroundPattern>
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground font-headline">About Me</h2>
        <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">
          A glimpse into my journey, skills, and passions.
        </p>
      </div>

      <div className="grid md:grid-cols-5 gap-8 items-start">
        <div className="md:col-span-3 space-y-6">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl text-accent font-headline">
                <Lightbulb className="mr-2 h-6 w-6" /> My Story
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/80 leading-relaxed whitespace-pre-line">
                {aboutData.bio}
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl text-accent font-headline">
                <GraduationCap className="mr-2 h-6 w-6" /> Skills
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-3">
                {aboutData.skills.map((skill) => (
                  <Badge key={skill.name} variant="secondary" className="px-4 py-2 text-sm bg-primary/10 text-primary-foreground border-primary/20 transition-transform hover:scale-105 cursor-default">
                    {skill.icon && <skill.icon className="mr-2 h-4 w-4" />}
                    {skill.name}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="md:col-span-2 space-y-6">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl text-accent font-headline">
                <Briefcase className="mr-2 h-6 w-6" /> Experience
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {aboutData.experience.map((exp, index) => (
                  <div key={index} className="relative pl-6 border-l-2 border-primary/30">
                    <div className="absolute -left-[7px] top-1 w-3 h-3 bg-primary rounded-full border-2 border-background"></div>
                    <h3 className="font-semibold text-foreground">{exp.role}</h3>
                    <p className="text-sm text-accent">{exp.company}</p>
                    <p className="text-xs text-muted-foreground mb-1">{exp.duration}</p>
                    <p className="text-sm text-foreground/80">{exp.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </SectionWrapper>
  );
}
