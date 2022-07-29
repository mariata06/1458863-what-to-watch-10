import SmallFilmCard from '../../components/small-film-card/small-film-card';
import { FilmProps } from '../../types/types';

type FilmListProps = {
  films: FilmProps[]
}


export default function FilmsList({ films } :FilmListProps) :JSX.Element {

  return (
    <div className="catalog__films-list">
      {
        films.map((el) =>
          (
            <SmallFilmCard key={el.id} film={el} />
          )
        )
      }
    </div>
  );
}
