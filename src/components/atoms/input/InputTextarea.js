import React from 'react';
import PropTypes from 'prop-types';
import { rem } from 'polished';
import { cx, css } from 'emotion';
import * as input from '../../../styles/inputs';
import * as state from '../../../styles/state';

export const types = [
  'text',
  'password',
  'number',
  'tel',
  'url',
  'date',
  'datetime-local',
  'month',
  'week',
  'time',
];

const InputTextarea = ({
  children,
  placeholder,
  disabled,
  readOnly,
  className,
  ...props
}) => (
  <textarea
    placeholder={placeholder}
    disabled={disabled}
    readOnly={readOnly}
    className={cx(
      className,
      input.inputBase,
      input.inputReadOnly,
      css({
        padding: `${rem('7px')} ${input.paddingHorizontal}`,
        lineHeight: 1.5,
        minHeight: rem('200px'),
        opacity: disabled ? state.disabledOpacity : 1,
        pointerEvents: disabled ? 'none' : 'auto',
      }),
    )}
    {...props}
  >
    {children}
  </textarea>
);

InputTextarea.propTypes = {
  types: PropTypes.oneOf(types),
  disabled: PropTypes.bool,
  readOnly: PropTypes.bool,
  value: PropTypes.string,
  placeholder: PropTypes.string,
};

InputTextarea.defaultProps = {
  type: types[0],
  disabled: false,
  readOnly: false,
};

export default InputTextarea;
