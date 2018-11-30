import React from 'react';
import { cx, css } from 'emotion';
import { rem, rgba, backgrounds } from 'polished';
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
    '&.is-active': {
      background: color.clr6,
      borderColor: color.clr6,
      color: color.light,
    },
  },
  clr5: {
    borderColor: rgba(color.clr5, 0.7),
    color: color.clr5,
    '&.is-active': {
      background: color.clr5,
      borderColor: color.clr5,
      color: color.light,
    },
  },
  clr4: {
    borderColor: rgba(color.clr4, 0.7),
    color: color.clr4,
    '&.is-active': {
      background: color.clr4,
      borderColor: color.clr4,
      color: color.light,
    },
  },
  clr3: {
    borderColor: rgba(color.clr3, 0.7),
    color: color.clr3,
    '&.is-active': {
      background: color.clr3,
      borderColor: color.clr3,
      color: color.light,
    },
  },
  clr2: {
    borderColor: rgba(color.clr2, 0.7),
    color: color.clr2,
    '&.is-active': {
      background: color.clr2,
      borderColor: color.clr2,
      color: color.light,
    },
  },
  clr1: {
    borderColor: rgba(color.clr1, 0.7),
    color: color.clr1,
    '&.is-active': {
      background: color.clr1,
      borderColor: color.clr1,
      color: color.light,
    },
  },
};

const TagButton = ({ text, className, active, ...rest }) => {
  return (
    <button
      {...rest}
      className={cx(
        css({
          cursor: 'pointer',
          display: 'inline-block',
          padding: `${rem(10)} ${rem(18)}`,
          lineHeight: 1,
          borderStyle: 'solid',
          borderWidth: 1,
          fontSize: rem(12),
          fontWeight: font.weightBold,
          borderRadius: rem(666),
          ...themeSwitcher(text),
        }),
        active ? 'is-active' : null,
        className,
      )}
    >
      {text}
    </button>
  );
};

const Tag = ({ text, className, active, ...rest }) => {
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
        active ? 'is-active' : null,
        className,
      )}
    >
      {text}
    </div>
  );
};

export { Tag, TagButton };
