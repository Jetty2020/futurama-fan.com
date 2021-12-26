import styled from '@emotion/styled';
import Image from 'next/image';
import Link from 'next/link';
import { MEDIA_QUERY_END_POINT, ROUTES } from '../../constants';

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
    <Header>
      <h1>
        <Link href="/"><a><Image src="/logo.png" alt="logo" width={170} height={30} /></a></Link>
      </h1>
      <Nav>
        <NavList>
          {ROUTES.map((routeObject: ROUTE) => {
            return (
              <MainLink key={routeObject.LABEL}>
                <Link href={routeObject.PATH}>
                  <a>{routeObject.LABEL}</a>
                </Link>
                {!!routeObject.SUBS.length && (
                  <Sub>
                    {routeObject.SUBS.map((subRouteObject: INNERSUBS) => {
                      return (
                        <SubLink key={subRouteObject.LABEL}>
                          <Link
                            href={`${routeObject.PATH}${subRouteObject.PATH}`}
                          >
                            <a>{subRouteObject.LABEL}</a>
                          </Link>
                        </SubLink>
                      );
                    })}
                  </Sub>
                )}
              </MainLink>
            );
          })}
        </NavList>
      </Nav>
    </Header>
  );
};

const Header = styled.header`
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  height: 70px;
  padding: 0 30px;
  background: #eee;
`;

const Nav = styled.nav`
  margin-left: 40px;
  font-weight: 500;
`;
const NavList = styled.ul`
  display: flex;
`;
const MainLink = styled.li`
  position: relative;
  margin-top: 30px;
  padding-bottom: 20px;
  &:not(:first-child) {
    margin-left: 15px;
  }
  @media (min-width: ${MEDIA_QUERY_END_POINT.LAPTOP}) {
    &:hover {
      color: #808080;
    }
    &:hover ul {
      display: block;
    }
  }
`;
const Sub = styled.ul`
  display: none;
  position: absolute;
  top: 30px;
  left: 50%;
  padding: 15px 10px;
  border: 1px solid #eee;
  background: #fff;
  font-size: 14px;
  color: #000;
  text-align: center;
  transform: translateX(-50%);
`;
const SubLink = styled.li`
  white-space: nowrap;
  &:not(:first-child) {
    margin-top: 8px;
  }
  &:hover {
    color: #808080;
  }
`;
