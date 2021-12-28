import styled from '@emotion/styled';
import Link from 'next/link';
import { useApiData } from '../../hooks';
import { Error, Loading } from '../common';

interface CREATOR {
  name: string;
  url: string;
}
export const InfoContainer = () => {
  const name = 'info';
  const { data, error } = useApiData(name, '1');

  if (!data) return <Loading />;
  if (error) return <Error />;
  return (
    <Container>
      <em>Synopsis</em>
      <p>{data.synopsis}</p>
      <em>Aired Year</em>
      <p>{data.yearsAired}</p>
      <em>Creators</em>
      <CreatorList>
        {data.creators?.map((creator: CREATOR, index: string) => {
          return (
            <CreatorBox key={index}>
              <CreatorImg src={`/info/${index + 1}.jpg`} alt="avatar" />
              <Link href={creator.url}>
                <a target="_blank">{creator.name}</a>
              </Link>
            </CreatorBox>
          );
        })}
      </CreatorList>
    </Container>
  );
};

const Container = styled.div`
  margin: 20px 0 40px;
  line-height: 1.6;

  & em {
    display: block;
    margin-top: 20px;
    font-size: 18px;
    font-weight: 500;
  }

  & p {
    padding: 10px;
  }
`;
const CreatorList = styled.ul`
  display: flex;
`;
const CreatorBox = styled.li``;
const CreatorImg = styled.img`
  display: block;
  width: 50%;
  margin: 20px 0;
`;
