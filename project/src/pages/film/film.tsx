import { useParams, Link } from 'react-router-dom';
import { FilmProps } from '../../types/types';
import PageFooter from '../../components/page-footer/page-footer';
import Logo from '../../components/logo/logo';
import Page404 from '../page404/page404';
import { FIlmTabs } from '../../components/film-tabs/film-tabs';
import FilmsList from '../../components/films-list/films-list';

type Props = {
  films: FilmProps[]
}

export default function Film({ films }: Props): JSX.Element {
  const { id } = useParams();
  const film = films.find((el) => el.id === Number(id));

  if (!film) {
    return <Page404 />;
  }

  return (
    <>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
          </div>
          <h1 className="visually-hidden">WTW</h1>
          <header className="page-header film-card__head">
            <Logo />
            <ul className="user-block">
              <li className="user-block__item">
                <div className="user-block__avatar">
                  <img src="img/avatar.jpg" alt="User avatar" width={63} height={63} />
                </div>
              </li>
              <li className="user-block__item">
                <a className="user-block__link">Sign out</a>
              </li>
            </ul>
          </header>
          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{ film.title }</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{ film.genre }</span>
                <span className="film-card__year">{ film.year }</span>
              </p>
              <div className="film-card__buttons">
                <button className="btn btn--play film-card__button" type="button">
                  <svg viewBox="0 0 19 19" width={19} height={19}>
                    <use xlinkHref="#play-s" />
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 19 20" width={19} height={20}>
                    <use xlinkHref="#add" />
                  </svg>
                  <span>My list</span>
                  <span className="film-card__count">9</span>
                </button>
                <Link to="review" className="btn film-card__button">Add review</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={film.imgUrl} alt={`${film.title} poster`} width="218" height="327" />
            </div>

            <FIlmTabs />

          </div>
        </div>
      </section>
      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          <FilmsList films={films.filter((el) => el.genre === film.genre).slice(0, 4)} />
        </section>

        <PageFooter />

      </div>
    </>
  );
}
