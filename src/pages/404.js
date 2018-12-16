import React from 'react';
import { graphql } from 'gatsby';
import { css } from 'emotion';
import { rem } from 'polished';
import { Link } from 'gatsby';
import styled from 'react-emotion';
import App from '../components/layout/App';
import Button from '../components/atoms/Button';
import Title from '../components/atoms/Title';
import TextBigger from '../components/atoms/TextBigger';
import Wrapper from '../components/layout/Wrapper';
import * as font from '../styles/fonts';
import { mqMin } from '../styles/breackpoint';

const Box = styled('div')`
  padding: ${rem(160)} 0 ${rem(100)};
  text-align: center;
  flex-grow: 1;
  display: flex;
  align-items: center;
`;

const NotFoundPage = props => {
  const DATA = props.data.content.data;
  return (
    <App headerTheme="dark">
      <Box>
        <Wrapper>
          {DATA.image.url && (
            <img
              src={DATA.image.url}
              alt="404"
              width={DATA.image.dimensions.width}
              height={DATA.image.dimensions.height}
            />
          )}

          {DATA.title && (
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
              {DATA.title}
            </Title>
          )}
          {DATA.subtitle && <TextBigger>{DATA.subtitle}</TextBigger>}
          {DATA.button_text && (
            <div
              className={css({
                marginTop: rem(40),
              })}
            >
              <Button to="/" element={Link} size="L" shadow>
                {DATA.button_text}
              </Button>
            </div>
          )}
        </Wrapper>
      </Box>
    </App>
  );
};
export default NotFoundPage;
export const pageQuery = graphql`
  query notFoundQuery {
    content: prismic404 {
      data {
        title
        subtitle
        button_text
        image {
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
