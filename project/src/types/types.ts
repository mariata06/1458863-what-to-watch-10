export type AppProps = {
  mainFilm: {
    title: string,
    genre: string,
    year: number
  },
  films: FilmProps[]
}

export type FilmProps = {
  id: number,
  title: string,
  genre: string,
  year: number,
  imgUrl: string,
  videoUrl?: string
}

export type FilmListProps =  {
  films: FilmProps[]
}



