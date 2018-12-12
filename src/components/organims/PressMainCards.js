import React from 'react';

import { css } from 'emotion';
import { rem } from 'polished';
import { mqMin, mqMax } from '../../styles/breackpoint';
import PressMainTitle from '../atoms/PressMainTitle';
import Card from '../molecules/Card';

const PressMainCards = ({ title, size, data, ...rest }) => {
  return (
    <div {...rest}>
      {title && <PressMainTitle>{title}</PressMainTitle>}
      <div
        className={css({
          display: 'grid',
          margin: `${rem(40)} 0`,
          [mqMax[0]]: {
            gridTemplateColumns: 'repeat(1, 1fr)',
            gridGap: rem(40),
          },
          [mqMin[0]]: {
            gridTemplateColumns: 'repeat(2, 1fr)',
            gridGap: rem(40),
          },
          [mqMin[2]]: {
            gridTemplateColumns:
              size === 'big' ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)',
            gridGap: rem(50),
          },
        })}
      >
        {data.map((item, index) => (
          <div key={`card-${title}-${index}`} className={css({})}>
            <Card
              title={item.title}
              theme={item.theme}
              size={size}
              images={{
                svg: item.svg,
                png: item.png,
                jpg: item.jpg,
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PressMainCards;
