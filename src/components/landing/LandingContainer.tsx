import styled from '@emotion/styled';
import { MEDIA_QUERY_END_POINT } from '../../constants';

export const LandingContainer = () => {
  return (
    <Container>
      <LandingTitle>Enjoy your Futurama</LandingTitle>
      <LandingImg src="/landing.jpg" alt="" />
      <LandingMobileP>퓨처라마를 즐기기위한 웹사이트 입니다.</LandingMobileP>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 70px);
  /* background: pink; */
  @media (min-width: ${MEDIA_QUERY_END_POINT.TABLET}) {
    height: calc(100vh - 108px);
  }
  @media (min-width: ${MEDIA_QUERY_END_POINT.LAPTOP}) {
    height: calc(100vh - 70px);
  }
`;
const LandingTitle = styled.h2`
  margin: -60px 0 40px;
  font-size: 40px;
  font-weight: 700;
`;
const LandingImg = styled.img`
  width: 100%;
`;
const LandingMobileP = styled.p`
  margin: 50px 0 -50px;
  font-size: 20px;
  font-weight: 700;
  @media (min-width: ${MEDIA_QUERY_END_POINT.TABLET}) {
    display: none;
  }
`;
