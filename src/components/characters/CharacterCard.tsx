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
            {gender && <GenderContent>{gender}</GenderContent>}
            {species && <SpeciesContent>{species}</SpeciesContent>}
            {homePlanet && <HPContent>{homePlanet}</HPContent>}
            {occupation && <OccuContent>{occupation}</OccuContent>}
          </InfoBox>
          <More>More Info</More>
        </InfoLink>
      </Link>
    </Container>
  );
};
const Container = styled.li`
  width: 100%;
  max-width: 360px;
  height: 100%;
  border: 6px solid #eee;
  border-radius: 20px;
  background: #fff;
  overflow: hidden;
  z-index: 0;
`;
const InfoLink = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  height: 100%;
  padding: 20px;
  cursor: pointer;
`;
const CharacterName = styled.h3`
  position: absolute;
  top: 20px;
  left: 20px;
  font-size: 22px;
  font-weight: 500;
`;
const ImgCon = styled.div`
  display: flex;
  align-items: center;
  min-height: 320px;
  margin: 50px auto 20px;
  border: 2px solid #aac1d0;
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
  margin-bottom: 30px;
`;
const InfoContent = styled.span`
  display: block;
  padding: 5px 15px;
  margin: 5px;
  border-radius: 30px;
  background: #eee;
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
const More = styled.span`
  display: block;
  position: absolute;
  right: 10px;
  bottom: 10px;
  padding: 8px 15px;
  border-radius: 10px;
  color: #fff;
  background: #f38121;
`;
