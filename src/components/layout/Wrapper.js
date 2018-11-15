import React from 'react';
import PropTypes from 'prop-types';
import { cx, css } from 'emotion';
import { rem } from 'polished';

export const elements = [
  'div',
  'section',
  'main',
  'header',
  'footer',
  'ul',
  'ol',
];

export const sizes = {
  full: '100%',
  XL: rem(1500),
  L: rem(1200),
  M: rem(1000),
  S: rem(800),
  XS: rem(520),
};

const Wrapper = ({ element, size, ...props }) => {
  props.href = props.to;
  return React.createElement(element, {
    ...props,
    className: cx(
      props.className,
      css({
        paddingLeft: rem(20),
        paddingRight: rem(20),
        marginLeft: 'auto',
        marginRight: 'auto',
        maxWidth: sizes[size],
      }),
    ),
  });
};

Wrapper.propTypes = {
  element: PropTypes.oneOf(elements),
  size: PropTypes.oneOf(Object.keys(sizes)),
  children: PropTypes.node.isRequired,
};

Wrapper.defaultProps = {
  element: elements[0],
  size: 'L',
};

export default Wrapper;
