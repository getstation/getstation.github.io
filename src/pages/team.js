import React from 'react';
import { graphql } from 'gatsby';
import App from '../components/layout/App';
import Hero from '../components/organims/Hero';

const Presskit = props => {
  const DATA_STRING = JSON.parse(props.data.team.dataString);
  return (
    <App>
      <Hero
        title={DATA_STRING.hero_title}
        subtitle={DATA_STRING.hero_baseline}
        gradient={{
          top: DATA_STRING.hero_gradient_top,
          bottom: DATA_STRING.hero_gradient_bottom,
        }}
      />
    </App>
  );
};

export default Presskit;
export const pageQuery = graphql`
  query teamQuery {
    team: prismicTeam {
      dataString
    }
  }
`;
