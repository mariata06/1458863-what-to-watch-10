import SmallFilmCard from '../../components/small-film-card/small-film-card';

type MainScreenProps = {
  title: string,
  genre: string,
  year: number
}

const smallCards = [
  { id: 1, title: 'Fantastic Beasts: The Crimes of Grindelwald', imgUrl: 'img/fantastic-beasts-the-crimes-of-grindelwald.jpg' },
  { id: 2, title: 'Bohemian Rhapsody', imgUrl: 'img/bohemian-rhapsody.jpg' },
  { id: 3, title: 'Macbeth', imgUrl: 'img/macbeth.jpg' },
  { id: 4, title: 'Aviator', imgUrl: 'img/aviator.jpg' },
  { id: 5, title: 'We need to talk about Kevin', imgUrl: 'img/we-need-to-talk-about-kevin.jpg' },
  { id: 6, title: 'What We Do in the Shadows', imgUrl: 'img/what-we-do-in-the-shadows.jpg' },
  { id: 7, title: 'Revenant', imgUrl: 'img/revenant.jpg' },
  { id: 8, title: 'Johnny English', imgUrl: 'img/johnny-english.jpg' },
  { id: 9, title: 'Shutter Island', imgUrl: 'img/shutter-island.jpg' },
  { id: 10, title: 'Pulp Fiction', imgUrl: 'img/pulp-fiction.jpg' },
  { id: 11, title: 'No Country for Old Men', imgUrl: 'img/no-country-for-old-men.jpg' },
  { id: 12, title: 'Snatch', imgUrl: 'img/snatch.jpg' },
  { id: 13, title: 'Moonrise Kingdom', imgUrl: 'img/moonrise-kingdom.jpg' },
  { id: 14, title: 'Seven Years in Tibet', imgUrl: 'img/seven-years-in-tibet.jpg' },
  { id: 15, title: 'Midnight Special', imgUrl: 'img/midnight-special.jpg' },
  { id: 16, title: 'War of the Worlds', imgUrl: 'img/war-of-the-worlds.jpg' },
  { id: 17, title: 'Dardjeeling Limited', imgUrl: 'img/dardjeeling-limited.jpg' },
  { id: 18, title: 'Orlando', imgUrl: 'img/orlando.jpg' },
  { id: 19, title: 'Mindhunter', imgUrl: 'img/mindhunter.jpg' },
  { id: 20, title: 'Midnight Special', imgUrl: 'img/midnight-special.jpg' }
];

export default function MainScreen({ title, genre, year }: MainScreenProps): JSX.Element {

  return (
    <>
      <section className="film-card">
        <div className="film-card__bg">
          <img
            src="img/bg-the-grand-budapest-hotel.jpg"
            alt="The Grand Budapest Hotel"
          />
        </div>
        <h1 className="visually-hidden">WTW</h1>
        <header className="page-header film-card__head">
          <div className="logo">
            <a className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>
          <ul className="user-block">
            <li className="user-block__item">
              <div className="user-block__avatar">
                <img
                  src="img/avatar.jpg"
                  alt="User avatar"
                  width="63"
                  height="63"
                />
              </div>
            </li>
            <li className="user-block__item">
              <a className="user-block__link">Sign out</a>
            </li>
          </ul>
        </header>
        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img
                src="img/the-grand-budapest-hotel-poster.jpg"
                alt="The Grand Budapest Hotel poster"
                width="218"
                height="327"
              />
            </div>
            <div className="film-card__desc">
              <h2 className="film-card__title"> { title }</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{ genre }</span>
                <span className="film-card__year">{ year }</span>
              </p>
              <div className="film-card__buttons">
                <button className="btn btn--play film-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s" />
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add" />
                  </svg>
                  <span>My list</span>
                  <span className="film-card__count">9</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <ul className="catalog__genres-list">
            <li className="catalog__genres-item catalog__genres-item--active">
              <a href="#" className="catalog__genres-link">
                All genres
              </a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">
                Comedies
              </a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">
                Crime
              </a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">
                Documentary
              </a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">
                Dramas
              </a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">
                Horror
              </a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">
                Kids &amp; Family
              </a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">
                Romance
              </a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">
                Sci-Fi
              </a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">
                Thrillers
              </a>
            </li>
          </ul>

          <div className="catalog__films-list">
            {smallCards.map((card) => (
              <SmallFilmCard key={card.id} title={card.title} imgUrl={card.imgUrl} />
            ))}
          </div>

          <div className="catalog__more">
            <button className="catalog__button" type="button">
              Show more
            </button>
          </div>
        </section>
        <footer className="page-footer">
          <div className="logo">
            <a className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>
          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </>
  );
}
