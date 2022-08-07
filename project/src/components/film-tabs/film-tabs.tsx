import { Link, Outlet, useParams } from 'react-router-dom';

export function FIlmTabs() :JSX.Element {
  let { id } = useParams();
  return (
    <div className="film-card__desc">
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          <li className="film-nav__item film-nav__item--active">
            <Link to={`/films/${id}/?tab=overview`} className="film-nav__link">Overview</Link>
          </li>
          <li className="film-nav__item">
            <Link to={`/films/${id}/?tab=details`} className="film-nav__link">Details</Link>
          </li>
          <li className="film-nav__item">
            <Link to={`/films/${id}/?tab=reviews`} className="film-nav__link">Reviews</Link>
          </li>
        </ul>
      </nav>

      <Outlet />

    </div>
  )
}
