
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import type { ServiceItem } from '@/lib/types';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  service: ServiceItem;
}

export function ServiceCard({ service }: ServiceCardProps) {
  const IconComponent = service.icon;

  return (
    <Card className="flex flex-col h-full shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-xl border-border/60 bg-card overflow-hidden group">
      <CardHeader className="items-center text-center">
        <div className="p-4 bg-primary/10 rounded-full mb-4 transition-transform duration-300 group-hover:scale-110">
          <IconComponent className="h-10 w-10 text-primary" />
        </div>
        <CardTitle className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
          {service.title}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-grow text-center">
        <p className="text-sm text-muted-foreground mb-4">
          {service.description}
        </p>
        {service.tags && service.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 justify-center">
            {service.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs px-2 py-0.5 bg-primary/10 text-primary-foreground border-primary/20">
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
