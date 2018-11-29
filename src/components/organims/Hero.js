import React from 'react';
import styled from 'react-emotion';
import { css, cx } from 'emotion';
import { rem } from 'polished';
import Title from '../atoms/Title';
import Wrapper from '../layout/Wrapper';
import { mqMin, mqMax } from '../../styles/breackpoint';
import * as font from '../../styles/fonts';
import * as color from '../../styles/colors';
import Seprator from '../../images/hero-separator-bottom.svg';

const Hero = ({ title, subtitle, gradient, className, ...rest }) => {
  return (
    <div
      className={cx(
        css({
          color: color.light,
          textAlign: 'center',
          position: 'relative',
          background: `linear-gradient(to bottom, ${gradient.top} 0%, ${
            gradient.bottom
          } 100%)`,
        }),
        className,
      )}
      {...rest}
    >
      <Wrapper
        className={css({
          padding: `${rem(160)} 0 ${rem(100)}`,
        })}
      >
        {title && (
          <Title
            element="h2"
            className={css({
              fontSize: font.XXL,
              [[mqMin[2]]]: {
                fontSize: font.XXXXL,
              },
            })}
          >
            {title}
          </Title>
        )}
        {subtitle && (
          <div
            className={css({
              fontSize: font.XL,
              [[mqMin[2]]]: {
                fontSize: font.XXL,
              },
            })}
          >
            {subtitle}
          </div>
        )}
      </Wrapper>
      <img
        src={Seprator}
        alt=""
        className={css({
          width: '100%',
          display: 'block',
        })}
      />
    </div>
  );
};

export default Hero;
