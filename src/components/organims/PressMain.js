import React from 'react';
import slugify from 'slugify';
import { css } from 'emotion';
import { rem } from 'polished';
import PressMainContentText from '../organims/PressMainContentText';
import PressMainCards from '../organims/PressMainCards';

const PressMain = ({ data, ...rest }) => {
  const { text, cards, textAnchor } = data.content;
  return (
    <div {...rest}>
      <PressMainContentText id={textAnchor} items={text} />
      {cards.map((item, index) => (
        <PressMainCards
          id={slugify(item.primary.title, {
            lower: true,
          })}
          key={`press-card-${index}`}
          title={item.primary.title}
          size={item.primary.size}
          data={item.items}
          className={css({ marginTop: rem(100) })}
        />
      ))}
    </div>
  );
};

export default PressMain;
