import React from 'react';
import { css } from 'emotion';
import { graphql } from 'gatsby';
import App from '../components/layout/App';
import Title from '../components/atoms/Title';
import * as font from '../styles/fonts';

const NotFoundPage = props => {
  return (
    <App>
      <Title
        element="h1"
        className={css`
          font-size: ${font.XXXL};
        `}
      >
        Not Found
      </Title>
    </App>
  );
};
export default NotFoundPage;
