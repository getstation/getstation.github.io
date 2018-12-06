import React from 'react';
import { graphql } from 'gatsby';
import App from '../components/layout/App';
import Hero from '../components/organims/Hero';

const Presskit = props => {
  const DATA = props.data.press.data;
  return (
    <App>
      <Hero
        title={DATA.hero_title}
        subtitle={DATA.hero_baseline}
        gradient={{
          top: DATA.hero_gradient_top,
          bottom: DATA.hero_gradient_bottom,
        }}
      />
    </App>
  );
};

export default Presskit;
export const pageQuery = graphql`
  query presskitQuery {
    press: prismicPress {
      data {
        hero_title
        hero_baseline
        hero_gradient_top
        hero_gradient_bottom
      }
    }
  }
`;
