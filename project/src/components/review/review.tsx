import { ReviewProps } from '../../types/types';

type reviewProps = {
  review: ReviewProps
}

export function Review({ review }: reviewProps): JSX.Element {
  const { author, comment, dateTime, date, rating } = review;

  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{ comment }</p>
        <footer className="review__details">
          <cite className="review__author">{ author }</cite>
          <time className="review__date" dateTime={ dateTime }>{ date }</time>
        </footer>
      </blockquote>
      <div className="review__rating">{ rating }</div>
    </div>
  );
}
