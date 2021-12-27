import { NextPage } from 'next';
import { CharacterCard } from '../../components/characters/CharacterCard';
import { Error, Loading } from '../../components/common';
import { SubNavigation } from '../../components/layouts/SubNavigation';
import { ROUTES } from '../../constants';
import { useApiData } from '../../hooks';
import { CharacterData } from '../../types';

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
        {data.map((characterData: CharacterData) => (
          <CharacterCard
            key={`${characterData.name.first}-character-${characterData.id}`}
            characterData={characterData}
          />
        ))}
      </ul>
    </div>
  );
};

export default CharactersPage;
