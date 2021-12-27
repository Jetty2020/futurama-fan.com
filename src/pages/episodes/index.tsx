import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { PageTitle } from '../../components/common';
import { EpisodeContainer } from '../../components/episodes';

const EpisodesPage: NextPage = () => {
  const router = useRouter();
  const { page } = router.query;

  return (
    <div>
      <PageTitle title="Episodes" />
      <EpisodeContainer pageProps={page} />
    </div>
  );
};

export default EpisodesPage;
