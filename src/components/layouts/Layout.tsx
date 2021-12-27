import styled from '@emotion/styled';
import React from 'react';
import { MEDIA_QUERY_END_POINT } from '../../constants';
import { Navigation } from './Navigation';

export const Layout: React.FC = ({ children }) => {
  return (
    <div>
      <Navigation />
      <Container>{children}</Container>
    </div>
  );
};

const Container = styled.main`
  margin: 70px auto 0;
  width: calc(100vw - 100px);
  @media (min-width: ${MEDIA_QUERY_END_POINT.TABLET}) {
    margin: 108px auto 0;
    width: 90vw;
  }
  @media (min-width: ${MEDIA_QUERY_END_POINT.LAPTOP}) {
    width: 80vw;
  }
`;
