import { FilmProps } from '../../types/types';
import { useParams } from 'react-router-dom';
import Page404 from '../../pages/page404/page404';


type filmDetailsProps = {
  films: FilmProps[]
};

export function FilmDetails({films}: filmDetailsProps) :JSX.Element {
  const { id } = useParams();
  const film = films.find((el) => el.id === Number(id));
  if (!film) {
    return <Page404 />;
  }

  return (
    <div className="film-card__text film-card__row">
      <div className="film-card__text-col">
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Director</strong>
          <span className="film-card__details-value">{ film.director }</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Starring</strong>
          <span className="film-card__details-value">{ film.starring }</span>
        </p>
      </div>
      <div className="film-card__text-col">
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Run Time</strong>
          <span className="film-card__details-value">{ film.time }</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Genre</strong>
          <span className="film-card__details-value">{ film.genre }</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Released</strong>
          <span className="film-card__details-value">{ film.year }</span>
        </p>
      </div>
    </div>
  )
}
