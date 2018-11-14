import React from 'react';
import PropTypes from 'prop-types';
import { cx, css } from 'emotion';
import { rem } from 'polished';
import * as radius from '../../styles/radius.js';
import * as color from '../../styles/colors';
import * as state from '../../styles/state';

const Button = ({ element, disabled, ...props }) => {
  props.href = props.to;
  return React.createElement(element, {
    ...props,
    className: cx(
      props.className,
      css({
        display: 'inline-flex',
        minHeight: rem('40px'),
        padding: `${rem('12px')} ${rem('20px')}`,
        cursor: 'pointer',
        userSelect: 'none',
        textAlign: 'center',
        textDecoration: 'none',
        color: color.light,
        border: 'none',
        borderRadius: radius.S,
        background: color.clr1,
        fontFamily: 'inherit',
        fontSize: 'inherit',
        lineHeight: 1,
        opacity: disabled ? state.disabledOpacity : 1,
        pointerEvents: disabled ? 'none' : 'auto',
        '&:hover, &:focus, &:active': {
          background: color.clr1Dark,
          color: color.light,
        },
      }),
    ),
  });
};

Button.propTypes = {
  element: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  element: 'a',
  disabled: false,
};

export default Button;
