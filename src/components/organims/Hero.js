import React from 'react';
import styled from 'react-emotion';
import { css, cx } from 'emotion';
import { rem } from 'polished';
import Title from '../atoms/Title';
import Wrapper from '../layout/Wrapper';
import { mqMin, mqMax } from '../../styles/breackpoint';
import * as font from '../../styles/fonts';
import * as color from '../../styles/colors';

const Hero = ({ title, subtitle, gradient, className, ...rest }) => {
  return (
    <div
      className={cx(
        css({
          padding: `${rem(140)} 0`,
          color: color.light,
          textAlign: 'center',
          background: `linear-gradient(to bottom, ${gradient.top} 0%, ${
            gradient.bottom
          } 100%)`,
        }),
        className,
      )}
      {...rest}
    >
      <Wrapper>
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

      <svg
        width="1439px"
        height="54px"
        viewBox="0 0 1439 54"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          id="Website"
          stroke="none"
          stroke-width="1"
          fill="none"
          fill-rule="evenodd"
        >
          <g
            id="Web-—-Features"
            transform="translate(0.000000, -322.000000)"
            fill="#fff"
          >
            <path
              d="M-2.27373675e-13,322 C720,331 720,371.781515 1440,376 C1440,376 960,376 -2.27373675e-13,376 C-2.27373675e-13,340 -2.27373675e-13,322 -2.27373675e-13,322 Z"
              id="Rectangle"
            />
          </g>
        </g>
      </svg>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="54px"
        width="100%"
        height="100"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      />
    </div>
  );
};

export default Hero;
