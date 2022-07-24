import { FilmProps } from "../../types/types";
import { Link } from 'react-router-dom'

type CardProps = {
  film: FilmProps;
  currentCard: number | string;
  handleMouseOver: (id: number) => void;
  handleMouseLeave: () => void;
};

export default function SmallFilmCard(props: CardProps): JSX.Element {
  const { film, handleMouseOver, handleMouseLeave } = props;
  const { title, imgUrl, id } = film;

  return (
    <article
      className="small-film-card catalog__films-card"
      id={`card-${id}`}
      onMouseOver={() => { handleMouseOver(id)}}
      onMouseLeave={handleMouseLeave}>
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
