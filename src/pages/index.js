import React from 'react';
import { css } from 'emotion';
import { graphql } from 'gatsby';
import App from '../components/layout/App';
import Title from '../components/atoms/Title';
import * as font from '../styles/fonts';

const IndexPage = props => {
  const DATA = props.data.content.data;
  return (
    <App>
      {DATA.title && (
        <Title
          element="h1"
          className={css`
            font-size: ${font.XXXL};
          `}
        >
          {DATA.title}
        </Title>
      )}
      {DATA.exemple_text && <p>{DATA.exemple_text}</p>}
    </App>
  );
};

export default IndexPage;
export const pageQuery = graphql`
  query IndexQuery {
    content: prismicTest {
      data {
        title
        exemple_text
      }
    }
  }
`;
