import styled from '@emotion/styled';
import React from 'react';

export const Layout: React.FC = ({ children }) => {
  return (
    <div>
      <Container>{children}</Container>
    </div>
  );
};

const Container = styled.main`
  max-width: 1280px;
  margin: auto;
`;
