import styled from '@emotion/styled';

export const PageTitle = ({ title }: { title: string }) => {
  return <Title>{title}</Title>;
};

const Title = styled.h2`
  padding-top: 50px;
  font-size: 24px;
  font-weight: 500;
`;
