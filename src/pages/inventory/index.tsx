import { NextPage } from 'next';
import { Error, Loading, PageTitle } from '../../components/common';
import { InventoryCard, InventoryContainer } from '../../components/inventory';
import { useApiData } from '../../hooks';
import { InventoryType } from '../../types';

const InventoryPage: NextPage = () => {
  return (
    <div>
      <PageTitle title="Inventory" />
      <InventoryContainer />
    </div>
  );
};

export default InventoryPage;
