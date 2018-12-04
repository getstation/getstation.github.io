import React from 'react';
import PropTypes from 'prop-types';
import { cx, css } from 'emotion';
import { rem, rgba } from 'polished';
import * as font from '../../styles/fonts.js';
import * as color from '../../styles/colors';
import * as state from '../../styles/state';
import * as transition from '../../styles/transitions';
import { Span } from 'opentracing';

export const Sizes = {
  M: {
    padding: `${rem(10)} ${rem(27)}`,
    minHeight: rem(36),
    fontSize: 'inherit',
  },
  L: {
    padding: `${rem(18)} ${rem(40)}`,
    minHeight: rem(54),
    fontSize: rem(18),
  },
};

export const Themes = {
  primary: {
    background: color.clr1,
    boxShadow: `0 ${rem(10)} ${rem(40)} ${rem(-10)} ${rgba(color.clr1, 0.8)}`,
    color: color.light,
    '&:hover, &:focus': {
      background: color.clr1Dark,
      color: color.light,
    },
    '&:active': {
      background: color.clr1Dark,
      color: rgba(color.light, 0.7),
    },
  },
  light: {
    background: color.light,
    color: color.clr1,
    '&:hover, &:focus': {
      background: rgba(color.light, 0.7),
      color: color.clr1,
    },
    '&:active': {
      background: rgba(color.light, 0.7),
      color: rgba(color.clr1, 0.7),
    },
  },
  ghost: {
    background: color.light,
    color: color.clr1,
    boxShadow: `inset 0 0 0 2px ${color.clr1Light}`,
    '&:hover, &:focus': {
      background: color.clr1Dark,
      boxShadow: `inset 0 0 0 2px ${color.clr1Dark}`,
      color: color.light,
    },
    '&:active': {
      background: color.clr1Dark,
      boxShadow: `inset 0 0 0 2px ${color.clr1Dark}`,
      color: rgba(color.light, 0.7),
    },
  },
};

const Button = ({ element, disabled, size, theme, shadow, ...props }) => {
  props.href = props.to;
  return React.createElement(
    element,
    {
      ...props,
      className: cx(
        props.className,
        css({
          position: 'relative',
          display: 'inline-flex',
          justifyContent: 'center',
          cursor: 'pointer',
          userSelect: 'none',
          textAlign: 'center',
          textDecoration: 'none',
          border: 'none',
          borderRadius: rem(666),
          fontFamily: 'inherit',
          fontWeight: font.weightMedium,
          lineHeight: 1,
          opacity: disabled ? state.disabledOpacity : 1,
          pointerEvents: disabled ? 'none' : 'auto',
          '&:active': {
            outline: 'none',
            transform: 'translateY(2px)',
            '&::after': {
              transform: `translateY(${rem(0)})`,
            },
          },
          '&::after': {
            zIndex: 0,
            content: '""',
            display: shadow ? 'block' : 'none',
            position: 'absolute',
            top: 0,
            left: rem(10),
            right: rem(10),
            bottom: 0,
            opacity: 0.42,
            transform: `translateY(${rem(3)})`,
            borderRadius: rem(666),
            filter: `blur(${rem(5)})`,
            background: 'linear-gradient(180deg, #96aaff, #123597)',
            transition: `transform 0.2s ${transition.base}`,
          },
        }),
      ),
    },
    React.createElement(
      'span',
      {
        className: css({
          position: 'relative',
          zIndex: 1,
          borderRadius: rem(666),
          transition: `color 0.2s ${transition.base}, background 0.2s ${
            transition.base
          }, boxShadow 0.2s ${transition.base}`,
          ...Themes[theme],
          ...Sizes[size],
        }),
      },
      props.children,
    ),
  );
};

Button.propTypes = {
  element: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  theme: PropTypes.oneOf(Object.keys(Themes)),
  size: PropTypes.oneOf(Object.keys(Sizes)),
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  element: 'a',
  disabled: false,
  size: 'M',
  theme: 'primary',
  onClick: () => {},
};

export default Button;
