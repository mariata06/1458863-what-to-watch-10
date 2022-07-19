import { useState } from 'react';
import SmallFilmCard from '../../components/small-film-card/small-film-card';
import { FilmListProps } from '../../types/types'

export default function FilmsList({ films } :FilmListProps) :JSX.Element {
  // const setActiveCard = useState<t>()
  return (
    <div className="catalog__films-list">
      {films.map((film) => SmallFilmCard(film))}
    </div>
  )
}
