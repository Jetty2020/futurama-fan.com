import styled from '@emotion/styled';
import Link from 'next/link';
import { MEDIA_QUERY_END_POINT } from '../../constants';
import { InnerSubs } from '../../types';

export const SubNavigation = ({
  path,
  navData,
  backBtn,
}: {
  path: string;
  navData: InnerSubs[] | undefined;
  backBtn?: boolean;
}) => {
  console.log(backBtn);
  return (
    <Container>
      {backBtn && (
        <BackLink>
          <Link href={`/${path}`} passHref>
            <LinkArea>전체보기</LinkArea>
          </Link>
        </BackLink>
      )}
      {navData?.map((subLink: InnerSubs) => {
        const { ID, PATH, LABEL } = subLink;
        return (
          <li key={`${ID}-nav`}>
            <Link href={`/${path}${PATH}`} passHref>
              <LinkArea>{LABEL}</LinkArea>
            </Link>
          </li>
        );
      })}
    </Container>
  );
};

const Container = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto;
  gap: 12px 12px;
  width: 100vw;
  padding: 10px 20px 15px;
  margin: 0 -50px;
  background: #eee;
  @media (min-width: ${MEDIA_QUERY_END_POINT.TABLET}) {
    grid-template-columns: repeat(6, 1fr);
    gap: 15px 20px;
    margin: 0 -10vw;
  }
  @media (min-width: ${MEDIA_QUERY_END_POINT.LAPTOP}) {
    grid-template-columns: repeat(8, 1fr);
    margin: 0 -15vw;
    padding: 10px 10vw 15px;
  }
`;
const BackLink = styled.li`
  position: relative;
  &:after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    border: 3px solid #fcdd70;
    border-radius: 7px;
  }
`;
const LinkArea = styled.a`
  display: block;
  padding: 10px 0;
  border-radius: 7px;
  background: #fff;
  font-size: 14px;
  text-align: center;
  box-sizing: border-box;
  cursor: pointer;
  @media (min-width: ${MEDIA_QUERY_END_POINT.TABLET}) {
    font-size: 16px;
  }
  @media (min-width: ${MEDIA_QUERY_END_POINT.LAPTOP}) {
    padding: 7px 0;
  }
`;
