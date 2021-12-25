import { NextPage } from 'next';
import { Error, Loading } from '../../components/common';
import { useApiData } from '../../hooks';
import { InventoryType } from '../../types';

const InventoryPage: NextPage = () => {
  const path = 'inventory';
  const { data, error } = useApiData(path);

  if (!data) return <Loading />;
  if (error) return <Error />;

  return (
    <div>
      <ul>
        {data.map((item: InventoryType) => {
          const { id, title, category, description, slogan, price, stock } =
            item;
          return (
            <li key={`${id}st-item`}>
              <h2>{title}</h2>
              <p>{category}</p>
              <p>{description}</p>
              <p>{slogan}</p>
              <p>{price}</p>
              <p>{stock}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default InventoryPage;
