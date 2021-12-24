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
  const { data, error } = useApiData(name);

  if (!data) return <Loading />;
  if (error) return <Error />;
  
  const innerData = data[0];
  
  return (
    <div>
      <p>{innerData.synopsis}</p>
      <p>{innerData.yearsAired}</p>
      <ul>
        {innerData.creators?.map((creator: CREATOR, index: string) => {
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
