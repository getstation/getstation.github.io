import React from 'react';
import AppMinimal from '../layout/AppMinimal';
import Seo from '../molecules/Seo';
import Button from '../atoms/Button';
import styles from './welcome.module.css';
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
      const {name, pictureUrl, slug} = res.data.organizationWithSlug;
      this.setState({
        title: data.maintitle.text.replace('{{organizationName}}', name),
        description: data.description.text.replace('{{organizationName}}', name),
        details: data.details.text.replace('{{organizationName}}', name),
        email:  data.second_step_text.text.replace('{{organizationName}}', slug),
        pictureUrl,
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
    return !this.state.hasDownloaded ? (
      <AppMinimal>
        <Seo
          title={this.state.title}
          description={this.state.description}
        />
        <section className={styles.main} style={{background: `url(${data.bkg_image.url}) no-repeat bottom`}}>
          <div className={styles.logosContainer}>
            <img src={this.state.pictureUrl}  className={styles.logoIcon} />
            <img src={data.linkbewteenorgandstationicons.url}  className={styles.logoSeparator} />
            <img src={data.stationicon.url}  className={styles.logoIcon} />
          </div>
          <h1 className={styles.title}>
            {this.state.title}
          </h1>
          <h2 className={styles.description}>
            {this.state.description}
          </h2>
          <Button
            className={styles.buttonDownload}
            element="button"
            size="L"
            shadow={false}
            onClick={this.handleClickDownload.bind(this)}
            >
            <img src={data.download_icon.url}/>
            {data.button_text}
          </Button>
          <p className={styles.details}>{this.state.details}</p>
          <video
            className={styles.videoOfStation}
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
      <section className={styles.hasDownloadedSection}>
        <p className={styles.isdownloading}>{data.top_text.text}</p>
        <div>
          <img className={styles.iconsNumber} src={data.first_step_icon.url} />
          <span className={styles.formWizzardText}>{data.first_step_text.text}</span>
          <img className={styles.formWizzardSeparator} src={data.icons_separators.url} />
          <img className={styles.iconsNumber} src={data.second_step_icon.url} />
          <span className={styles.formWizzardText}>{this.state.email}</span>
        </div>
        <p className={styles.whatnext}>{data.bold_text.text}</p>
        <section className={styles.bottomSection}>
          <div className={styles.someInformations}>
            <p><img className={styles.iconsBottom} src={data.list_explanation_icon_1.url}/>{data.list_explanation_text_1.text}</p>
            <p><img className={styles.iconsBottom} src={data.list_explanation_icon_2.url}/>{data.list_explanation_text_2.text}</p>
            <p><img className={styles.iconsBottom} src={data.list_explanation_icon_3.url}/>{data.list_explanation_text_3.text}</p>
          </div>
          <img className={styles.stationSample} src={data.illustration_picture.url}/>
        </section>
      </section>
    </AppMinimal>
    )
  }
}