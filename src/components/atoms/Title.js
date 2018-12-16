import React from 'react';
import PropTypes from 'prop-types';
import { cx, css } from 'emotion';
import * as font from '../../styles/fonts.js';

export const elements = ['div', 'p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'];

const Title = ({ element, ...props }) => {
  props.href = props.to;
  return React.createElement(element, {
    ...props,
    className: cx(
      props.className,
      css({
        fontFamily: font.secondary,
        lineHeight: font.lineHeightL,
      }),
    ),
  });
};

Title.propTypes = {
  element: PropTypes.oneOf(elements),
  children: PropTypes.node,
};

Title.defaultProps = {
  element: elements[0],
};

export default Title;
