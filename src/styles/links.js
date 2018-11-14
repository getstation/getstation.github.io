import { css } from 'emotion';
import * as color from './colors';

export const styleBase = css`
  color: ${color.clr1};
  transition: color 0.3s ease-in-out;
  &:active,
  &:hover,
  &:focus {
    color: ${color.clr1Light};
  }
`;
