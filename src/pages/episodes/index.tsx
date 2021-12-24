import { NextPage } from 'next';
import { Error, Loading } from '../../components/common';
import { EpisodeContainer } from '../../components/episodes';
import { useApiData } from '../../hooks';

const EpisodesPage: NextPage = () => {
  const path = 'episodes';
  const { data, error } = useApiData(path);
  const rowCount = 10;

  if (!data) return <Loading />;
  if (error) return <Error />;
  return (
    <div>
      <EpisodeContainer episodeData={data} rowCount={rowCount} />
    </div>
  );
};

export default EpisodesPage;
