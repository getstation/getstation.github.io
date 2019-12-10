import React from 'react';
import { css } from 'emotion'
import AppMinimal from '../layout/AppMinimal';

const hasDownloadedSection = css`
height: 100vh;
width: 100vw;
display: flex;
padding-top: 120px;
flex-direction: column;
justify-content: flex-start;
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
color: #3c505d
`

const formWizzardText = css`
color: #66c6ed;
font-size: 22px;
font-weight: 500;
`

const formWizzardSeparator = css`
margin: 0 60px;
`

const iconsNumber = css`
margin-right: 6px;
`

const whatnext = css`
font-size: 32px;
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
height: 400px
display: flex;
flex-direction: column;
justify-content: center;
font-size: 22px;
& > p{
  margin-top:60px;
  max-width: 38ch;
  hyphens: auto;
}
&>p:first-child{
  margin-top: 45px;
}
`

const iconsBottom = css`
width: 50px;
height: 50px;
float: left;
margin-right: 30px;
`

const stationSample = css`
width: 600px !important;
height: 400px !important;
margin-right: -180px;
margin-left: 12px;
` 

export default class HasBeenDownloaded extends React.Component{

  constructor(props){
    super(props);
  }

  render(){
    const {top_text, first_step_icon, first_step_text, icons_separators,
       second_step_icon, email, bold_text, list_explanation_icon_1, list_explanation_text_1, list_explanation_icon_2, list_explanation_text_2,
       list_explanation_icon_3, list_explanation_text_3, illustration_picture} = this.props;
    return(
      <AppMinimal>
        <section className={hasDownloadedSection}>
          <p className={isdownloading}>{top_text}</p>
          <div>
            <img className={iconsNumber} src={first_step_icon} />
            <span className={formWizzardText}>{first_step_text}</span>
            <img className={formWizzardSeparator} src={icons_separators} />
            <img className={iconsNumber} src={second_step_icon} />
            <span className={formWizzardText}>{email}</span>
          </div>
          <p className={whatnext}>{bold_text}</p>
          <section className={bottomSection}>
            <div className={someInformations}>
              <p><img className={iconsBottom} src={list_explanation_icon_1}/>{list_explanation_text_1}</p>
              <p><img className={iconsBottom} src={list_explanation_icon_2}/>{list_explanation_text_2}</p>
              <p><img className={iconsBottom} src={list_explanation_icon_3}/>{list_explanation_text_3}</p>
            </div>
            <img className={stationSample} src={illustration_picture}/>
          </section>
        </section>
      </AppMinimal>
    )
  }
}
