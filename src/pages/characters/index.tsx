import { NextPage } from 'next';
import { CharacterCardContainer } from '../../components/characters';
import { SubNavigation } from '../../components/layouts/SubNavigation';
import { ROUTES } from '../../constants';

const CharactersPage: NextPage = () => {
  const path = 'characters';
  const navData = ROUTES.find((value) => value.LABEL === 'Characters')?.SUBS;
  return (
    <div>
      <SubNavigation path={path} navData={navData} />
      <CharacterCardContainer />
    </div>
  );
};

export default CharactersPage;
