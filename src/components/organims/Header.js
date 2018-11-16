import React from 'react';
import { css } from 'emotion';
import { Link } from 'gatsby';
import { rem, rgba } from 'polished';
import Button from '../atoms/Button';
import Wrapper from '../layout/Wrapper';
import * as color from '../../styles/colors';
import Logo from '../../images/logo-station-blue.svg';
import { mqNavMobile, mqNavDesktop } from '../../styles/breackpoint';
import * as font from '../../styles/fonts.js';
import * as transition from '../../styles/transitions';

const navLink = css`
  display: block;
  font-weight: ${font.weightMedium};
  color: '#6E7782';
  transition: opacity 0.3s ${transition.base};
  padding: ${rem(10)} ${rem(20)};
  ${mqNavDesktop} {
    padding: ${rem(10)};
  }
  &:active,
  &:hover,
  &:focus {
    opacity: 0.4;
  }
`;

const Header = ({
  header,
  download,
  toggleNavMobile,
  navMobileOpen,
  ...rest
}) => {
  const DATA = header.data;
  const DOWNLOAD = download.data;
  console.log(toggleNavMobile);
  return (
    <header {...rest}>
      <Wrapper
        className={css({
          background: navMobileOpen ? color.light : 'transparent',
          boxShadow: navMobileOpen
            ? `0 0 30px ${rgba(color.clr1, 0.7)}`
            : 'none',
          [mqNavMobile]: {
            paddingBottom: rem(20),
          },
          [mqNavDesktop]: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          },
        })}
      >
        <h1
          className={css({
            [mqNavMobile]: {
              padding: `${rem(30)} 0 ${rem(10)}`,
            },
            [mqNavDesktop]: {
              padding: `${rem(30)} 0`,
            },
          })}
        >
          <Link to="/">
            <img src={Logo} alt="Station" width="100" height="28" />
          </Link>
        </h1>
        <div>
          <div
            className={css({
              position: 'absolute',
              top: rem(20),
              right: rem(20),
              width: rem(40),
              height: rem(40),
              background: 'red',
              cursor: 'pointer',
            })}
            onClick={() => toggleNavMobile()}
          >
            Menu
          </div>
        </div>
        <div
          className={css({
            [mqNavMobile]: {
              display: navMobileOpen ? 'block' : 'none',
              textAlign: 'center',
              padding: `${rem(10)} ${rem(20)}`,
            },
            [mqNavDesktop]: {
              display: 'flex',
              alignItems: 'center',
              '> *:not(:first-child)': {
                marginLeft: rem(30),
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
            <Button
              to={DOWNLOAD.button_url.url}
              className={css({
                [mqNavMobile]: {
                  marginTop: rem(20),
                },
              })}
            >
              {DOWNLOAD.button_text}
            </Button>
          )}
        </div>
      </Wrapper>
    </header>
  );
};

export default Header;
