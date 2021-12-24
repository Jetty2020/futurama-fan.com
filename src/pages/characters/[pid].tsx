import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { Error, Loading } from '../../components/common';
import { useApiData } from '../../hooks';

const CharacterDetailPage: NextPage = () => {
  const router = useRouter();
  const { pid } = router.query;
  const path = 'characters';
  const { data, error } = useApiData(path, pid);

  if (!data) return <Loading />;
  if (error) return <Error />;
  const { id, name, images, gender, species, homePlanet, occupation, sayings } =
    data;
  return (
    <div>
      <p>
        {name.first}
        {name.middle}
        {name.last}
      </p>
      <img src={images.main} alt="" />
      <p>{gender}</p>
      <p>{species}</p>
      <p>{homePlanet}</p>
      <p>{occupation}</p>
      <ul>
        {sayings.map((saying: string, index: number) => {
          return (
            <li key={`${index}st-saying`}>
              <p>{saying}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CharacterDetailPage;
