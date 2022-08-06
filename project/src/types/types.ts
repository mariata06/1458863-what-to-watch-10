export type FilmProps = {
  id: number
  title?: string
  genre: string
  year: number
  imgUrl: string
  videoUrl?: string
  score?: number
  ratingCount?: number
  desc?: number
  director?: string
  starring?: string
  time?: number
};

export type LogoProps = {
  className?: string
}

export type ReviewProps = {
  id: number
  author: string
  comment: string
  dateTime: string
  date: string
  rating: number
}
