import React from 'react';
import {Router} from '@reach/router';
import { ApolloClient } from 'apollo-client';
import { ApolloProvider, Query } from 'react-apollo';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { graphql } from 'gatsby';
import gql from 'graphql-tag';
import AppMinimal from '../components/layout/AppMinimal';
import Seo from '../components/molecules/Seo';
import SectionFullPage from '../components/molecules/SectionFullPage';
import Button from '../components/atoms/Button';

import { httpLink } from '../utils/apollo';

const getOrgInfo = gql`
  query($slug: String!) {
    organizationWithSlug(slug: $slug) {
      name,
      pictureUrl,
    }
  }
`;

class WelcomeByOrg extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      title: 'Your organization name',
      description: 'Your organization description',
    }
  }
  componentDidMount(){
    const { organizationSlug, client, data } = this.props;
    client
    .query({
      query: getOrgInfo,
      variables: { slug: organizationSlug}
    })
    .then(res=>{
      const {name} = res.data.organizationWithSlug;
      this.setState({
        title: data.maintitle.text.replace('{{organizationName}}', name),
        description: data.description.text.replace('{{organizationName}}', name),
      })      
    })
    .catch(err=>console.error(err))
  }
  render(){
    return (
      <AppMinimal>
        <Seo
          title={this.state.title}
          description={this.state.description}
        />
        <SectionFullPage
          title={this.state.title}
          subtitle={this.state.description}
          // background={data.bkg_image.url}
          // image={{
          //   url: data.image.url,
          //   width: data.image.dimensions.width,
          //   height: data.image.dimensions.height,
          // }}
        >
        </SectionFullPage>
        <Button
          element="button"
          size="L"
          shadow={false}
          onClick={console.log('download item')}
          >
          Download
        </Button>
      </AppMinimal>
    )
  }
}

export default class Welcome extends React.Component{
  constructor(props){
    super(props);
    // Init an Apollo Client
    this.state = {
      isAuthenticated: false,
      profile: null,
    };
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
    console.log(client);
    return (
      <Router>
        <WelcomeByOrg path="/welcome/:organizationSlug" data={data} client={client}/>
      </Router> 
    )
  }
}


export const pageQuery = graphql`
  query welcome {
    prismicWelcome{
      data {
        # stationicon{
        #   image
        # }
        maintitle {
          text
        }
        description {
          text
        }
        # image {
        #   url,
        #   dimensions {
        #     width,
        #     height
        #   }
        # }
      }
    }
  }
`;
