import { NextPage } from 'next';
import { CastContainer } from '../../components/cast';
import { PageTitle } from '../../components/common';

const CastPage: NextPage = () => {
  return (
    <div>
      <PageTitle title={'Cast'} />
      <CastContainer />
    </div>
  );
};

export default CastPage;
