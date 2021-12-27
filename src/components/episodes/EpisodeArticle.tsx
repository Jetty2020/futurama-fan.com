import styled from '@emotion/styled';
import { MEDIA_QUERY_END_POINT } from '../../constants';
import { EpisodeData } from '../../types';

export const EpisodeArticle = ({
  episodedata,
  index,
}: {
  episodedata: EpisodeData;
  index: number;
}) => {
  const { id, number, title, writers, originalAirDate, desc } = episodedata;
  return (
    <EpiCon key={`${id}st-episode`}>
      <EpiTitle>
        {number}. {title}
      </EpiTitle>
      <EpiInfoCon>
        <EpiImg
          src={`/episodes/${(index % 34) + 1}.jpg`}
          alt="에피소드 이미지"
        />
        <EpiDescBox>
          <EpiWriters>{writers}</EpiWriters>
          <EpiDate>{originalAirDate}</EpiDate>
          <p>{desc}</p>
        </EpiDescBox>
      </EpiInfoCon>
    </EpiCon>
  );
};
const EpiCon = styled.li`
  margin: 10px;
`;
const EpiTitle = styled.h4`
  font-size: 20px;
  font-weight: 500;
`;
const EpiInfoCon = styled.div`
  display: block;
  margin: 20px auto 40px;
  padding: 0 25px;
  @media (min-width: ${MEDIA_QUERY_END_POINT.TABLET}) {
    display: flex;
  }
`;
const EpiImg = styled.img`
  display: block;
  max-width: 224px;
  width: 100%;
  max-height: 126px;
  margin: 0 auto 20px;
  @media (min-width: ${MEDIA_QUERY_END_POINT.TABLET}) {
    display: flex;
    margin: 0 30px 20px 0;
  }
`;
const EpiDescBox = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1.6;
`;
const EpiWriters = styled.em`
  display: inline;
  position: relative;
  margin-bottom: 4px;
  font-weight: 500;
  &:after {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    bottom: -2px;
    width: 100%;
    height: 2px;
    background: red;
  }
`;
const EpiDate = styled.p`
  margin-bottom: 10px;
`;
