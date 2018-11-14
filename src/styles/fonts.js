import { rem } from 'polished';
import { css } from 'emotion';

import asap_v8_latin_700_woff from '../fonts/asap-v8-latin-700.woff';
import asap_v8_latin_700_woff2 from '../fonts/asap-v8-latin-700.woff2';

export const fontFace = css`
  @font-face {
    font-family: 'Asap medium';
    font-style: normal;
    font-weight: 400;
    src: url(${asap_v8_latin_700_woff}) format('woff2'),
      url(${asap_v8_latin_700_woff2}) format('woff');
  }
`;

/*
  Font-families
*/
export const primary =
  "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'";

export const secondary = 'Asap medium';

/*
  Font-sizes
*/
export const XXS = rem('12px');
export const XS = rem('14px');
export const S = rem('16px');
export const M = rem('18px');
export const L = rem('20px');
export const XL = rem('22px');
export const XXL = rem('24px');
export const XXXL = rem('32px');

/*
  Font-weight
*/
export const weightBold = 'bold';
export const weightMedium = '600';
export const weightBase = '400';
export const weightThin = '100';

/*
  Line-height
*/

export const lineHeightXS = 1;
export const lineHeightS = 1.15;
export const lineHeightM = 1.25;
export const lineHeightL = 1.5;
export const lineHeightXL = 1.625;
