import React from 'react';
import { cx, css } from 'emotion';
import { rem, rgba, backgrounds } from 'polished';
import * as font from '../../styles/fonts.js';
import * as color from '../../styles/colors';
import * as transition from '../../styles/transitions';

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

export const Sizes = {
  M: {
    padding: `${rem(4)} ${rem(18)}`,
    fontSize: rem(11),
  },
  L: {
    padding: `${rem(8)} ${rem(15)}`,
    fontSize: rem(13),
  },
};

export const Themes = {
  clr6: {
    borderColor: rgba(color.clr6, 0.7),
    color: color.clr6,
    '&.is-active, &:hover, &:focus': {
      background: color.clr6,
      borderColor: color.clr6,
      color: color.light,
    },
  },
  clr5: {
    borderColor: rgba(color.clr5, 0.7),
    color: color.clr5,
    '&.is-active, &:hover, &:focus': {
      background: color.clr5,
      borderColor: color.clr5,
      color: color.light,
    },
  },
  clr4: {
    borderColor: rgba(color.clr4, 0.7),
    color: color.clr4,
    '&.is-active, &:hover, &:focus': {
      background: color.clr4,
      borderColor: color.clr4,
      color: color.light,
    },
  },
  clr3: {
    borderColor: rgba(color.clr3, 0.7),
    color: color.clr3,
    '&.is-active, &:hover, &:focus': {
      background: color.clr3,
      borderColor: color.clr3,
      color: color.light,
    },
  },
  clr2: {
    borderColor: rgba(color.clr2, 0.7),
    color: color.clr2,
    '&.is-active, &:hover, &:focus': {
      background: color.clr2,
      borderColor: color.clr2,
      color: color.light,
    },
  },
  clr1: {
    borderColor: rgba(color.clr1, 0.7),
    color: color.clr1,
    '&.is-active, &:hover, &:focus': {
      background: color.clr1,
      borderColor: color.clr1,
      color: color.light,
    },
  },
};

const Tag = ({ element, text, className, active, size, ...props }) => {
  return React.createElement(
    element,
    {
      ...props,
      className: cx(
        css({
          display: 'inline-block',
          lineHeight: 1,
          background: 'transparent',
          borderStyle: 'solid',
          borderWidth: 1,
          fontWeight: font.weightBold,
          borderRadius: rem(666),
          transition: `all .2s ${transition.base}`,
          cursor: element === 'button' ? 'pointer' : 'auto',
          '&:active': {
            transform: 'translateY(2px)',
          },
          ...themeSwitcher(text),
          ...Sizes[size],
        }),
        active ? 'is-active' : null,
        className,
      ),
    },
    text,
  );
};

export default Tag;

Tag.defaultProps = {
  element: 'div',
  size: 'M',
};
