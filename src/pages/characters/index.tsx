import { NextPage } from 'next';
import { Error, Loading } from '../../components/common';
import { SubNavigation } from '../../components/layouts/SubNavigation';
import { ROUTES } from '../../constants';
import { useApiData } from '../../hooks';
import { CharacterData, InnerSubs } from '../../types';

const CharactersPage: NextPage = () => {
  const path = 'characters';
  const { data, error } = useApiData(path);
  if (!data) return <Loading />;
  if (error) return <Error />;

  const navData = ROUTES.find((value) => value.LABEL === 'Characters')?.SUBS;

  return (
    <div>
      <SubNavigation path={path} navData={navData} />
      <ul>
        {data.map((character: CharacterData) => {
          const {
            id,
            name,
            images,
            gender,
            species,
            homePlanet,
            occupation,
            sayings,
          } = character;
          return (
            <li key={`${name.first}-character-${id}`}>
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
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CharactersPage;
