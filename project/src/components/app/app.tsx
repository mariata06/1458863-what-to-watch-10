import {
  BrowserRouter,
  Route,
  Routes
} from 'react-router-dom';

import Layout from '../../components/layout/layout';
import MainScreen from '../../pages/main-screen/main-screen';
import SignIn from '../../pages/sign-in/sign-in';
import MyList from '../../pages/my-list/my-list';
import Film from '../../pages/film/film';
import AddReview from '../../pages/add-review/add-review';
import Player from '../../pages/player/player';
import Page404 from '../../pages/page404/page404';
import LoginRoute from '../../components/login-route/login-route';
import { FilmProps, ReviewProps } from '../../types/types';
import { FilmDetails } from '../film-details/film-details';
import { FilmReviews } from '../../components/film-reviews/film-reviews';
import { FilmOverview } from '../../components/film-overview/film-overview'

type AppProps = {
  mainFilm: FilmProps,
  film: FilmProps,
  films: FilmProps[],
  reviews: ReviewProps[]
}

export default function App({ mainFilm, films, film, reviews }: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<MainScreen films={films} mainFilm={mainFilm} />} />
          <Route path='login' element={<SignIn />} />
          <Route path='mylist' element={
            <LoginRoute>
              <MyList films={films} />
            </LoginRoute>
          }
          />
            <Route path='films/:id/' element={<Film films={films}/>}>
              {/* <Route index element={<FilmOverview film={film}/>} /> */}
              <Route path='?tab=overview' element={<FilmOverview film={film}/>} />
              <Route path='?tab=details' element={<FilmDetails film={film}/>} />
              <Route path='?tab=reviews' element={<FilmReviews reviews={reviews}/>} />
            </Route>
            <Route path=':id/review' element={
              <LoginRoute>
                <AddReview films={films}/>
              </LoginRoute>
            }
            />
          <Route path='player/:id' element={<Player films={films}/>} />
        </Route>
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
}
