import React from 'react';
import PropTypes from 'prop-types';
import { cx, css } from 'emotion';
import { rem } from 'polished';
import * as font from '../../styles/fonts.js';
import * as color from '../../styles/colors';

export const Sizes = {
  M: {
    padding: `${rem(8)} ${rem(10)}`,
    fontSize: rem(13),
    fontWeight: font.weightMedium,
  },
  L: {
    padding: `${rem(6)} ${rem(20)}`,
    fontSize: rem(15),
    fontWeight: font.weightBold,
  },
};

export const Themes = {
  primary: {
    background: '#ffd429',
    color: color.light,
  },
  light: {
    background: color.light,
    color: color.clr1,
  },
};

const Status = ({ chidren, size, theme, className, children, ...rest }) => (
  <div
    className={cx(
      css({
        display: 'inline-flex',
        textAlign: 'center',
        fontFamily: 'inherit',
        fontWeight: font.weightMedium,
        borderRadius: rem(5),
        lineHeight: 1,
        ...Themes[theme],
        ...Sizes[size],
      }),
      className,
    )}
    {...rest}
  >
    {children}
  </div>
);

Status.propTypes = {
  theme: PropTypes.oneOf(Object.keys(Themes)),
  size: PropTypes.oneOf(Object.keys(Sizes)),
  children: PropTypes.node.isRequired,
};

Status.defaultProps = {
  size: 'M',
  theme: 'primary',
};

export default Status;
