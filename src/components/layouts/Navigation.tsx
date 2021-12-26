import Link from 'next/link';
import { ROUTES } from '../../constants';

interface INNERSUBS {
  ID: number;
  PATH: string;
  LABEL: string;
  ORDER: number;
}
interface ROUTE {
  ID: number;
  PATH: string;
  LABEL: string;
  SUBS: Array<INNERSUBS>;
}

export const Navigation = () => {
  return (
    <header>
      <h1>Futurama</h1>
      <nav>
        <ul>
          {ROUTES.map((routeObject: ROUTE) => {
            return (
              <li key={routeObject.LABEL}>
                <Link href={routeObject.PATH}>
                  <a>{routeObject.LABEL}</a>
                </Link>
                <ul>
                  {routeObject.SUBS &&
                    routeObject.SUBS.map((subRouteObject: INNERSUBS) => {
                      return (
                        <li key={subRouteObject.LABEL}>
                          <Link
                            href={`${routeObject.PATH}${subRouteObject.PATH}`}
                          >
                            <a>{subRouteObject.LABEL}</a>
                          </Link>
                        </li>
                      );
                    })}
                </ul>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};
