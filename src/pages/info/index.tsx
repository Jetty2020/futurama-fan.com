import { NextPage } from 'next';
import Link from 'next/link';
import { useApiData } from '../../hooks';
import { PageTitle } from '../../components/common';
import { InfoContainer } from '../../components/info';

const InfoPage: NextPage = () => {
  return (
    <div>
      <PageTitle title="Animation Info" />
      <InfoContainer />
    </div>
  );
};

export default InfoPage;
