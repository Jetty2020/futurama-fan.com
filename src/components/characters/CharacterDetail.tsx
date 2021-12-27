import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import { MEDIA_QUERY_END_POINT } from '../../constants';
import { useApiData } from '../../hooks';
import { Error, Loading } from '../common';

export const CharacterDetail = () => {
  const path = 'characters';
  const router = useRouter();
  const { pid } = router.query;
  const { data, error } = useApiData(path, pid);

  if (!data) return <Loading />;
  if (error) return <Error />;

  const { name, images, gender, species, homePlanet, occupation, sayings } =
    data;
  return (
    <Container>
      <NameBox>
        - {name.first} {name.middle} {name.last}
      </NameBox>
      <ImgBox>
        <Avartar src={images.main} alt="" />
      </ImgBox>
      <InfoBox>
        {gender && <GenderContent>{gender}</GenderContent>}
        {species && <SpeciesContent>{species}</SpeciesContent>}
        {homePlanet && <HPContent>{homePlanet}</HPContent>}
        {occupation && <OccuContent>{occupation}</OccuContent>}
      </InfoBox>
      <SayingsCon>
        <SayingsTitle>Sayings</SayingsTitle>
        <SayingsList>
          {sayings.map((saying: string, index: number) => {
            return (
              <SayingBox key={`${index}-${name.last}-saying`}>
                {saying}
              </SayingBox>
            );
          })}
        </SayingsList>
      </SayingsCon>
    </Container>
  );
};

const Container = styled.div`
  margin-top: 30px;
`;
const NameBox = styled.h3`
  font-size: 22px;
  font-weight: 500;
`;
const ImgBox = styled.div`
  width: 70%;
  max-width: 200px;
  margin: 30px auto;
`;
const Avartar = styled.img`
  width: 100%;
`;
const InfoBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 30px;
`;
const InfoContent = styled.span`
  display: block;
  padding: 5px 15px;
  margin: 5px;
  border-radius: 30px;
  background: #f7f7f7;
  text-align: center;
  border: 3px solid #eee;
`;
const GenderContent = styled(InfoContent)`
  border-color: #993393;
`;
const SpeciesContent = styled(InfoContent)`
  border-color: #345f65;
`;
const HPContent = styled(InfoContent)`
  border-color: #f56f5d;
`;
const OccuContent = styled(InfoContent)`
  border-color: #6ebc46;
`;
const SayingsCon = styled.div`
  margin-top: 40px;
`;
const SayingsTitle = styled.h4`
  font-size: 18px;
  font-weight: 500;
`;
const SayingsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: auto;
  gap: 24px 0;
  /* place-items: center; */
  margin: 30px auto;
  @media (min-width: ${MEDIA_QUERY_END_POINT.TABLET}) {
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
  }
  @media (min-width: ${MEDIA_QUERY_END_POINT.LAPTOP}) {
    grid-template-columns: repeat(4, 1fr);
    gap: 50px 24px;
  }
  @media (min-width: ${MEDIA_QUERY_END_POINT.DESKTOP}) {
    grid-template-columns: repeat(6, 1fr);
    gap: 50px 30px;
  }
`;

const SayingBox = styled.li`
  display: flex;
  align-items: center;
  padding: 10px 15px;
  border: 3px solid #a2e8ee;
  border-radius: 10px;
  background: #f7f7f7;
  font-family: 'Indie Flower', cursive;
  letter-spacing: 1px;
  line-height: 1.6;
`;
