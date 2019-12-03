import React from 'react';
import {has} from 'lodash';
import {Redirect} from '@reach/router';
import AppMinimal from '../layout/AppMinimal';
import Seo from '../molecules/Seo';
import Button from '../atoms/Button';
import { css } from 'emotion'
import { Global } from '@emotion/core'
import gql from 'graphql-tag';
import Lottie from 'react-lottie';

import HasBeenDownloaded from './HasBeenDownloaded';
const animationData = require('../../animations/preloader-animation.json');

const optionsLoading = {
  loop: true,
  autoplay: true,
  animationData,
};

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

const loadingContainer = css`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const main = css`
  background-size: 100% !important;
  bottom: 0;
  width: 100vw;
  position: absolute;
  height: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow-x: hidden;
 `
 
 const title = css`
  font-size: 35px;
  font-weight: bold;
  margin-top: 35px;
 `
 
 const description = css`
  margin-top: 25px;
  max-width: 500px;
  hyphens: auto;
  text-align: center;
 `
 
 const logosContainer = css`
  display: flex;
  justify-content: center;
  align-items: center ;
  & > *{
    margin-right: 35px;
  }
 `
 
 const logoIcon = css`
  width: 90px;
  height: 90px !important;
  border-radius: 90px;
 `
 
 const logoSeparator = css`
  width: auto;
  height: 30px
 `
 
 const buttonDownload = css`
  display: flex;
  justify-content: flex-between;
  margin-top: 35px;
 `
 
 const videoOfStation = css`
  height: auto;
  width: 400px;
  border-radius: 10.4px;
  box-shadow: 10px 10px 42px -21px rgba(0,0,0,0.75);
 `
 
 const details = css`
  margin-top: 35px;
  margin-bottom: 25px;
  max-width: 500px;
  hyphens: auto;
  text-align: center;
 `

export class WelcomeByOrg extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      step: 1,
      isLoading: true,
      title: 'Your organization name',
      description: 'Your organization description',
      details: 'Your organization details',
      email: 'name.org',
      pictureUrl: '',
    }
  }
  componentWillMount(){
    const { data } = this.props;
    const parsedUrl = new URL(window.location.href);
    // If url contain ?dl=true just dl the file too !
    if(parsedUrl && parsedUrl.searchParams.get('dl')){
      window.location= data.button_url.url;
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
      // Insufisent data, go to 404
      const propsToChecks = 'data.organizationBySlug';
      if(!has(res, propsToChecks) || (!has(res, `${propsToChecks}.name`) && !has(res, `${propsToChecks}.domain`))) {
        return this.setState({
          unreachable: true
        })
      }
      const {name, pictureUrl, domain} = res.data.organizationBySlug;
      this.setState({
        title: data.maintitle.text.replace('{{organizationName}}', name || domain),
        description: data.description.text.replace('{{organizationName}}', name || domain),
        details: data.details.text.replace('{{organizationName}}', name || domain),
        email:  data.second_step_text.text.replace('{{organizationName}}', domain),
        list_explanation_text_1:  data.list_explanation_text_1.text.replace('{{organizationName}}', name ||domain),
        pictureUrl,
        unreachable: false,
        isLoading: false,
      });
    })
    .catch(err=>console.error(err))
  }
  handleClickDownload(){
    const{data} = this.props;
    window.open(data.button_url.url);
    this.setState({
      step: 2
    })
  }
  render(){
    const { data } = this.props;
    // Separeted into two step, the second is after user as clicked download.
    if(this.state.unreachable){
      return <Redirect noThrow to='/404'/>;
    }
    if(this.state.isLoading){
      return <AppMinimal>
        <div className={loadingContainer}>
          <Lottie
            options={optionsLoading}
            height={230}
            width={400}
          />
        </div>
      </AppMinimal>
    }
    return this.state.hasDownloaded === 1 ? (
      <AppMinimal>
        <Seo
          title={this.state.title}
          description={this.state.description}
        />
        <Global
          styles={{
            'body': {
              overflowX: 'hidden'
            }
          }}
        />
        <section className={main} style={{background: `url(${data.bkg_image.url}) no-repeat bottom`}}>
          <div className={logosContainer}>
            {
              this.state.pictureUrl &&
              <>
                <img src={this.state.pictureUrl}  className={logoIcon} />
                <img src={data.linkbewteenorgandstationicons.url}  className={logoSeparator} />
              </>
            }
          
            <img src={data.stationicon.url}  className={logoIcon} />
          </div>
          <h1 className={title}>
            {this.state.title}
          </h1>
          <h2 className={description}>
            {this.state.description}
          </h2>
          <Button
            className={buttonDownload}
            element="button"
            size="L"
            shadow={false}
            onClick={this.handleClickDownload.bind(this)}
            >
            <img src={data.download_icon.url}/>
            {data.button_text}
          </Button>
          <p className={details}>{this.state.details}</p>
          <video
            className={videoOfStation}
            src={data.illustration.url}
            autoPlay
            playsInline
            muted
            loop
            ref="video"
          />
        </section>
      </AppMinimal>
    ) : <HasBeenDownloaded email={this.state.email} list_explanation_text_1={this.state.list_explanation_text_1} prismicdata={data}/>
  }
}