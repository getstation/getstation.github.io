import React from 'react';
import {Router} from '@reach/router';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { graphql } from 'gatsby';
import { httpLink } from '../utils/apollo';
import gql from 'graphql-tag';
import {has} from 'lodash';


import {Loading} from '../components/organims/Loading';
import DownloadByOrganization from '../components/organims/DownloadByOrganization';
import HasBeenDownloaded from '../components/organims/HasBeenDownloaded';


const getOrgInfo = gql`
  query($slug: String!) {
    organizationBySlug(slug: $slug) {
      slug,
      name,
      domain,
      pictureUrl,
    }
  }
`;

export default class Welcome extends React.Component{
  constructor(props){
    super(props);
    this.client = new ApolloClient({
      link: httpLink,
      cache: new InMemoryCache(),
    });
    this.state={
      step: 1,
      isLoading: true,
      filledOrgData:{
        title: 'Your organization name',
        description: 'Your organization description',
        details: 'Your organization details',
        email: 'name.org',
        pictureUrl: '',
      },
    }
  }
  handleClickDownload(){
    const{data} = this.props.data.prismicWelcome;
    window.open(data.button_url.url);
    this.setState({
      step: 2
    })
  }
  componentDidMount(){
    const {data} = this.props.data.prismicWelcome;
    const {client} = this;
    // this is sent by gatzby matcher
    const matchedUrl =  this.props['*'];
    const splittedPathName = matchedUrl.split('/');
    const organizationSlug = splittedPathName.length > 0 ? splittedPathName[1] : null;
    // We do not want netlify to do this..
    if(!window) return 
    const currentUrl = new URL(window.location);
    if(currentUrl.search && currentUrl.search.includes('?dl')){
      this.setState({
        step: 2,
      })
      window.location = data.button_url.url;
    }

    // Get data to inject from our API
    client
    .query({
      query: getOrgInfo,
      variables: { slug: organizationSlug}
    })
    .then(res=>{
      // Insufisent data, go to 404
      const propsToChecks = 'data.organizationBySlug';
      if(!has(res, propsToChecks) || (!has(res, `${propsToChecks}.name`) && !has(res, `${propsToChecks}.domain`))) {
        return this.setState({
          unreachable: true
        })
      }
      const {name, pictureUrl, domain} = res.data.organizationBySlug;
      this.setState({
        filledOrgData:{
          title: data.maintitle.text.replace('{{organizationName}}', name || domain),
          description: data.description.text.replace('{{organizationName}}', name || domain),
          details: data.details.text.replace('{{organizationName}}', name || domain),
          email:  data.second_step_text.text.replace('{{organizationName}}', domain),
          list_explanation_text_1:  data.list_explanation_text_1.text.replace('{{organizationName}}', name ||domain),
        },
        pictureUrl,
        isLoading: false,
        apiData: data
      })
    })
    .catch(err=>{
      this.setState({
        isLoading: false,
      });
      console.error(err)
    })

  }
  render(){
    const { props } = this;
    const { data } = props.data.prismicWelcome;
    if(this.state.isLoading){
      return <Loading />
    }
    return (
      this.state.step === 1 
      ? <DownloadByOrganization 
        {...this.state.filledOrgData}
        stationicon={data.stationicon.url}
        download_icon={data.download_icon.url}
        button_text={data.button_text}
        illustration={data.illustration.url}
        bkg_image={data.bkg_image.url}
        linkbewteenorgandstationicons={data.linkbewteenorgandstationicons.url}
        onClickDownload={this.handleClickDownload.bind(this)}
        />
      : <HasBeenDownloaded
          {...this.state.filledOrgData}
          top_text={data.top_text.text}
          first_step_icon={data.first_step_icon.url}
          first_step_text={data.first_step_text.text}
          icons_separators={data.icons_separators.url}
          second_step_icon={data.second_step_icon.url}
          bold_text={data.bold_text.text}
          list_explanation_icon_1={data.list_explanation_icon_1.url}
          list_explanation_icon_2={data.list_explanation_icon_2.url}
          list_explanation_text_2={data.list_explanation_text_2.text}
          list_explanation_icon_3={data.list_explanation_icon_3.url}
          list_explanation_text_3={data.list_explanation_text_3.text}
          illustration_picture={data.illustration_picture.url}
        /> 
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

