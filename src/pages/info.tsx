import { NextPage } from 'next';
import { useApiData } from '../hooks';
import { Error, Loading } from '../components/common';

const InfoPage: NextPage = () => {
  const name = 'info';
  const { data, error } = useApiData(name);
  
  if (!data) return <Loading />;
  if (error) return <Error />;

  return <div>InfoPage</div>;
};

export default InfoPage;
