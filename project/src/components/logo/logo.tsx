import { Link } from 'react-router-dom';
import { LogoProps } from '../../types/types';

export default function Logo(props: LogoProps) :JSX.Element {
  return (
    <div className="logo">
      <Link className={props.className ? `logo__link ${props.className}` : 'logo__link'} to="/">
        <span className="logo__letter logo__letter--1">W</span>
        <span className="logo__letter logo__letter--2">T</span>
        <span className="logo__letter logo__letter--3">W</span>
      </Link>
    </div>
  );
}

