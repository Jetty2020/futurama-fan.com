import { NextPage } from 'next';
import useSWR from 'swr';
import { fetcher } from '../utils/fetcher';
import { API_ENDPOINT } from '../constants';
import { useApiData } from '../hooks';

const InfoPage: NextPage = () => {
  const name = 'info';
  const { data, error } = useApiData(name);
  if (!data) return (<div>Loading...</div>)
  if (error) return (<div>We have error...</div>)
  return <div>InfoPage</div>;
};

export default InfoPage;
