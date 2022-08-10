import { FilmProps } from '../../types/types';


type filmOverviewProps = {
  film: FilmProps
};

export function FilmOverview({film}: filmOverviewProps) :JSX.Element {
  const { score, ratingCount, desc, director, starring } = film;

  return (
    <>
      <div className="film-rating">
        <div className="film-rating__score">{ score }</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">Very good</span>
          <span className="film-rating__count">{ ratingCount } ratings</span>
        </p>
      </div>
      <div className="film-card__text">
        <p>{ desc }</p>
        <p className="film-card__director"><strong>Director: { director }</strong></p>
        <p className="film-card__starring"><strong>Starring: { starring }</strong></p>
      </div>
    </>
  );
}
