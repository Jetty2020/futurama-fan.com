import { CharacterCard } from './CharacterCard';
import { Error, Loading } from '../common';
import { useApiData } from '../../hooks';
import { CharacterData } from '../../types';
import styled from '@emotion/styled';
import { MEDIA_QUERY_END_POINT } from '../../constants';

export const CharacterCardContainer = () => {
  const path = 'characters';
  const { data, error } = useApiData(path);
  if (!data) return <Loading />;
  if (error) return <Error />;

  return (
    <CardCon>
      {data.map((characterData: CharacterData) => (
        <CharacterCard
          key={`${characterData.name.first}-character-${characterData.id}`}
          characterData={characterData}
        />
      ))}
    </CardCon>
  );
};

const CardCon = styled.ul`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: auto;
  gap: 24px 12px;
  place-items: center;
  margin: 30px auto 60px;
  @media (min-width: ${MEDIA_QUERY_END_POINT.TABLET}) {
    grid-template-columns: repeat(2, 1fr);
    gap: 50px 20px;
  }
  @media (min-width: ${MEDIA_QUERY_END_POINT.LAPTOP}) {
    grid-template-columns: repeat(3, 1fr);
    gap: 50px 24px;
  }
  @media (min-width: ${MEDIA_QUERY_END_POINT.DESKTOP}) {
    grid-template-columns: repeat(4, 1fr);
    gap: 50px 30px;
  }
`;
