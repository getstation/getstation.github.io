import React from 'react';
import styled from 'react-emotion';
import slugify from 'slugify';
import { css } from 'emotion';
import { rem } from 'polished';
import Title from '../atoms/Title';
import TextBigger from '../atoms/TextBigger';
import Wrapper from '../layout/Wrapper';
import Button from '../atoms/Button';
import { mqMin } from '../../styles/breackpoint';
import * as font from '../../styles/fonts.js';
import * as color from '../../styles/colors';

const Box = styled('div')`
  padding: ${rem(100)} 0 ${rem(70)};
`;

const Head = styled('div')`
  text-align: center;
`;

const TeamTimeline = ({ title, text, timeline, button, ...rest }) => {
  return (
    <Box {...rest}>
      <Wrapper>
        <Head>
          {title && (
            <Title
              element="h2"
              className={css({
                fontSize: font.XXL,
                [[mqMin[1]]]: {
                  fontSize: font.XXXL,
                },
                '&:not(:last-child)': {
                  marginBottom: rem(5),
                },
              })}
            >
              {title}
            </Title>
          )}
          {text && <TextBigger>{text}</TextBigger>}
        </Head>
        {button.url && button.text && (
          <div
            className={css({
              textAlign: 'center',
              margin: `${rem(100)} 0 0`,
            })}
          >
            <Button
              to={button.url}
              theme={button.theme}
              type={button.type}
              size="L"
            >
              {button.text}
            </Button>
          </div>
        )}
      </Wrapper>
    </Box>
  );
};

export default TeamTimeline;
