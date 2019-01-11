import React from 'react';
import { css } from 'emotion';
import { rem } from 'polished';
import * as transition from '../../styles/transitions';
import { mqMin } from '../../styles/breackpoint';

const Reward = props => {
  const { url, img } = props;
  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className={css({
        display: 'inline-block',
        transition: `transform .2s ${transition.base}`,
        '&:hover': {
          transform: `translateY(${rem(-2)})`,
        },
      })}
    >
      {img && (
        <img
          className={css({
            display: 'block',
          })}
          src={img.url}
          width={img.dimensions.width}
          height={img.dimensions.height}
        />
      )}
    </a>
  );
};

export default Reward;
