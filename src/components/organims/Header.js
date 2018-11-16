import React from 'react';
import { css } from 'emotion';
import { Link } from 'gatsby';
import { rem } from 'polished';
import Button from '../atoms/Button';
import Wrapper from '../layout/Wrapper';
import Logo from '../../images/logo-station-blue.svg';
import { mq } from '../../styles/breackpoint';
import * as font from '../../styles/fonts.js';
import * as transition from '../../styles/transitions';

const navLink = css`
  font-weight: ${font.weightMedium};
  color: '#6E7782';
  transition: opacity 0.3s ${transition.base};
  &:active,
  &:hover,
  &:focus {
    opacity: 0.4;
  }
`;

const Header = ({ header, download, ...rest }) => {
  const DATA = header.data;
  const DOWNLOAD = download.data;
  return (
    <header className={css({})} {...rest}>
      <Wrapper
        className={css({
          [mq[1]]: {
            height: rem(88),
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          },
        })}
      >
        <h1>
          <Link to="/">
            <img src={Logo} alt="Station" width="100" height="28" />
          </Link>
        </h1>
        <div
          className={css({
            [mq[1]]: {
              display: 'flex',
              alignItems: 'center',
              '> *:not(:first-child)': {
                marginLeft: rem(50),
              },
            },
          })}
        >
          {DATA.link_1_text && (
            <Link className={navLink} to="/">
              {DATA.link_1_text}
            </Link>
          )}
          {DATA.link_2_text && (
            <Link className={navLink} to="/">
              {DATA.link_2_text}
            </Link>
          )}
          {DATA.link_3_text && (
            <Link className={navLink} to="/">
              {DATA.link_3_text}
            </Link>
          )}
          {DOWNLOAD.button_text && DOWNLOAD.button_url && (
            <Button to={DOWNLOAD.button_url.url}>{DOWNLOAD.button_text}</Button>
          )}
        </div>
      </Wrapper>
    </header>
  );
};

export default Header;
