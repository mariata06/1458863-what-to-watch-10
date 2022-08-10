import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { films, film } from './mocks/films';
import { reviews } from './mocks/reviews';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App
      mainFilm={film}
      films={films}
      film={film}
      reviews={reviews}
    />
  </React.StrictMode>,
);
