import { css } from 'emotion';
import * as color from './colors';
import * as transition from './transitions';

export const styleBase = css`
  color: ${color.clr1};
  transition: color 0.3s ${transition.base};
  &:active,
  &:hover,
  &:focus {
    color: ${color.clr1Dark};
  }
`;
