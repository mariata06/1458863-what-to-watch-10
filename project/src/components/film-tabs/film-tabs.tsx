import { Link, Outlet } from 'react-router-dom';
import { useState } from 'react';

export function FIlmTabs() :JSX.Element {
  const [active, setActive] = useState('');

  return (
    <div className="film-card__desc">
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          <li className={`film-nav__item ${active === 'overview' ? 'film-nav__item--active' : ''}`}>
            <Link to="" className="film-nav__link" onClick={() => setActive('overview')}>Overview</Link>
          </li>
          <li className={`film-nav__item ${active === 'details' ? 'film-nav__item--active' : ''}`}>
            <Link to="details" className="film-nav__link" onClick={() => setActive('details')}>Details</Link>
          </li>
          <li className={`film-nav__item ${active === 'reviews' ? 'film-nav__item--active' : ''}`}>
            <Link to="reviews" className="film-nav__link" onClick={() => setActive('reviews')}>Reviews</Link>
          </li>
        </ul>
      </nav>

      <Outlet />

    </div>
  );
}
