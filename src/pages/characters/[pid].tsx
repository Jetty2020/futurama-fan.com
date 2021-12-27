import { NextPage } from 'next';
import { CharacterDetail } from '../../components/characters';
import { SubNavigation } from '../../components/layouts/SubNavigation';
import { ROUTES } from '../../constants';

const CharacterDetailPage: NextPage = () => {
  const path = 'characters';  
  const navData = ROUTES.find((value) => value.LABEL === 'Characters')?.SUBS;

  return (
    <div>
      <SubNavigation path={path} navData={navData} backBtn />
      <CharacterDetail />
    </div>
  );
};

export default CharacterDetailPage;
