import styled from '@emotion/styled';
import Link from 'next/link';
import { CharacterData } from '../../types';

export const CharacterCard = ({
  characterData,
}: {
  characterData: CharacterData;
}) => {
  const path = 'characters';
  const { id, name, images, gender, species, homePlanet, occupation } =
    characterData;
  console.log(characterData);
  return (
    <Container>
      <Link href={`/${path}/${id}`} passHref>
        <InfoLink>
          <CharacterName>
            {name.first} {name.middle} {name.last}
          </CharacterName>
          <ImgCon>
            <AvatarImg src={images.main} alt="" />
          </ImgCon>
          <InfoBox>
            {gender && <InfoContent>{gender}</InfoContent>}
            {species && <InfoContent>{species}</InfoContent>}
            {homePlanet && <InfoContent>{homePlanet}</InfoContent>}
            {occupation && <InfoContent>{occupation}</InfoContent>}
          </InfoBox>
          <More>More Info</More>
        </InfoLink>
      </Link>
    </Container>
  );
};
const Container = styled.li`
  border: 6px solid #eee;
  border-radius: 20px;
  overflow: hidden;
  z-index: 0;
`;
const InfoLink = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  /* min-height: 480px; */
  padding: 20px;
  cursor: pointer;
`;
const CharacterName = styled.h3`
  position: absolute;
  top: 20px;
  left: 20px;
  font-size: 20px;
  font-weight: 500;
`;
const ImgCon = styled.div`
  display: flex;
  align-items: center;
  min-height: 320px;
  margin: 40px auto 20px;
  border: 2px solid #AAC1D0;
  border-radius: 5px;
  background: #eee;
`;
const AvatarImg = styled.img`
  display: block;
  max-width: 100%;
`;
const InfoBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 20px;
`;
const InfoContent = styled.span`
  display: block;
  padding: 5px 15px;
  margin: 5px;
  border-radius: 30px;
  background: #eee;
  text-align: center;
`;
const More = styled.span`
  display: block;
  position: absolute;
  right: 10px;
  bottom: 5px;
  padding: 8px 15px;
  border-radius: 10px;
  color: #fff;
  background: #F38121;
`;
