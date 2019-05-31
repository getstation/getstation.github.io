import styled from 'react-emotion';
import { css } from 'emotion';
import { mqMin } from '../../styles/breackpoint';
import * as font from '../../styles/fonts.js';
import * as color from '../../styles/colors';
import * as link from '../../styles/links';
import { rem } from 'polished';

const title = css`
  font-weight: ${font.weightBold};
  line-height: ${font.lineHeightL};
  color: ${color.neutralDark};
`;

const spacing = css`
  margin: ${rem(24)} 0;
`;

const Content = styled('div')`
  color: ${color.neutralLight};
  ${[mqMin[2]]} {
    font-size: ${font.M};
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  p,
  ul,
  dl,
  blockquote,
  table {
    &:first-child {
      margin-top: 0;
    }
    &:last-child {
      margin-bottom: 0;
    }
  }

  /* Typography */
  h1 {
    ${spacing};
    ${title};
    font-size: ${font.XXXL};
  }

  h2 {
    ${spacing};
    ${title};
    font-size: ${font.XXL};
  }

  h3 {
    ${spacing};
    ${title};
    font-size: ${font.XL};
  }

  h4 {
    ${spacing};
    ${title};
    font-size: ${font.L};
  }

  h5 {
    ${spacing};
    ${title};
    font-size: ${font.M};
  }

  h6 {
    ${spacing};
    ${title};
    font-size: ${font.S};
  }

  p {
    ${spacing};
    > code {
      padding: 0.25rem 0.75rem;
      background: hsla(0, 0%, 0%, 0.04);
      border: 1px solid #eee;
      border-radius: ${rem(3)};
    }
  }

  blockquote {
    ${spacing};
    padding-left: ${rem(20)};
    border-left: 4px solid;

    p {
      margin: 0;
    }
  }

  figcaption {
    font-style: italic;
  }

  code {
    font-size: 80%;
    font-family: Consolas, 'Roboto Mono', 'Liberation Mono', Menlo, Courier,
      monospace;
  }

  pre {
    text-align: left;
    font-size: 100%;
  }

  /* Links */
  a {
    ${link.styleBase};
  }

  /* List */

  ul,
  ol {
    display: inline-block;
    padding-left: ${rem(20)};
    ${spacing};
    ol,
    ul {
      list-style: circle;
      margin: 0;
    }
  }

  ul {
    list-style: disc;
  }

  li {
    text-align: left;
  }

  ol {
    list-style: decimal;
  }

  dl {
    ${spacing};
  }

  dt {
    font-weight: bold;
    &:not(:first-child) {
      margin-top: ${rem(12)};
    }
  }

  /* Separator */
  hr {
    height: 0;
    border: 1px solid ${color.border};
    ${spacing};
  }

  /* Image */
  img {
    ${spacing};
  }

  /* Table */
  table {
    ${spacing};
    width: 100%;
    max-width: 100%;
    line-height: ${font.lineHeightM};
  }

  thead {
    th {
      padding: ${rem(10)};
      vertical-align: bottom;
      border-bottom: 2px solid ${color.border};
      font-weight: ${font.weightBold};
    }
  }

  tbody {
    td {
      padding: ${rem(10)};
      border-bottom: 1px solid ${color.border};
    }
  }
`;

export default Content;
