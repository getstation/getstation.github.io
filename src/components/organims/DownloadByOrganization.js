import React from 'react';
import { css } from 'emotion'
import { Global } from '@emotion/core'

import AppMinimal from '../layout/AppMinimal';
import Seo from '../molecules/Seo';
import Button from '../atoms/Button';


const main = css`
  background-size: 100% !important;
  bottom: 0;
  width: 100vw;
  position: absolute;
  padding-top: 70px;
  height: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow-x: hidden;
 `
 
 const titleStyle = css`
  font-size: 35px;
  font-weight: bold;
  margin-top: 35px;
  color: #292929;
 `
 
 const descriptionStyle = css`
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
 
 const downloadIconStyle = css`
  margin-right: 8px; 
 `; 

 const buttonDownload = css`
  display: flex;
  justify-content: flex-between;
  margin-top: 60px;
 `
 
 const videoOfStation = css`
  height: auto;
  width: 400px;
  border-radius: 10.4px;
  box-shadow: 10px 10px 42px -21px rgba(60,80,93,0.24);
 `
 
 const detailsStyle = css`
  margin-top: 80px;
  margin-bottom: 25px;
  max-width: 500px;
  hyphens: auto;
  text-align: center;
  color: rgba(16, 61, 112, 0.35);
 `


export default class DownloadByOrganization extends React.Component{

  constructor(props){
    super(props);
  }
  render(){
    const {onClickDownload, title, description, bkg_image, pictureUrl, linkbewteenorgandstationicons, stationicon, download_icon, button_text, details, illustration} = this.props;
    return( 
    <AppMinimal>
      <Seo
        title={title}
        description={description}
      />
      <Global
        styles={{
          'body': {
            overflowX: 'hidden'
          }
        }}
      />
      <section className={main} style={{background: `url(${bkg_image}) no-repeat bottom`}}>
        <div className={logosContainer}>
          {
            pictureUrl &&
            <>
              <img src={pictureUrl}  className={logoIcon} />
              <img src={linkbewteenorgandstationicons}  className={logoSeparator} />
            </>
          }
          <img src={stationicon}  className={logoIcon} />
        </div>
        <h1 className={titleStyle}>
          {title}
        </h1>
        <h2 className={descriptionStyle}>
          {description}
        </h2>
        <Button
          className={buttonDownload}
          element="button"
          size="L"
          shadow={false}
          onClick={onClickDownload}
          >
          <img src={download_icon} className={downloadIconStyle}/>
          {button_text}
        </Button>
        <p className={detailsStyle}>{details}</p>
        <video
          className={videoOfStation}
          src={illustration}
          autoPlay
          playsInline
          muted
          loop
          ref="video"
        />
      </section>
    </AppMinimal>)
  }
}
