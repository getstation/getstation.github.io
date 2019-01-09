import React from 'react';
import { css, cx } from 'emotion';
import { rem } from 'polished';
import slugify from 'slugify';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Link from '../../components/atoms/Link';
import Icon from '../../components/atoms/Icon';
import { mqMin } from '../../styles/breackpoint';
import * as font from '../../styles/fonts.js';
import * as color from '../../styles/colors';
import * as transition from '../../styles/transitions';

const LinkBig = ({ text, ...rest }) => (
  <li {...rest}>
    <AnchorLink
      className={css({
        color: color.neutralLight,
        fontFamily: font.secondary,
        transition: `color 0.3s ${transition.base}`,
        '&:hover, &:focus': {
          color: color.neutral,
        },
        [mqMin[2]]: {
          fontSize: rem(24),
        },
      })}
      href={`#${slugify(text, {
        lower: true,
      })}`}
    >
      {text}
    </AnchorLink>
  </li>
);

const PressAside = ({ data }) => {
  const {
    aside_anchor_text,
    body,
    download_url,
    download_text,
    download_tracking_class_aside,
  } = data;
  return (
    <ul
      className={css({
        position: 'sticky',
        top: rem(88),
        [mqMin[1]]: {
          borderRight: `1px solid ${color.neutralLighter}`,
          marginRight: rem(50),
          paddingRight: rem(50),
        },
        [mqMin[2]]: {
          marginRight: rem(80),
          paddingRight: rem(80),
        },
        '> *:not(:first-child)': {
          marginTop: rem(20),
        },
      })}
    >
      {aside_anchor_text && <LinkBig text={aside_anchor_text} />}
      {body.map((item, index) => (
        <LinkBig
          key={`#${slugify(item.primary.title, { lower: true })}-${index}`}
          text={item.primary.title}
        />
      ))}
      {download_url && download_text && (
        <li>
          <Link
            to={download_url}
            className={cx(
              css({
                fontSize: rem(14),
                fontWeight: font.weightBold,
              }),
              download_tracking_class_aside,
            )}
          >
            <Icon
              type="download"
              color="clr1"
              size={15}
              className={css({
                marginRight: rem(10),
              })}
            />
            <span>{download_text}</span>
          </Link>
        </li>
      )}
    </ul>
  );
};

export default PressAside;
