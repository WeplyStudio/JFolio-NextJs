import { SectionWrapper } from './SectionWrapper';
import { ProjectCard } from './ProjectCard';
import { projectsData } from '@/lib/data';

export function ProjectsSection() {
  return (
    <SectionWrapper id="projects">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground font-headline">My Projects</h2>
        <p className="text-lg text-muted-foreground mt-2 max-w-xl mx-auto">
          A selection of my recent development work.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </SectionWrapper>
  );
}
