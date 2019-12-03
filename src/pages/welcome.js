import React from 'react';
import {Router} from '@reach/router';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { graphql } from 'gatsby';
import { httpLink } from '../utils/apollo';
import NotFoundPage from './404'

import {WelcomeByOrg} from '../components/organims/welcomeByOrg';

export default class Welcome extends React.Component{
  constructor(props){
    super(props);
    this.client = null;
  }
  componentWillMount(){
    this.client = new ApolloClient({
      link: httpLink,
      cache: new InMemoryCache(),
    });
  }
  render(){
    const { props, client } = this;
    const { data } = props.data.prismicWelcome;
    return (
      <Router>
        <WelcomeByOrg  path="/welcome/:organizationSlug" data={data} client={client}/>
        <WelcomeByOrg default/>
      </Router> 
    )
  }
}

export const pageQuery = graphql`
  query welcome {
    prismicWelcome{
      data {
        organizationicon{
          text
        },
        linkbewteenorgandstationicons{
          url
        },
        stationicon{
          url
        },
        bkg_image{
          url
        },
        details{
          text
        },
        button_text,
        button_url{
          url
        },
        download_icon{
          url
        }
        illustration{
          url
        }
        maintitle {
          text
        }
        description {
          text
        },
        top_text{
          text         
        },
        first_step_icon{
          url
        },
        icons_separators{
          url
        },
        second_step_icon{
          url
        },
        first_step_text{
          text
        },
        second_step_text{
          text
        },
        bold_text{
          text
        },
        list_explanation_icon_1{
          url
        },
        list_explanation_text_1{
          text
        },
        list_explanation_icon_2{
          url
        },
        list_explanation_text_2{
          text
        },
        list_explanation_icon_3{
          url
        },
        list_explanation_text_3{
          text
        },
        illustration_picture{
          url
        }
      }
    }
  }
`;
