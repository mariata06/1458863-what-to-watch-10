import { FilmProps } from '../../types/types';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Video from '../../components/video/video';

type CardProps = {
  film: FilmProps
};


export default function SmallFilmCard({film}: CardProps): JSX.Element {
  const {id, title} = film;
  const [isActive, setActive] = useState(false);
  let timer: NodeJS.Timeout | null = null;
  const TIME = 1000;

  const onMouseOver = () => {
    timer = setTimeout(() => {
      setActive(true);
    }, TIME);
  };

  const onMouseLeave = () => {
    if(timer) {
      clearTimeout(timer);
      timer = null;
    }

    setActive(false);
  };

  return (
    <article
      className="small-film-card catalog__films-card"
      onMouseOver={onMouseOver}
      onMouseLeave={onMouseLeave}
    >
      <Video film={film} isActive={isActive} />
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`/films/${id}`}>
          {title}
        </Link>
      </h3>
    </article>
  );
}
