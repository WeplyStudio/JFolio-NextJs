
import { SectionWrapper } from './SectionWrapper';
import { ProjectCard } from './ProjectCard';
import { projectsData } from '@/lib/data';
import { Rocket } from 'lucide-react';

export function ProjectsSection() {
  return (
    <SectionWrapper id="projects" hasBackgroundPattern={false}>
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground font-headline flex items-center justify-center">
          <Rocket className="mr-3 h-8 w-8 text-primary" />
          My Projects
        </h2>
        <p className="text-lg text-muted-foreground mt-2 max-w-xl mx-auto">
          A selection of my development work. Exploring ideas and building solutions.
        </p>
      </div>
      {projectsData && projectsData.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <p className="text-center text-muted-foreground">No projects to display at the moment. Check back soon!</p>
      )}
    </SectionWrapper>
  );
}
