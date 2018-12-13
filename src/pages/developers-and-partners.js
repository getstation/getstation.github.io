import React from 'react';
import { graphql } from 'gatsby';
import App from '../components/layout/App';
import Hero from '../components/organims/Hero';
import DevelopersAndPartnersSection1 from '../components/organims/DevelopersAndPartnersSection1';

const DevsAndPartners = props => {
  const DATA = props.data.devsAndPartners.data;
  return (
    <App>
      <Hero
        title={DATA.hero_title}
        subtitle={DATA.hero_baseline}
        status={DATA.hero_status}
        gradient={{
          top: DATA.hero_gradient_top,
          bottom: DATA.hero_gradient_bottom,
        }}
      />
      <DevelopersAndPartnersSection1 title={DATA.section_1_title} />
    </App>
  );
};

export default DevsAndPartners;
export const pageQuery = graphql`
  query devsAndPartnersQuery {
    devsAndPartners: prismicDevsandpartners {
      data {
        hero_title
        hero_baseline
        hero_gradient_top
        hero_gradient_bottom
        hero_status
        section_1_title
      }
    }
  }
`;
