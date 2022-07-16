import { Link } from 'react-router-dom';

export default function Page404(): JSX.Element {
  return (
    <section className="page404">
      <p>Page not found</p>
      <Link to="/">Go to main page</Link>
    </section>
  );
}
