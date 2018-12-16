import React from 'react';
import { css, cx } from 'emotion';
import { rem } from 'polished';
import { Link } from 'gatsby';
import * as font from '../../styles/fonts';
import * as color from '../../styles/colors';
import * as transition from '../../styles/transitions';
import Icon from '../atoms/Icon';

const linkStyles = css`
  color: ${color.light};
  font-size: ${rem(15)};
  font-weight: ${font.weightMedium};
  transition: color 0.3s ${transition.base};
  &:active,
  &:hover,
  &:focus {
    color: ${color.light};
    span::after {
      transform: translateX(0%);
    }
  }
  span {
    overflow: hidden;
    display: inline-block;
    position: relative;
    &::after {
      content: '';
      display: block;
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 1px;
      background: ${color.light};
      transform: translateX(-110%);
      transition: transform 0.2s ${transition.base};
    }
  }
`;

const FooterLink = ({ url, text, type }) => (
  <React.Fragment>
    {type === 'external' && (
      <a
        className={cx(
          linkStyles,
          css({
            display: 'flex',
            alignItems: 'center',
          }),
        )}
        href={url}
        target="_blank"
      >
        <span>{text}</span>
        <Icon
          type="externalLink"
          color="light"
          size={12}
          className={css({
            flexShrink: 0,
            marginLeft: rem(10),
            transform: `translateY(${rem(1)})`,
          })}
        />
      </a>
    )}
    {type === 'internal' && (
      <Link className={linkStyles} to={url}>
        <span>{text}</span>
      </Link>
    )}
  </React.Fragment>
);

export default FooterLink;
