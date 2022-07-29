import { FilmProps } from '../../types/types';
import { Link } from 'react-router-dom';

type CardProps = {
  film: FilmProps,
  currentCard: number | null,
  onMouseOver: (id: number) => void;
  onMouseLeave: () => void
};

export default function SmallFilmCard({film, currentCard, onMouseOver, onMouseLeave}: CardProps): JSX.Element {
  const { title, imgUrl, id } = film;

  return (
    <article
      className="small-film-card catalog__films-card"
      id={`card-${id}`}
      onMouseOver={() => onMouseOver(id)}
      onMouseLeave={onMouseLeave}
    >
      <div className="small-film-card__image">
        <img src={imgUrl} alt={title} width="280" height="175" />
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`/films/${id}`}>
          {title}
        </Link>
      </h3>
    </article>
  );
}
