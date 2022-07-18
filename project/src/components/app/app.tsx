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

type AppProps = {
  title: string,
  genre: string,
  year: number
}

export default function App({ title, genre, year }: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<MainScreen title={ title } genre={ genre } year={ year } />} />
          <Route path='login' element={<SignIn />} />
          <Route path='mylist' element={
            <LoginRoute>
              <MyList />
            </LoginRoute>
          }
          />
          <Route path='films/'>
            <Route index element={<Film />} />
            <Route path=':id/' element={<Film />} />
            <Route path=':id/review' element={
              <LoginRoute>
                <AddReview />
              </LoginRoute>
            }
            />
          </Route>
          <Route path='player/:id' element={<Player />} />
        </Route>
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
}
