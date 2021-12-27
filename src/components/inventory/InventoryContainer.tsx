import styled from '@emotion/styled';
import { InventoryCard } from '.';
import { MEDIA_QUERY_END_POINT } from '../../constants';
import { useApiData } from '../../hooks';
import { InventoryType } from '../../types';
import { Error, Loading } from '../common';

export const InventoryContainer = () => {
  const path = 'inventory';
  const { data, error } = useApiData(path);
  if (!data) return <Loading />;
  if (error) return <Error />;
  return (
    <Container>
      {data.map((item: InventoryType) => {
        return <InventoryCard key={`${item.id}-item`} inventoryData={item} />;
      })}
    </Container>
  );
};

const Container = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: minmax(120px, auto);
  gap: 20px;
  place-items: center;
  margin: 20px auto 50px;
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
