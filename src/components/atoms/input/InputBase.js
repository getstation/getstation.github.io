import React from 'react';
import PropTypes from 'prop-types';
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

const InputBase = ({
  type,
  value,
  placeholder,
  disabled,
  readOnly,
  className,
  ...props
}) => (
  <input
    type={type}
    value={value}
    placeholder={placeholder}
    disabled={disabled}
    readOnly={readOnly}
    className={cx(
      className,
      input.inputBase,
      input.inputReadOnly,
      css({
        padding: `0 ${input.paddingHorizontal}`,
        lineHeight: 1.5,
        opacity: disabled ? state.disabledOpacity : 1,
        pointerEvents: disabled ? 'none' : 'auto',
      }),
    )}
    {...props}
  />
);

InputBase.propTypes = {
  types: PropTypes.oneOf(types),
  disabled: PropTypes.bool,
  readOnly: PropTypes.bool,
  value: PropTypes.string,
  placeholder: PropTypes.string,
};

InputBase.defaultProps = {
  type: types[0],
  disabled: false,
  readOnly: false,
};

export default InputBase;
