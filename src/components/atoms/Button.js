import React from 'react';
import PropTypes from 'prop-types';
import { keyframes } from 'react-emotion';
import { cx, css } from 'emotion';
import { rem, rgba } from 'polished';
import * as font from '../../styles/fonts.js';
import * as color from '../../styles/colors';
import * as state from '../../styles/state';
import * as transition from '../../styles/transitions';

const hang = keyframes`
  0%, 100% { transform: translateY(0) }
  50% { transform: translateY(${rem(5)}) }
`;

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
    minWidth: rem(210),
  },
};

export const Themes = {
  primary: {
    button: {
      background: color.clr1,
      color: color.light,
      '&:hover, &:focus': {
        background: color.clr1Dark,
        color: color.light,
        transform: `translateY(${rem(-2)})`,
      },

      '&:active': {
        background: color.clr1Dark,
        color: rgba(color.light, 0.7),
      },
    },
  },
  light: {
    button: {
      background: color.light,
      color: color.clr1,
    },
  },
  dark: {
    button: {
      background: color.neutralDarker,
      color: color.light,
    },
  },
  ghost: {
    button: {
      background: 'transparent',
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
  },
};

const Button = ({ element, disabled, size, theme, shadow, ...props }) => {
  props.href = props.to;
  return React.createElement(
    element,
    {
      ...props,
      className: cx(
        css({
          position: 'relative',
          display: 'inline-flex',
          justifyContent: 'center',
          alignItems: 'center',
          cursor: 'pointer',
          userSelect: 'none',
          textAlign: 'center',
          textDecoration: 'none',
          border: 'none',
          borderRadius: rem(666),
          fontFamily: 'inherit',
          fontWeight: font.weightMedium,
          lineHeight: 1,
          background: 'transparent',
          opacity: disabled ? state.disabledOpacity : 1,
          pointerEvents: disabled ? 'none' : 'auto',
          '&:active': {
            outline: 'none',
            transform: 'translateY(2px)',
            '&::after': {
              transform: `translateY(${rem(0)})`,
            },
          },
          '&:hover': {
            svg: {
              animation: `${hang} .8s ease-in-out infinite`,
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
            transition: `transform 0.2s ${transition.base}`,
            filter: `blur(${rem(5)})`,
            background: 'linear-gradient(180deg, #96aaff, #123597)',
          },
        }),
        props.className,
      ),
    },
    React.createElement(
      'div',
      {
        className: css({
          position: 'relative',
          display: 'inline-flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 1,
          borderRadius: rem(666),
          transition: `all 0.2s ${transition.base}`,
          ...Themes[theme].button,
          ...Sizes[size],
          '* + *': {
            marginLeft: rem(15),
          },
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
