import { NextPage } from 'next';
import Link from 'next/link';
import { useApiData } from '../../hooks';
import { Error, Loading } from '../../components/common';

interface CREATOR {
  name: string;
  url: string;
}

const InfoPage: NextPage = () => {
  const name = 'info';
  const { data, error } = useApiData(name, '1');

  if (!data) return <Loading />;
  if (error) return <Error />;

  return (
    <div>
      <p>{data.synopsis}</p>
      <p>{data.yearsAired}</p>
      <ul>
        {data.creators?.map((creator: CREATOR, index: string) => {
          return (
            <li key={index}>
              <Link href={creator.url}>
                <a target="_blank">{creator.name}</a>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default InfoPage;
