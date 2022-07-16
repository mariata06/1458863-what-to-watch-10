import { Navigate } from 'react-router-dom';

type LoginRouteProps = {
  children: JSX.Element;
};

export default function LoginRoute({ children }: LoginRouteProps): JSX.Element {
  const hasAccess = false;

  return hasAccess ? children : <Navigate to={'/login'} />;
}
