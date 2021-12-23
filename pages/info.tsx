import { NextPage } from 'next';
import axios from 'axios';
import useSWR from 'swr';

export const fetcher = (url: string) => axios.get(url).then((res) => res.data);

const InfoPage: NextPage = () => {
  const { data, error } = useSWR(
    `https://api.sampleapis.com/futurama/info`,
    fetcher
  );
  if (!data) return (<div>Loading...</div>)
  if (error) return (<div>We have error...</div>)
  return <div>InfoPage</div>;
};

export default InfoPage;
