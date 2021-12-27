import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { Error, Loading } from '../../components/common';
import { SubNavigation } from '../../components/layouts/SubNavigation';
import { ROUTES } from '../../constants';
import { useApiData } from '../../hooks';

const CharacterDetailPage: NextPage = () => {
  const router = useRouter();
  const { pid } = router.query;
  const path = 'characters';
  const { data, error } = useApiData(path, pid);
  const navData = ROUTES.find((value) => value.LABEL === 'Characters')?.SUBS;

  if (!data) return <Loading />;
  if (error) return <Error />;

  const { id, name, images, gender, species, homePlanet, occupation, sayings } =
    data;
  return (
    <div>
      <SubNavigation path={path} navData={navData} backBtn />
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
            <li key={`${index}-${name.last}-saying`}>
              <p>{saying}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CharacterDetailPage;
