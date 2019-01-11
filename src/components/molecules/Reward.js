import React from 'react';
import { css } from 'emotion';
import { rem } from 'polished';
import * as font from '../../styles/fonts';
import * as color from '../../styles/colors';
import * as transition from '../../styles/transitions';
import { mqMin, mqMax } from '../../styles/breackpoint';

const Reward = props => {
  const { url, title, subtitle, img, light } = props;
  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className={css({
        display: 'flex',
        alignItems: 'center',
        transition: `transform .2s ${transition.base}`,
        '&:hover': {
          transform: `translateY(${rem(-2)})`,
        },
        [mqMax[0]]: {
          justifyContent: 'center',
        },
        [mqMin[0]]: {
          paddingRight: rem(30),
        },
      })}
    >
      <div className={css({ paddingRight: rem(12), flexGrow: 0 })}>
        {img && (
          <img
            src={img.url}
            width={img.dimensions.width}
            height={img.dimensions.height}
          />
        )}
      </div>
      <div>
        {title && (
          <div
            className={css({
              color: light ? color.light : color.neutral,
              fontSize: rem(12),
              fontWeight: font.weightBold,
              lineHeight: 1.1,
            })}
          >
            {title}
          </div>
        )}
        {subtitle && (
          <div
            className={css({
              lineHeight: 1.1,
              color: light ? color.light : color.neutral,
              fontSize: rem(12),
            })}
          >
            {subtitle}
          </div>
        )}
      </div>
    </a>
  );
};

export default Reward;
