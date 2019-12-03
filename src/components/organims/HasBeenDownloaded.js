import React from 'react';
import { css } from 'emotion'
import AppMinimal from '../layout/AppMinimal';

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


export default class HasBeenDownloaded extends React.Component{

  constructor(props){
    super(props);
    this.email = props.email || 'organization email';
    this.list_explanation_text_1 = props.list_explanation_text_1 || 'organization explanation';
    this.prismicdata = props.prismicdata || null;
  }


  render(){
    if(!this.prismicdata){
      return <></>;
    }
    return(
      <AppMinimal>
        <section className={hasDownloadedSection}>
          <p className={isdownloading}>{this.prismicdata.top_text.text}</p>
          <div>
            <img className={iconsNumber} src={this.prismicdata.first_step_icon.url} />
            <span className={formWizzardText}>{this.prismicdata.first_step_text.text}</span>
            <img className={formWizzardSeparator} src={this.prismicdata.icons_separators.url} />
            <img className={iconsNumber} src={this.prismicdata.second_step_icon.url} />
            <span className={formWizzardText}>{this.email}</span>
          </div>
          <p className={whatnext}>{this.prismicdata.bold_text.text}</p>
          <section className={bottomSection}>
            <div className={someInformations}>
              <p><img className={iconsBottom} src={this.prismicdata.list_explanation_icon_1.url}/>{this.list_explanation_text_1}</p>
              <p><img className={iconsBottom} src={this.prismicdata.list_explanation_icon_2.url}/>{this.prismicdata.list_explanation_text_2.text}</p>
              <p><img className={iconsBottom} src={this.prismicdata.list_explanation_icon_3.url}/>{this.prismicdata.list_explanation_text_3.text}</p>
            </div>
            <img className={stationSample} src={this.prismicdata.illustration_picture.url}/>
          </section>
        </section>
      </AppMinimal>
    )
  }
}
