import React from 'react';
import PropTypes from 'prop-types';
import { cx, css } from 'emotion';
import { rem, rgba } from 'polished';
import * as font from '../../styles/fonts.js';
import * as color from '../../styles/colors';
import * as state from '../../styles/state';
import * as transition from '../../styles/transitions';

export const Sizes = {
  L: {
    padding: `${rem(10)} ${rem(27)}`,
    minHeight: rem(36),
    fontSize: 'inherit',
  },
  M: {
    padding: `${rem(18)} ${rem(40)}`,
    minHeight: rem(54),
    fontSize: rem(18),
  },
};

export const Themes = {
  primary: {
    background: color.clr1,
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

const Button = ({ element, disabled, size, theme, ...props }) => {
  props.href = props.to;
  return React.createElement(element, {
    ...props,
    className: cx(
      props.className,
      css({
        display: 'inline-flex',
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
        transition: `color 0.2s ${transition.base}, background 0.2s ${
          transition.base
        }, transform 0.2s ${transition.base}, boxShadow 0.2s ${
          transition.base
        }`,
        ...Themes[theme],
        ...Sizes[size],
        '&:active': {
          outline: 'none',
          transform: 'translateY(2px)',
        },
      }),
    ),
  });
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
  size: 'L',
  theme: 'primary',
  onClick: () => {},
};

export default Button;
