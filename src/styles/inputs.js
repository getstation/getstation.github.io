import { css } from 'emotion';
import { rem } from 'polished';
import * as color from './colors';
import * as radius from './radius';

export const paddingHorizontal = rem(20);

export const inputBase = css`
  display: block;
  width: 100%;
  border: 1px solid ${color.border};
  background-color: ${color.light};
  box-shadow: none;
  border-radius: ${radius.S};
  min-height: ${rem(40)};
`;

export const inputReadOnly = css`
  &:read-only {
    background-color: ${color.border};
    box-shadow: none;
  }
`;
