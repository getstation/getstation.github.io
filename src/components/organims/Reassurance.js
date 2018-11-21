import React from 'react';
import { css, cx } from 'emotion';
import { rem } from 'polished';
import { mqMin, mqMax } from '../../styles/breackpoint';
import Wrapper from '../layout/Wrapper';
import Title from '../atoms/Title';
import * as font from '../../styles/fonts';
import * as color from '../../styles/colors';

const Reassurance = ({ title, content, logos, ...rest }) => {
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
          padding: rem(40),
        })}
        {...rest}
      >
        {title && (
          <div
            className={css({
              color: color.clr1,
              fontSize: font.XXL,
              '&:not(:last-child)': {
                marginBottom: rem(10),
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
                marginBottom: rem(30),
              },
              [[mqMin[2]]]: {
                fontSize: font.M,
              },
            })}
          >
            {content}
          </p>
        )}
        {logos && (
          <ul
            className={css({
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              alignItems: 'center',
            })}
          >
            {logos.map(item => (
              <li
                key={item.title}
                className={css({
                  margin: rem(10),
                })}
              >
                {item.image.url && (
                  <img
                    src={item.image.url}
                    alt={item.title}
                    width={item.image.dimensions.width}
                    height={item.image.dimensions.height}
                  />
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Reassurance;
