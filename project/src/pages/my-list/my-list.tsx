import FilmsList from '../../components/films-list/films-list';
import Logo from '../../components/logo/logo';
import PageFooter from '../../components/page-footer/page-footer';
import { FilmProps } from '../../types/types';

type FilmListProps = {
  films: FilmProps[]
}

export default function MyList({films}:FilmListProps): JSX.Element {
  const myFilms = films.slice(0, 10);
  const counter = myFilms.length;

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo />
        <h1 className="page-title user-page__title">My list <span className="user-page__film-count">{counter}</span></h1>
        <ul className="user-block">
          <li className="user-block__item">
            <div className="user-block__avatar">
              <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
            </div>
          </li>
          <li className="user-block__item">
            <a className="user-block__link" href="/">Sign out</a>
          </li>
        </ul>
      </header>
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <FilmsList films={myFilms} />

      </section>

      <PageFooter />

    </div>
  );
}
