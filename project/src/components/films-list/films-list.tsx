import SmallFilmCard from '../../components/small-film-card/small-film-card';
import { FilmProps } from '../../types/types';
import { useState } from 'react';

type FilmListProps = {
  films: FilmProps[]
}


export default function FilmsList({ films } :FilmListProps) :JSX.Element {
  const [currentCard , setCurrentCard ] = useState<number | null>(null);

  const setCurrent = (id: number): void =>
    setCurrentCard(id);

  const disableCurrent = (): void =>
    setCurrentCard(null);

  return (
    <div className="catalog__films-list">
      {
        films.map((el) =>
          (
            <SmallFilmCard
              key={el.id}
              film={el}
              currentCard={currentCard}
              onMouseOver={setCurrent}
              onMouseLeave={disableCurrent}
            />
          )
        )
      }
    </div>
  );
}
