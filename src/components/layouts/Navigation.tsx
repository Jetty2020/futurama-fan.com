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
        <Link href="/">
          <a>
            <Image src="/logo.png" alt="logo" width={170} height={30} />
          </a>
        </Link>
      </h1>
      <Nav>
        <NavList>
          {ROUTES.map((routeObject: ROUTE) => {
            return (
              <MainLink key={routeObject.LABEL}>
                <Link href={routeObject.PATH}>
                  <InnerLink>
                    {routeObject.LABEL}{' '}
                    {!!routeObject.SUBS.length && (
                      <DropDownCon><Image src="/drop-down.svg" alt="서브메뉴 표시" width={15} height={15}></Image></DropDownCon>
                    )}
                  </InnerLink>
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
  display: block;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  padding: 20px 40px;
  background: #eee;
  @media (min-width: ${MEDIA_QUERY_END_POINT.TABLET}) {
    display: flex;
    height: 70px;
  }
`;

const Nav = styled.nav`
  font-weight: 500;
  padding-top: 5px;
  margin-left: 4px;
  @media (min-width: ${MEDIA_QUERY_END_POINT.TABLET}) {
    padding-top: 0px;
    margin-left: 40px;
  }
`;
const NavList = styled.ul`
  display: flex;
`;
const MainLink = styled.li`
  position: relative;
  margin-top: 10px;
  &:not(:first-child) {
    margin-left: 15px;
  }
  @media (min-width: ${MEDIA_QUERY_END_POINT.LAPTOP}) {
    padding-bottom: 20px;
    &:hover {
      /* color: #808080; */
      opacity: 0.5;
    }
    &:hover ul {
      display: block;
    }
  }
`;
const InnerLink = styled.a`
  display: flex;
  white-space: nowrap;
`;
const DropDownCon = styled.span`
  display: block;
  width: 20px;
  margin: 2px 0 0 2px;
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
