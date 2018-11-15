import React from 'react';
import { css, cx } from 'emotion';
import PropTypes from 'prop-types';
import { rem } from 'polished';
import * as font from '../../styles/fonts';
import * as color from '../../styles/colors';

const arrowSize = 6;

export const Position = {
  left: {
    top: `calc(50% - ${rem(arrowSize)})`,
    left: `-${rem(arrowSize * 2)}`,
    borderTop: `${rem(arrowSize)} solid transparent`,
    borderRight: `${rem(arrowSize)} solid ${color.light}`,
    borderBottom: `${rem(arrowSize)} solid transparent`,
    borderLeft: `${rem(arrowSize)} solid transparent`,
    transform: `translateX(${rem(2)})`,
  },
  right: {
    top: `calc(50% - ${rem(arrowSize)})`,
    right: `-${rem(arrowSize * 2)}`,
    borderTop: `${rem(arrowSize)} solid transparent`,
    borderRight: `${rem(arrowSize)} solid transparent`,
    borderBottom: `${rem(arrowSize)} solid transparent`,
    borderLeft: `${rem(arrowSize)} solid ${color.light}`,
    transform: `translateX(${rem(-2)})`,
  },
  bottom: {
    bottom: `-${rem(arrowSize * 2)}`,
    left: `calc(50% - ${rem(arrowSize)})`,
    borderTop: `${rem(arrowSize)} solid ${color.light}`,
    borderRight: `${rem(arrowSize)} solid transparent`,
    borderBottom: `${rem(arrowSize)} solid transparent`,
    borderLeft: `${rem(arrowSize)} solid transparent`,
  },
  top: {
    top: `-${rem(arrowSize * 2)}`,
    left: `calc(50% - ${rem(arrowSize)})`,
    borderTop: `${rem(arrowSize)} solid transparent`,
    borderRight: `${rem(arrowSize)} solid transparent`,
    borderBottom: `${rem(arrowSize)} solid ${color.light}`,
    borderLeft: `${rem(arrowSize)} solid transparent`,
  },
};

const Tooltip = ({ className, children, position, ...rest }) => (
  <div
    className={cx(
      css({
        position: 'relative',
        display: 'inline-block',
        padding: `${rem(2)} ${rem(10)}`,
        background: color.light,
        color: color.neutralDark,
        fontSize: rem(12),
        fontWeight: font.weightMedium,
        borderRadius: rem(666),
        color: color.clr1,
        '&::before': {
          display: 'block',
          content: '""',
          position: 'absolute',
          width: 0,
          height: 0,
          ...Position[position],
        },
      }),
      className,
    )}
    {...rest}
  >
    {children}
  </div>
);

export default Tooltip;

Tooltip.propTypes = {
  position: PropTypes.oneOf(Object.keys(Position)),
};

Tooltip.defaultProps = {
  position: 'left',
};
