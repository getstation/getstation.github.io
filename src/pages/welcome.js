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
import SectionMinimal from '../components/molecules/SectionMinimal';
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
      details: 'Your organization details',
      pictureUrl: '',
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
      console.log('res', res)
      const {name, pictureUrl} = res.data.organizationWithSlug;
      this.setState({
        title: data.maintitle.text.replace('{{organizationName}}', name),
        description: data.description.text.replace('{{organizationName}}', name),
        details: data.details.text.replace('{{organizationName}}', name),
        pictureUrl,
      });
    })
    .catch(err=>console.error(err))
  }
  render(){
    const { data } = this.props;
    return (
      <AppMinimal>
        <Seo
          title={this.state.title}
          description={this.state.description}
        />
        <section style={{background: `url(${data.bkg_image.url}) no-repeat bottom`, backgroundSize: '100%', bottom: 0, width: '100vw', position: 'absolute', height: '100vw', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', overflowX: 'hidden'}}>
          <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img src={this.state.pictureUrl}  style={{width: '50px', height: '50px'}} />
            <img src={data.linkbewteenorgandstationicons.url}  style={{width: 'auto', height: '30px'}} />
            <img src={data.stationicon.url}  style={{width: '50px', height: '50px'}} />
          </div>
          <h1>
            {this.state.title}
          </h1>
            {this.state.description}
          <h2>
          </h2>
          <Button
            style={{display: 'flex', justifyContent: 'flex-between'}}
            element="button"
            size="L"
            shadow={false}
            onClick={()=>{window.open(data.button_url.url)}}
            >
            <img src={data.download_icon.url}/>
            {data.button_text}
          </Button>
          <p>{this.state.details}</p>
          <img src={data.illustration.url} height={400} width={400} style={{borderRadius: '10.4px', boxShadow: '10px 10px 42px -21px rgba(0,0,0,0.75)'}} />
        </section>
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
        }
      }
    }
  }
`;
