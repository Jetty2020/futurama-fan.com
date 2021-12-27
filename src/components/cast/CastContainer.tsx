import styled from '@emotion/styled';
import { CastCard } from '.';
import { MEDIA_QUERY_END_POINT } from '../../constants';
import { useApiData } from '../../hooks';
import { CastType } from '../../types';
import { Error, Loading } from '../common';

export const CastContainer = () => {
  const path = 'cast';
  const { data, error } = useApiData(path);

  if (!data) return <Loading />;
  if (error) return <Error />;
  return (
    <div>
      <CardList>
        {data.map((castData: CastType) => {
          return <CastCard key={`cast-${castData.id}`} castData={castData} />;
        })}
      </CardList>
    </div>
  );
};

const CardList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto;
  gap: 20px;
  place-items: center;
  margin: 0 auto;
  padding: 60px 0;
  @media (min-width: ${MEDIA_QUERY_END_POINT.TABLET}) {
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
  }
  @media (min-width: ${MEDIA_QUERY_END_POINT.LAPTOP}) {
    grid-template-columns: repeat(6, 1fr);
    gap: 20px;
  }
  @media (min-width: ${MEDIA_QUERY_END_POINT.DESKTOP}) {
    grid-template-columns: repeat(8, 1fr);
    gap: 20px;
  }
`;
