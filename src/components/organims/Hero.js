import React from 'react';
import { css, cx } from 'emotion';
import { rem } from 'polished';
import Title from '../atoms/Title';
import Status from '../atoms/Status';
import Wrapper from '../layout/Wrapper';
import { mqMin } from '../../styles/breackpoint';
import * as font from '../../styles/fonts';
import * as color from '../../styles/colors';

const Hero = ({ title, subtitle, status, gradient, className, ...rest }) => {
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
        {status && (
          <div
            className={css({
              marginTop: rem(20),
              marginBottom: rem(-47),
            })}
          >
            <Status
              size="L"
              theme="light"
              className={css({
                color: gradient.bottom,
              })}
            >
              {status}
            </Status>
          </div>
        )}
      </Wrapper>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1439"
        height="54"
        viewBox="0 0 1439 54"
        preserveAspectRatio="none"
        className={css({
          display: 'block',
          width: '100%',
        })}
      >
        <path d="M0 0c720 9 720 49.782 1440 54H0V0z" fill={color.light} />
      </svg>
    </div>
  );
};

export default Hero;
