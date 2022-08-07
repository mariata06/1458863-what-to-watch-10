import { Review } from '../../components/review/review';
import { ReviewProps } from '../../types/types';

type FilmReviewsProps = {
  reviews: ReviewProps[]
}

// const renderElements = ((elements: ReviewProps[]) => {
//   elements.map((el) => {

//     return (
//         <Review key={el.id} review={el} />
//       )
//   })
// })

export function FilmReviews(props :FilmReviewsProps) :JSX.Element {
  const arr = props.reviews;
  const count = Number(arr.length / 2);
  const firstCommentsArray = arr.splice(0, count);
  const secondCommentsArray = arr.splice(count);

  if (arr.length === 1) {
    return (
      <div className="film-card__reviews film-card__row">
        <div className="film-card__reviews-col">
          <Review review={arr[0]}/>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="film-card__reviews film-card__row">
        <div className="film-card__reviews-col">
          {
            firstCommentsArray.map((el) =>
              (
                <Review key={el.id} review={el} />
              )
            )
          }
        </div>
      </div>
      <div className="film-card__reviews film-card__row">
        <div className="film-card__reviews-col">
          {
            secondCommentsArray.map((el) =>
              (
                <Review key={el.id} review={el} />
              )
            )
          }
        </div>
      </div>
    </>
);
}
