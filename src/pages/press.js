import React from 'react';
import { css } from 'emotion';
import { rem } from 'polished';
import { graphql } from 'gatsby';
import slugify from 'slugify';
import Icon from '../components/atoms/Icon';
import App from '../components/layout/App';
import Seo from '../components/molecules/Seo';
import Hero from '../components/organims/Hero';
import PressMain from '../components/organims/PressMain';
import PressAside from '../components/organims/PressAside';
import Button from '../components/atoms/Button';
import Wrapper from '../components/layout/Wrapper';
import { mqMin } from '../styles/breackpoint';
const Presskit = props => {
  const DATA = props.data.press.data;
  const DATA_STRING = JSON.parse(props.data.press.dataString);
  return (
    <App>
      <Seo
        title={DATA.seo_title}
        title={DATA.seo_description}
        image={DATA.seo_image.url}
      />
      <Hero
        title={DATA_STRING.hero_title}
        subtitle={DATA_STRING.hero_baseline}
        gradient={{
          top: DATA_STRING.hero_gradient_top,
          bottom: DATA_STRING.hero_gradient_bottom,
        }}
      />

      {DATA_STRING.download_url && DATA_STRING.download_text && (
        <div
          className={css({
            position: 'relative',
            zIndex: 2,
            textAlign: 'center',
            marginTop: rem(-60),
          })}
        >
          <Button to={DATA_STRING.download_url} size="L" theme="light" shadow>
            <Icon type="download" color="clr1" size={22} />
            <span>{DATA_STRING.download_text}</span>
          </Button>
        </div>
      )}

      <Wrapper>
        <div
          className={css({
            margin: `0 0 ${rem(80)}`,
            [mqMin[1]]: {
              display: 'flex',
            },
          })}
        >
          <div
            className={css({
              display: 'none',
              [mqMin[1]]: {
                display: 'block',
                marginTop: rem(80),
                flexShrink: 0,
              },
            })}
          >
            <PressAside data={DATA_STRING} />
          </div>
          <PressMain
            className={css({})}
            data={{
              content: {
                text: DATA.content_text,
                textAnchor: slugify(DATA_STRING.aside_anchor_text, {
                  lower: true,
                }),
                cards: DATA_STRING.body,
              },
            }}
          />
        </div>
      </Wrapper>
    </App>
  );
};

export default Presskit;
export const pageQuery = graphql`
  query presskitQuery {
    press: prismicPress {
      dataString
      data {
        seo_title
        seo_description
        seo_image {
          url
        }
        content_text {
          title
          short {
            html
          }
          long {
            html
          }
        }
      }
    }
  }
`;
