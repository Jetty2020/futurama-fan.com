import { NextPage } from 'next';
import { Error, Loading } from '../../components/common';
import { useApiData } from '../../hooks';
import { CharacterData } from '../../types';

const CharactersPage: NextPage = () => {
  const path = 'characters';
  const { data, error } = useApiData(path);
  if (!data) return <Loading />;
  if (error) return <Error />;

  return (
    <div>
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
              <ul>
                {sayings.map((saying, index) => {
                  return (
                    <li key={`${index}st-saying`}>
                      <p>{saying}</p>
                    </li>
                  );
                })}
              </ul>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CharactersPage;
