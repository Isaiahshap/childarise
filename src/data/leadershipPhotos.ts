export type LeadershipPhoto = {
  name: string;
  image: string;
  imageClassName?: string;
};

export const leadershipPhotos: LeadershipPhoto[] = [
  {
    name: 'Bethany Roberts Mann',
    image: '/images/bethany.webp',
    imageClassName: 'object-cover object-left',
  },
  {
    name: 'Linda Manning, PhD',
    image: '/images/linda.webp',
    imageClassName: 'object-cover object-top',
  },
  {
    name: 'Dan Mann',
    image: '/images/dan.webp',
    imageClassName: 'object-cover object-center',
  },
  {
    name: 'The Reverend Richard Wineland',
    image: '/images/richard.webp',
    imageClassName: 'object-cover object-center',
  },
  {
    name: 'Libby Dayhuff',
    image: '/images/libby.webp',
    imageClassName: 'object-cover object-center',
  },
  {
    name: 'Lucy Hendrickson',
    image: '/images/Lucy.JPEG',
    imageClassName: 'object-cover object-center',
  },
];
