import React from 'react';
import { cx, css } from 'emotion';
import { rem, rgba } from 'polished';
import * as font from '../../styles/fonts.js';
import * as color from '../../styles/colors';
import * as transition from '../../styles/transitions';

const Tag = ({ text, className, ...rest }) => (
  <div
    {...rest}
    className={cx(
      css({
        display: 'inline-block',
        padding: `${rem(4)} ${rem(18)}`,
        lineHeight: 1,
        borderStyle: 'solid',
        borderWidth: 1,
        fontSize: rem(11),
        fontWeight: font.weightBold,
        borderRadius: rem(666),
      }),
      className,
    )}
  >
    {text}
  </div>
);

export { Tag };
