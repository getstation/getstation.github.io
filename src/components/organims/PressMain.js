import React from 'react';
import { css } from 'emotion';
import { rem } from 'polished';
import PressMainContentText from '../organims/PressMainContentText';
import PressMainCards from '../organims/PressMainCards';

const PressMain = ({ data, ...rest }) => {
  const { text, cards } = data.content;
  console.log(cards);
  return (
    <div {...rest}>
      <PressMainContentText items={text} />
      {cards.map((item, index) => (
        <PressMainCards
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
