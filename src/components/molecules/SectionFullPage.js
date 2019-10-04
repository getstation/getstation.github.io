import React from 'react';
import { css } from 'emotion';
import { rem } from 'polished';
import { Link } from 'gatsby';
import styled from 'react-emotion';
import { mqMin } from '../../styles/breackpoint';
import Button from '../atoms/Button';
import Title from '../atoms/Title';
import TextBigger from '../atoms/TextBigger';
import Wrapper from '../layout/Wrapper';
import * as font from '../../styles/fonts';

const Section = styled('div')`
  padding: ${rem(160)} 0 ${rem(100)};
  text-align: center;
  flex-grow: 1;
  display: flex;
  align-items: center;
  min-height: 100vh;
  background-position: center bottom;
  background-repeat: no-repeat;
  background-size: 100% auto;
`;

const SectionFullPage = ({
  title,
  subtitle,
  cta,
  image,
  background,
  children,
  ...rest
}) => {
  return (
    <Section
      className={css`
        background-image: url(${background || ''});
      `}
      {...rest}
    >
      <Wrapper>
        {image && image.url && (
          <img
            src={image.url}
            alt="404"
            width={image.width || null}
            height={image.height || null}
          />
        )}

        {title && (
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
        )}
        {subtitle && (
          <TextBigger dangerouslySetInnerHTML={{ __html: subtitle }} />
        )}
        {cta && cta.text && (
          <div
            className={css({
              marginTop: rem(40),
            })}
          >
            <Button
              to={cta.url}
              element={cta.type === 'internal' ? Link : 'a'}
              size={cta.size}
              shadow={cta.shadow}
              theme={cta.theme}
            >
              {cta.text}
            </Button>
            {children}
          </div>
        )}
      </Wrapper>
    </Section>
  );
};

export default SectionFullPage;
