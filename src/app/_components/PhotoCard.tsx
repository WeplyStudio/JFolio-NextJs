
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card'; // CardHeader, CardTitle, CardDescription removed as they are not used here
import type { Photo } from '@/lib/types';

interface PhotoCardProps {
  photo: Photo;
}

export function PhotoCard({ photo }: PhotoCardProps) {
  return (
    <Card className="overflow-hidden group shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-xl border-border/60 bg-card">
      <div className="relative aspect-[3/4] w-full">
        <Image
          src={photo.imageUrl}
          alt={photo.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
          data-ai-hint={photo.imageHint || 'photo gallery image'}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
          <h3 className="text-lg font-semibold text-white drop-shadow-md">{photo.title}</h3>
          {photo.description && <p className="text-xs text-gray-200 drop-shadow-sm line-clamp-2">{photo.description}</p>}
        </div>
      </div>
      {/* Optional: If you want to display category or other info below the image, use CardContent or CardFooter */}
      {/* Example:
      {photo.category && (
        <CardContent className="p-3 text-center">
          <Badge variant="outline" className="text-xs">{photo.category}</Badge>
        </CardContent>
      )}
      */}
    </Card>
  );
}
