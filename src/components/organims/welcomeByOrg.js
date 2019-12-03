import React from 'react';
import {Redirect, navigate} from '@reach/router';
import AppMinimal from '../layout/AppMinimal';
import Seo from '../molecules/Seo';
import Button from '../atoms/Button';
import { css } from 'emotion'
import { Global } from '@emotion/core'
// import styles from './welcome.module.css';
import gql from 'graphql-tag';

const getOrgInfo = gql`
  query($slug: String!) {
    organizationWithSlug(slug: $slug) {
      slug,
      name,
      pictureUrl,
    }
  }
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
 
 const logoIconContainer = css`
  width: 90px;
  height: 90px !important;
  border-radius: 90px;
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
 
 const hasDownloadedSection = css`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  bottom: 0;
  width: 100vw;
  position: absolute;
  overflow-x: hidden;
 `
 
 const isdownloading = css`
  font-style: italic;
  margin-bottom: 40px;
  font-size: 22px;
 `
 
 
 const formWizzardText = css`
  color: #66c6ed;
  margin-right: 30px;
  font-size: 24px;
  font-weight: bold;
 `
 
 
 const formWizzardSeparator = css`
  margin: 0 20px;
 `
 
 
 const iconsNumber = css`
  margin-right: 6px;
 `
 
 
 const whatnext = css`
  font-size: 35px;
  font-weight: bold;
  margin-bottom: 50px;
  margin-top: 50px;
 `
 
 const bottomSection = css`
  display: flex;
  justify-content: center;
  align-content: center;
  width: 75vw;
  max-height: 250px;
  height: 250px;
 `
 
 
 const someInformations = css`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  font-size: 22px;
  & > p{
    max-width: 38ch;
    hyphens: auto;
  }
 `
 
 
 const iconsBottom = css`
  width: 50px;
  height: 50px;
  float: left;
 `
 
 
 const stationSample = css`
  width: 50% !important;
  height: auto;
  height: 170% !important;
 ` 

export class WelcomeByOrg extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      title: 'Your organization name',
      description: 'Your organization description',
      details: 'Your organization details',
      email: 'name.org',
      pictureUrl: '',
      hasDownloaded: false,
    }
  }
  componentWillMount(){
    const { data, organizationSlug } = this.props;
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
      const {name, pictureUrl, slug} = res.data.organizationWithSlug;
      if(!name || !slug || ! pictureUrl) {
        return this.setState({
          unreachable: true
        })
      }
      this.setState({
        title: data.maintitle.text.replace('{{organizationName}}', name),
        description: data.description.text.replace('{{organizationName}}', name),
        details: data.details.text.replace('{{organizationName}}', name),
        email:  data.second_step_text.text.replace('{{organizationName}}', slug),
        pictureUrl,
        unreachable: false,
      });
    })
    .catch(err=>console.error(err))
  }
  handleClickDownload(){
    const{data} = this.props;
    window.open(data.button_url.url);
    this.setState({
      hasDownloaded: true
    })
  }
  render(){
    const { data } = this.props;
    // Separeted into two step, the second is after user as clicked download.
    if(this.state.unreachable){
      return <Redirect noThrow to='/404'/>;
    }
    return !this.state.hasDownloaded ? (
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
            <img src={this.state.pictureUrl}  className={logoIcon} />
            <img src={data.linkbewteenorgandstationicons.url}  className={logoSeparator} />
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
    ) : (
    <AppMinimal>
      <section className={hasDownloadedSection}>
        <p className={isdownloading}>{data.top_text.text}</p>
        <div>
          <img className={iconsNumber} src={data.first_step_icon.url} />
          <span className={formWizzardText}>{data.first_step_text.text}</span>
          <img className={formWizzardSeparator} src={data.icons_separators.url} />
          <img className={iconsNumber} src={data.second_step_icon.url} />
          <span className={formWizzardText}>{this.state.email}</span>
        </div>
        <p className={whatnext}>{data.bold_text.text}</p>
        <section className={bottomSection}>
          <div className={someInformations}>
            <p><img className={iconsBottom} src={data.list_explanation_icon_1.url}/>{data.list_explanation_text_1.text}</p>
            <p><img className={iconsBottom} src={data.list_explanation_icon_2.url}/>{data.list_explanation_text_2.text}</p>
            <p><img className={iconsBottom} src={data.list_explanation_icon_3.url}/>{data.list_explanation_text_3.text}</p>
          </div>
          <img className={stationSample} src={data.illustration_picture.url}/>
        </section>
      </section>
    </AppMinimal>
    )
  }
}