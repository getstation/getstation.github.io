import React from 'react';
import { css } from 'emotion';
import { graphql } from 'gatsby';
import App from '../components/layout/App';
import Title from '../components/atoms/Title';
import * as font from '../styles/fonts';

const NotFoundPage = props => {
  return (
    <App header={props.data.prismicHeader} footer={props.data.prismicFooter}>
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
export const pageQuery = graphql`
  query NotFoundPageQuery {
    prismicHeader {
      ...HeaderData
    }
    prismicFooter {
      ...FooterData
    }
  }
`;
