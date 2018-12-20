import React from 'react';
import { css, cx } from 'emotion';
import { Link } from 'gatsby';
import { rem, rgba } from 'polished';
import Button from '../atoms/Button';
import NavButton from '../atoms/NavButton';
import Wrapper from '../layout/Wrapper';
import * as color from '../../styles/colors';
import { URL } from '../../const';
import { mqNavMobile, mqNavDesktop } from '../../styles/breackpoint';
import * as font from '../../styles/fonts.js';
import * as transition from '../../styles/transitions';

const linkType = type => {
  switch (type) {
    case 'external':
      return 'a';
      break;
    default:
      return Link;
  }
};

const NavLink = ({ element, theme, ...props }) => {
  props.href = props.to;
  return React.createElement(element, {
    ...props,
    className: css({
      display: 'block',
      fontWeight: font.weightMedium,
      color: theme === 'dark' ? color.neutral : color.light,
      transition: `opacity 0.3s ${transition.base}`,
      padding: `${rem(15)} ${rem(20)}`,
      [mqNavDesktop]: {
        padding: rem(10),
      },
      '&:active, &:hover, &:focus': {
        opacity: 0.4,
        color: theme === 'dark' ? color.neutral : color.light,
      },
    }),
  });
};

const Header = ({
  theme,
  header,
  download,
  toggleNavMobile,
  navMobileOpen,
  ...rest
}) => {
  const DATA = header.data;
  const DOWNLOAD = download.data;
  return (
    <header
      {...rest}
      className={cx(
        'header',
        navMobileOpen ? 'navMobile-open' : 'navMobile-close',
        css({
          [mqNavMobile]: {
            height: navMobileOpen ? '100vh' : 'auto',
            background: navMobileOpen ? color.light : 'transparent',
            boxShadow: navMobileOpen
              ? `0 0 30px ${rgba(color.clr1, 0.7)}`
              : 'none',
          },
        }),
      )}
    >
      <Wrapper
        className={css({
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
            {DATA.logo.url ? (
              <img
                src={DATA.logo.url}
                alt={DATA.logo_alt_text}
                width={DATA.logo.dimensions.width || null}
                height={DATA.logo.dimensions.height || null}
                className={cx(
                  'header-logo',
                  css({
                    filter: theme === 'dark' ? 'none' : 'brightness(100)',
                  }),
                )}
              />
            ) : (
              <div>Station</div>
            )}
          </Link>
        </h1>
        <div>
          <NavButton onClick={toggleNavMobile} open={navMobileOpen} />
        </div>
        <div
          className={cx(
            'header-nav',
            css({
              [mqNavMobile]: {
                display: navMobileOpen ? 'block' : 'none',
                textAlign: 'center',
                padding: `${rem(40)} 0`,
              },
              [mqNavDesktop]: {
                display: 'flex',
                alignItems: 'center',
                '> *:not(:first-child)': {
                  marginLeft: rem(30),
                },
              },
            }),
          )}
        >
          {DATA.links &&
            DATA.links.map((link, index) => (
              <NavLink
                key={`nav-link-${index}`}
                theme={theme}
                element={linkType(link.type)}
                to={link.url}
              >
                {link.text}
              </NavLink>
            ))}
          {DATA.download_text && DOWNLOAD.button_url && (
            <Button
              theme={theme === 'dark' ? 'primary' : 'light'}
              to={DOWNLOAD.button_url.url}
              className={cx(
                'header-nav-button',
                DATA.download_tracking_class,
                css({
                  [mqNavMobile]: {
                    marginTop: rem(20),
                  },
                }),
              )}
            >
              {DATA.download_text}
            </Button>
          )}
        </div>
      </Wrapper>
    </header>
  );
};

export default Header;
