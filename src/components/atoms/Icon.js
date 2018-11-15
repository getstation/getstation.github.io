import React from 'react';
import * as color from '../../styles/colors';

const IconExternalLink = props => (
  <svg width={13} height={13} {...props}>
    <path
      d="M12 7.695V10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h2.707m5.793.5l-5 5M9 1h1.945a1 1 0 0 1 1 1v2.077"
      fill="none"
      fillRule="evenodd"
      stroke={color.light}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
  </svg>
);

export { IconExternalLink };
