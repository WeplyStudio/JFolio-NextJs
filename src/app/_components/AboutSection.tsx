
import { SectionWrapper } from './SectionWrapper';
import { aboutData } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Lightbulb, Briefcase, GraduationCap, Zap } from 'lucide-react'; // Using Zap for skills icon

export function AboutSection() {
  return (
    <SectionWrapper id="about" hasBackgroundPattern>
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground font-headline">About Me</h2>
        <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">
          A glimpse into my journey, skills, and passions.
        </p>
      </div>

      <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
        <div className="lg:col-span-3 space-y-8">
          <Card className="shadow-lg border-border/60 rounded-xl">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl text-primary font-headline">
                <Lightbulb className="mr-2 h-6 w-6" /> My Story
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/80 leading-relaxed whitespace-pre-line text-base">
                {aboutData.bio}
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-lg border-border/60 rounded-xl">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl text-primary font-headline">
                <Zap className="mr-2 h-6 w-6" /> Skills
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
                {aboutData.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center">
                        {skill.icon && <skill.icon className="mr-2 h-4 w-4 text-primary/80" />}
                        <span className="text-sm font-medium text-foreground/90">{skill.name}</span>
                      </div>
                      {skill.level && <span className="text-xs text-muted-foreground">{skill.level}%</span>}
                    </div>
                    {skill.level ? (
                      <Progress value={skill.level} aria-label={`${skill.name} proficiency ${skill.level}%`} className="h-2" />
                    ) : (
                      <Badge variant="secondary" className="px-3 py-1 text-xs bg-primary/10 text-primary-foreground border-primary/20">
                        {skill.name}
                      </Badge>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-2 space-y-8">
          <Card className="shadow-lg border-border/60 rounded-xl">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl text-primary font-headline">
                <Briefcase className="mr-2 h-6 w-6" /> Experience
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {aboutData.experience.map((exp, index) => (
                  <div key={index} className="relative pl-6 border-l-2 border-primary/30">
                    <div className="absolute -left-[7px] top-1 w-3 h-3 bg-primary rounded-full border-2 border-background"></div>
                    <h3 className="font-semibold text-foreground">{exp.role}</h3>
                    <p className="text-sm text-primary/90 font-medium">{exp.company}</p>
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
