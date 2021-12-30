import styled from '@emotion/styled';
import { MEDIA_QUERY_END_POINT } from '../../constants';

export const LandingContainer = () => {
  return (
    <Container>
      <LandingTitle>Enjoy your Futurama</LandingTitle>
      <LandingImg src="/landing.jpg" alt="" />
      <LandingMobileP>
        “Oh Wait, You’re Serious. Let Me Laugh Even Harder.” – Bender
      </LandingMobileP>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 70px);
  @media (min-width: ${MEDIA_QUERY_END_POINT.TABLET}) {
    min-height: calc(100vh - 108px);
  }
  @media (min-width: ${MEDIA_QUERY_END_POINT.LAPTOP}) {
    min-height: calc(100vh - 70px);
  }
`;
const LandingTitle = styled.h2`
  margin-top: -40px;
  font-size: 40px;
  font-weight: 700;
  text-align: center;
`;
const LandingImg = styled.img`
  max-width: 100%;
  margin-top: 40px;
  @media (min-width: ${MEDIA_QUERY_END_POINT.TABLET}) {
    max-height: 60vh;
  }
`;
const LandingMobileP = styled.p`
  margin: 50px 0 -50px;
  font-size: 20px;
  font-weight: 700;
  text-align: center;
  @media (min-width: ${MEDIA_QUERY_END_POINT.TABLET}) {
    display: none;
  }
`;
