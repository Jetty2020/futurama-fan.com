import { NextPage } from 'next';
import Link from 'next/link';
import { Error, Loading } from '../../components/common';
import { useApiData } from '../../hooks';
import { CastType } from '../../types';

const CastPage: NextPage = () => {
  const path = 'cast';
  const { data, error } = useApiData(path);

  if (!data) return <Loading />;
  if (error) return <Error />;

  return (
    <div>
      <ul>
        {data.map((cast: CastType) => {
          const { id, name, born, died, bio } = cast;
          return (
            <li key={`${id}`}>
              <h2>
                <Link href={bio.url}>
                  <a target="_blank">{name}</a>
                </Link>
              </h2>
              <p>
                {born} ~ {died}
              </p>
              {
                bio.text && <p>{bio.text}</p>
              }
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CastPage;
