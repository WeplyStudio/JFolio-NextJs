
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import type { Project } from '@/lib/types';
import { Github, ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="flex flex-col h-full overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-xl border-border/60 bg-card">
      {project.imageUrl && (
        <div className="relative w-full h-48 md:h-56 group">
          <Image
            src={project.imageUrl}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            data-ai-hint={project.imageHint || 'project image'}
          />
        </div>
      )}
      <CardHeader className="pb-3">
        <CardTitle className="text-xl font-semibold text-primary font-headline">{project.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow pb-4">
        <CardDescription className="text-sm text-muted-foreground mb-4 line-clamp-3">{project.description}</CardDescription>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs bg-primary/10 text-primary-foreground border-primary/20 hover:bg-primary/20 cursor-default">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-end space-x-2 p-4 pt-0 bg-transparent border-t border-border/60">
        {project.repoUrl && (
          <Button variant="outline" size="sm" asChild className="text-foreground hover:bg-secondary hover:text-accent-foreground border-border hover:border-primary/50">
            <Link href={project.repoUrl} target="_blank" rel="noopener noreferrer">
              <Github className="mr-1.5 h-4 w-4" /> GitHub
            </Link>
          </Button>
        )}
        {project.projectUrl && (
          <Button variant="default" size="sm" asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
            <Link href={project.projectUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-1.5 h-4 w-4" /> View Live
            </Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
