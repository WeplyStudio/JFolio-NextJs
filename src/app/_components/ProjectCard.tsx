
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import type { Project } from '@/lib/types';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="flex flex-col h-full shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-xl border-border/60 bg-card overflow-hidden">
      {project.imageUrl && (
        <div className="relative aspect-video w-full">
          <Image
            src={project.imageUrl}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
            data-ai-hint={project.imageHint || 'project screenshot interface'}
          />
        </div>
      )}
      <CardHeader>
        <CardTitle className="text-xl font-semibold text-primary group-hover:text-primary/90 transition-colors">
          {project.title}
        </CardTitle>
        {project.category && (
          <Badge variant="secondary" className="w-fit text-xs bg-primary/10 text-primary-foreground border-primary/20">
            {project.category}
          </Badge>
        )}
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-sm text-muted-foreground line-clamp-3 mb-4">
          {project.description}
        </p>
        {project.techStack && project.techStack.length > 0 && (
          <div>
            <h4 className="text-xs font-semibold text-foreground mb-1.5">Tech Stack:</h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <Badge key={tech} variant="outline" className="text-xs px-2 py-0.5 border-primary/30 text-primary/80">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        )}
      </CardContent>
      {(project.liveUrl || project.repoUrl) && (
        <CardFooter className="pt-4 border-t border-border/30 flex-wrap gap-3">
          {project.liveUrl && (
            <Button asChild variant="outline" size="sm" className="border-primary text-primary hover:bg-primary/10 hover:text-primary">
              <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" />
                Live Demo
              </Link>
            </Button>
          )}
          {project.repoUrl && (
            <Button asChild variant="ghost" size="sm" className="text-muted-foreground hover:text-primary hover:bg-primary/10">
              <Link href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                View Code
              </Link>
            </Button>
          )}
        </CardFooter>
      )}
    </Card>
  );
}
