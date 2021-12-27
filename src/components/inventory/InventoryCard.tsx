import styled from '@emotion/styled';
import { useState } from 'react';
import { InventoryType } from '../../types';

export const InventoryCard = ({
  inventoryData,
}: {
  inventoryData: InventoryType;
}) => {
  const [showInfo, setShowInfo] = useState(false);
  const handleInfo = () => {
    setShowInfo((curr) => !curr);
  };
  const { title, category, description, slogan, price, stock } = inventoryData;
  return (
    <Container>
      <InventoryBtn type="button" onClick={() => handleInfo()}>
        <ItemTitle>{title}</ItemTitle>
        <ItemCategory>{category}</ItemCategory>
        {showInfo && (
          <HideBox>
            <em>- Desc -</em>
            <p>{description}</p>
            {slogan && <em>- Slogan -</em>}
            <p>{slogan}</p>
          </HideBox>
        )}
        <ShopInfo>
          <p>{price}$</p>
          <p>EA: {stock}</p>
        </ShopInfo>
        <More>More Info</More>
      </InventoryBtn>
    </Container>
  );
};

const Container = styled.li`
  position: relative;
  width: 100%;
  height: 100%;
  border: 1px solid #000;
  background: #fff;
`;
const InventoryBtn = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  padding: 40px 10px 10px;
`;
const ItemTitle = styled.h4`
  margin-bottom: 15px;
  font-size: 20px;
  font-weight: 500;
`;
const ItemCategory = styled.span`
  display: block;
  position: absolute;
  top: 8px;
  right: 8px;
  padding: 3px 8px;
  border: 2px solid #999;
  border-radius: 7px;
  background: #eee;
  box-sizing: border-box;
`;
const HideBox = styled.div`
  margin: -12px 0 18px;
  & em {
    display: inline-block;
    margin: 10px 0 3px;
    font-size: 17px;
    font-weight: 500;
  }
  & p {
    line-height: 1.3;
  }
`;
const ShopInfo = styled.div`
  line-height: 1.3;
`;
const More = styled.span`
  display: inline-block;
  margin-top: 15px;
  padding: 8px 15px;
  border-radius: 10px;
  color: #fff;
  font-weight: 500;
  background: #f38121;
`;
