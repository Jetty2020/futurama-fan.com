import styled from '@emotion/styled';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { MEDIA_QUERY_END_POINT, ROUTES } from '../../constants';
import { InnerSubs, NavRoute } from '../../types';

export const Navigation = () => {
  const width = 200;
  const [xPosition, setX] = useState(width);

  const toggleMenu = () => {
    if (xPosition > 0) {
      setX(0);
    } else {
      setX(width);
    }
  };
  useEffect(() => {
    setX(width);
  }, []);
  return (
    <Header>
      <h1>
        <Link href="/">
          <a>
            <LogoImg src="/logo.png" alt="logo" />
          </a>
        </Link>
      </h1>
      <Nav>
        <SideBar
          style={{
            transform: `translatex(${xPosition}px)`,
          }}
        >
          {ROUTES.map((routeObject: NavRoute) => {
            return (
              <MainLink key={routeObject.LABEL}>
                <Link href={routeObject.PATH} passHref>
                  <InnerLink>{routeObject.LABEL}</InnerLink>
                </Link>
              </MainLink>
            );
          })}
          <SideBarBtn type="button" onClick={() => toggleMenu()}>
            <MenuImg src="/icons/menu.svg" alt="메뉴 버튼" />
            <span className="sr-only">메뉴 닫기 버튼</span>
          </SideBarBtn>
        </SideBar>
        <NavList>
          {ROUTES.map((routeObject: NavRoute) => {
            return (
              <MainLink key={routeObject.LABEL}>
                <Link href={routeObject.PATH} passHref>
                  <InnerLink className="link-main">
                    {routeObject.LABEL}{' '}
                    {!!routeObject.SUBS.length && (
                      <DropDownCon>
                        <Image
                          src="/icons/drop-down.svg"
                          alt="서브메뉴 표시"
                          width={15}
                          height={15}
                        ></Image>
                      </DropDownCon>
                    )}
                  </InnerLink>
                </Link>
                {!!routeObject.SUBS.length && (
                  <Sub>
                    {routeObject.SUBS.map((subRouteObject: InnerSubs) => {
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
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  height: 70px;
  padding: 0 25px;
  background: #eee;
  z-index: 1000;
  @media (min-width: ${MEDIA_QUERY_END_POINT.TABLET}) {
    display: block;
    height: 108px;
    padding: 20px 40px;
  }
  @media (min-width: ${MEDIA_QUERY_END_POINT.LAPTOP}) {
    display: flex;
    height: 70px;
    padding: 20px 40px;
  }
`;
const LogoImg = styled.img`
  width: 35vw;
  max-width: 170px;
  @media (min-width: ${MEDIA_QUERY_END_POINT.TABLET}) {
    width: 170px;
  }
`;
const Nav = styled.nav`
  @media (min-width: ${MEDIA_QUERY_END_POINT.LAPTOP}) {
    display: block;
    font-weight: 500;
    padding-top: 5px;
    margin-left: 4px;
    padding-top: 0px;
    margin-left: 40px;
  }
`;
const MenuImg = styled.img``;
const SideBar = styled.ul`
  position: absolute;
  top: 0;
  right: 0;
  width: 200px;
  height: 100vh;
  background: #fff;
  padding: 30px 20px;
  transition: 0.8s ease;
  @media (min-width: ${MEDIA_QUERY_END_POINT.TABLET}) {
    display: none;
  }
`;
const SideBarBtn = styled.button`
  position: absolute;
  bottom: 30vh;
  left: -35px;
  height: 50px;
  width: 35px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  background: #c7244a;
  box-sizing: border-box;
`;
const NavList = styled.ul`
  display: none;
  @media (min-width: ${MEDIA_QUERY_END_POINT.TABLET}) {
    display: flex;
  }
`;
const MainLink = styled.li`
  padding: 15px 10px;
  border-bottom: 2px solid #eee;
  @media (min-width: ${MEDIA_QUERY_END_POINT.TABLET}) {
    position: relative;
    margin-top: 10px;
    padding: none;
    border-bottom: none;
    &:not(:first-child) {
      margin-left: 20px;
    }
  }
  @media (min-width: ${MEDIA_QUERY_END_POINT.LAPTOP}) {
    padding-bottom: 20px;
    &:hover .link-main {
      opacity: 0.5;
    }
    &:hover ul {
      display: block;
    }
  }
`;
const InnerLink = styled.a`
  @media (min-width: ${MEDIA_QUERY_END_POINT.TABLET}) {
    display: flex;
    white-space: nowrap;
  }
`;
const DropDownCon = styled.span`
  display: none;
  @media (min-width: ${MEDIA_QUERY_END_POINT.LAPTOP}) {
    display: block;
    width: 20px;
    margin: 2px -10px 0 1px;
  }
`;
const Sub = styled.ul`
  display: none;
  @media (min-width: ${MEDIA_QUERY_END_POINT.TABLET}) {
    position: absolute;
    top: 40px;
    left: 50%;
    padding: 15px 10px;
    border: 1px solid #eee;
    background: #fff;
    font-size: 14px;
    color: #000;
    text-align: center;
    transform: translateX(-50%);
  }
`;
const SubLink = styled.li`
  @media (min-width: ${MEDIA_QUERY_END_POINT.TABLET}) {
    white-space: nowrap;
    &:not(:first-child) {
      margin-top: 8px;
    }
    &:hover {
      color: #808080;
    }
  }
`;
