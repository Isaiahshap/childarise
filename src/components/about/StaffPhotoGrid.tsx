import Image from 'next/image';
import { leadershipPhotos } from '@/data/leadershipPhotos';

export function StaffPhotoGrid() {
  return (
    <div className="w-full">
      <div className="border border-border bg-paper p-2.5 sm:p-3 lg:border-0 lg:bg-transparent lg:p-0 w-full">
        <p className="font-sans text-xs font-bold tracking-[0.16em] text-accent uppercase mb-2 lg:sr-only">
          Our team
        </p>
        <div className="grid grid-cols-3 gap-1.5 sm:gap-2 w-full">
          {leadershipPhotos.map((member) => (
            <div
              key={member.name}
              className="photo-wrap relative aspect-square overflow-hidden bg-paper-deep"
              title={member.name}
            >
              <Image
                src={member.image}
                alt={member.name}
                fill
                className={member.imageClassName ?? 'object-cover object-center'}
                sizes="(max-width: 1024px) 30vw, 120px"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
