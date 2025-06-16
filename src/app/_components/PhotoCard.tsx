import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import type { Photo } from '@/lib/types';

interface PhotoCardProps {
  photo: Photo;
}

export function PhotoCard({ photo }: PhotoCardProps) {
  return (
    <Card className="overflow-hidden group shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg border-border/60">
      <div className="relative aspect-[3/4] w-full"> {/* Common portrait aspect ratio for photos */}
        <Image
          src={photo.imageUrl}
          alt={photo.title}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-500 ease-in-out group-hover:scale-110"
          data-ai-hint={photo.imageHint}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
          <h3 className="text-lg font-semibold text-white drop-shadow-md">{photo.title}</h3>
          {photo.description && <p className="text-xs text-gray-200 drop-shadow-sm">{photo.description}</p>}
        </div>
      </div>
    </Card>
  );
}
