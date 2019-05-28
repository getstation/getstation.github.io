import React from 'react';
import { StaticQuery, graphql } from "gatsby";
import { css } from 'emotion';
import { rem } from 'polished';

import { mqMin } from '../../../styles/breackpoint';
import * as font from '../../../styles/fonts';

import SectionMinimal from '../../molecules/SectionMinimal';
import Title from '../../atoms/Title';
import Button from '../../atoms/Button';
import Content from '../../molecules/Content';

class Offboarding extends React.Component {
  constructor(props) {
    super(props);

    this.logout = props.logout;
    this.navigate = props.navigate;
    this.actualRender = this.actualRender.bind(this);

    this.state = {
      confirm: false,
    }
  }

  cancelOffBoarding = () => {
    this.navigate('cancelled');
  }

  offboard = () => {
    this.setState({ confirm: true });
  }

  close = () => {
    this.setState({ confirm: false });
  }

  confirm = () => {
    alert('ERASING YOU NOW');
    this.navigate('confirmed')
  }

  actualRender(queryResults) {
    const { confirm } = this.state;
    const { profile } = this.props;

    // Extract data from Query
    if (!queryResults) return null;
    const data = queryResults.content.data;

    const title = data.title.replace('[name]', profile.given_name);

    // Render with data
    return (
      <SectionMinimal background={data.bkg_image.url}>
        <Title
          element="h1"
          className={css({
            margin: `${rem(40)} 0 ${rem(10)}`,
            fontSize: font.XXL,
            [[mqMin[2]]]: {
              fontSize: font.XXXL,
            },
          })}
        >
          {title}
        </Title>

        <br/>

        <Content>
          { data.content.html }
        </Content>

        <br/>

        <Button
          onClick={this.cancelOffBoarding}
          theme="ghost"
          size="L"
          className={css({
            margin: `${rem(20)} ${rem(20)}`,
          })}
        >
          {data.button_cancel_text}
        </Button>

        <Button
          onClick={this.offboard}
          theme="danger"
          size="L"
          className={css({
            margin: `${rem(20)} ${rem(20)}`,
          })}
        >
          {data.button_confirm_text}
        </Button>

        { confirm && 
          <div id="overlay-modal">
            <div id="confirm-modal">
              ERASING, are you sure ?
              <br/>
              <button onClick={this.close}>Actually NO !</button>
              <button onClick={this.confirm}>Fo' sure</button>
            </div>
          </div>
        }
      </SectionMinimal>
    );
  }

  render() {
    return (
      <StaticQuery
        query={QUERY}
        render={this.actualRender}
      ></StaticQuery>
    );
  }
}

/**
 * GraphQL query to Prismic
 */
const QUERY = graphql`
  query privacyOffboarding {
    content: prismicOffboarding {
      data {
        title,
        content {
          html,
          raw {
            type,
            text,
          },
        },
        button_confirm_text,
        button_cancel_text,
        bkg_image {
          url
          dimensions {
            width
            height
          }
        }
      }
    }
  }
`;

export default Offboarding;