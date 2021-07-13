import React from 'react';
import { css, cx } from 'emotion';
import { rem } from 'polished';
import { mqMin, mqMax } from '../../styles/breackpoint';
import Wrapper from '../layout/Wrapper';
import Title from '../atoms/Title';
import * as font from '../../styles/fonts';
import * as color from '../../styles/colors';
import { Link } from 'gatsby';
import Button from '../atoms/Button';

const Reassurance = ({ title, content, logos, button, ...rest }) => {
  return (
    <div
      className={css({
        padding: `0 ${rem(20)}`,
        margin: `${rem(-50)} 0 0`,
      })}
    >
      <div
        className={css({
          position: 'relative',
          textAlign: 'center',
          borderRadius: rem(13),
          background: color.light,
          boxShadow: '0 4px 10px 0 rgba(0, 0, 0, 0.15)',
          margin: `0 auto`,
          maxWidth: rem(1040),
          padding: rem(30),
        })}
        {...rest}
      >
        {title && (
          <div
            className={css({
              color: color.clr1,
              fontSize: font.XXL,
              fontFamily: font.secondary,
              '&:not(:last-child)': {
                marginBottom: rem(5),
              },
              [[mqMin[2]]]: {
                fontSize: font.XXXL,
              },
            })}
          >
            {title}
          </div>
        )}
        {content && (
          <p
            className={css({
              color: color.neutralLight,
              '&:not(:last-child)': {
                marginBottom: rem(15),
              },
              [[mqMin[2]]]: {
                fontSize: font.M,
              },
            })}
          >
            {content}
          </p>
        )}
        <Button
          to={button.url}
          size="M"
          theme="ghost"
          className={button.tracking}
          element={'a'}
          data-aos="fade"
        >
          {button.text}
        </Button>
      </div>
    </div>
  );
};

export default Reassurance;
