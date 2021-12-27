import styled from '@emotion/styled';
import Link from 'next/link';
import { CastType } from '../../types';

export const CastCard = ({ castData }: { castData: CastType }) => {
  const { id, name, born, died, bio } = castData;
  return (
    <CardBox>
      <CastImg src={`/cast/${id}.jpg`} alt="cast-img" />
      <CastName>{name}</CastName>
      <BornBox>
        {born} ~ {died}
      </BornBox>
      {bio.text && <p>{bio.text}</p>}
      <Link href={bio.url} passHref>
        <More target="_blank">More Info</More>
      </Link>
    </CardBox>
  );
};

const CardBox = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  max-width: 150px;
  min-width: 120px;
  height: 100%;
  align-items: center;
  padding: 10px 0;
  border: 1px solid #000;
  background: #fff;
`;
const CastImg = styled.img`
  width: 100%;
  max-width: 100px;
`;
const CastName = styled.h3`
  display: inline;
  margin-top: 10px;
  font-size: 20px;
`;
const BornBox = styled.p`
  margin: 10px 0;
`;
const More = styled.a`
  display: block;
  padding: 8px 15px;
  border-radius: 10px;
  color: #fff;
  background: #f38121;
`;
