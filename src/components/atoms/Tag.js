import React from 'react';
import { cx, css } from 'emotion';
import { rem, rgba } from 'polished';
import * as font from '../../styles/fonts.js';
import * as color from '../../styles/colors';

const themeSwitcher = theme => {
  switch (theme) {
    case 'Pick the right tools':
      return Themes.clr2;
    case 'Stay focused':
      return Themes.clr3;
    case 'Centralise everything':
      return Themes.clr4;
    case 'Work faster':
      return Themes.clr5;
    case 'Tailor your workflow':
      return Themes.clr6;
    default:
      return Themes.clr1;
  }
};

export const Themes = {
  clr6: {
    borderColor: rgba(color.clr6, 0.7),
    color: color.clr6,
  },
  clr5: {
    borderColor: rgba(color.clr5, 0.7),
    color: color.clr5,
  },
  clr4: {
    borderColor: rgba(color.clr4, 0.7),
    color: color.clr4,
  },
  clr3: {
    borderColor: rgba(color.clr3, 0.7),
    color: color.clr3,
  },
  clr2: {
    borderColor: rgba(color.clr2, 0.7),
    color: color.clr2,
  },
  clr1: {
    borderColor: rgba(color.clr1, 0.7),
    color: color.clr1,
  },
};

const Tag = ({ text, className, ...rest }) => {
  console.log(themeSwitcher(text));
  return (
    <div
      {...rest}
      className={cx(
        css({
          display: 'inline-block',
          padding: `${rem(4)} ${rem(18)}`,
          lineHeight: 1,
          borderStyle: 'solid',
          borderWidth: 1,
          fontSize: rem(11),
          fontWeight: font.weightBold,
          borderRadius: rem(666),
          ...themeSwitcher(text),
        }),
        className,
      )}
    >
      {text}
    </div>
  );
};

export { Tag };
