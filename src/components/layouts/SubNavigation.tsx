import Link from 'next/link';
import { InnerSubs } from '../../types';

export const SubNavigation = ({
  path,
  navData,
}: {
  path: string;
  navData: InnerSubs[] | undefined;
}) => {
  return (
    <ul>
      {navData?.map((subLink: InnerSubs) => {
        const { ID, PATH, LABEL } = subLink;
        return (
          <li key={`${ID}-nav`}>
            <Link href={`/${path}${PATH}`}>
              <a>{LABEL}</a>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
