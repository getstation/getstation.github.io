import React from 'react';
import { css, cx } from 'emotion';
import { rem, rgba } from 'polished';
import { graphql } from 'gatsby';
import Button from '../atoms/Button';
import FooterLink from '../../components/atoms/LinkFooter';
import Tooltip from '../../components/atoms/Tooltip';
import Icon from '../../components/atoms/Icon';
import Wrapper from '../layout/Wrapper';
import * as font from '../../styles/fonts';
import * as color from '../../styles/colors';
import * as transition from '../../styles/transitions';
import { mq, mqOnlyPhone } from '../../styles/breackpoint';
import ProductHunt from '../../images/product-hunt-logo.svg';

const Item = ({ type, text, url, tooltip, className, ...rest }) => (
  <li
    className={cx(
      className,
      css({
        '&:not(:first-child)': {
          marginTop: rem(7),
        },
      }),
    )}
    {...rest}
  >
    <FooterLink type={type} text={text} url={url} tooltip={tooltip} />
    {tooltip && (
      <Tooltip
        position="left"
        className={css({
          marginLeft: rem(15),
          marginTop: rem(-4),
          marginBottom: rem(-4),
        })}
      >
        {tooltip}
      </Tooltip>
    )}
  </li>
);

const Col = ({ title, list, className, ...rest }) => {
  return (
    <div
      className={cx(
        css({
          [mqOnlyPhone]: {
            '&:not(:first-child)': {
              marginTop: rem(30),
            },
          },
          [mq[0]]: {
            flexGrow: 1,
            padding: `0 ${rem(20)}`,
          },
        }),
        className,
      )}
      {...rest}
    >
      <div
        className={css({
          color: rgba(color.light, 0.4),
          textTransform: 'uppercase',
          letterSpacing: 1.2,
          fontSize: rem(12),
          fontWeight: font.weightBold,
          marginBottom: rem(7),
        })}
      >
        {title}
      </div>
      {list && (
        <ul>
          {list.map(item => (
            <Item key={item.text} {...item} />
          ))}
        </ul>
      )}
    </div>
  );
};

const Footer = ({ footer, download, ...rest }) => {
  const DATA = footer.data;
  const DOWNLOAD = download.data;
  return (
    <footer
      className={css({
        padding: `${rem(40)} 0 ${rem(40)}`,
        background: 'linear-gradient(to top, #130cb7, #52e5e7)',
        [mq[0]]: {
          padding: `${rem(100)} 0 ${rem(40)}`,
        },
      })}
      {...rest}
    >
      <Wrapper>
        <div
          className={css({
            [mq[1]]: {
              display: 'flex',
            },
          })}
        >
          <div
            className={css({
              [mq[0]]: {
                display: 'flex',
                justifyContent: 'space-between',
                margin: `0 ${rem(-20)}`,
                flexGrow: 1,
              },
            })}
          >
            {DATA.column_1_title && (
              <Col title={DATA.column_1_title} list={DATA.column_1_list} />
            )}
            {DATA.column_2_title && (
              <Col title={DATA.column_2_title} list={DATA.column_2_list} />
            )}
            {DATA.column_3_title && (
              <Col title={DATA.column_3_title} list={DATA.column_3_list} />
            )}
          </div>

          <div
            className={css({
              marginTop: rem(30),
              paddingTop: rem(30),
              borderTop: `1px solid ${rgba(color.light, 0.2)}`,
              [mq[1]]: {
                marginTop: 0,
                paddingTop: 0,
                borderTop: 'none',
                borderLeft: `1px solid ${rgba(color.light, 0.2)}`,
                flexShrink: 0,
                width: '33.333%',
              },
            })}
          >
            <div
              className={css({
                marginBottom: rem(15),
                textAlign: 'center',
              })}
            >
              {DOWNLOAD.button_text && DOWNLOAD.button_url && (
                <Button to={DOWNLOAD.button_url.url} theme="light" size="L">
                  {DOWNLOAD.button_text}
                </Button>
              )}
            </div>
            <div
              className={css({
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              })}
            >
              {DOWNLOAD.plateform_list &&
                DOWNLOAD.plateform_list.map(item => (
                  <a
                    key={item.type}
                    href={item.url.url}
                    className={css({
                      padding: rem(5),
                      display: 'block',
                      margin: `0 ${rem(5)}`,
                      cursor: 'pointer',
                      opacity: 0.666,
                      transition: `opacity 0.3s ${transition.base}`,
                      '&:hover, &:focus, &:active': {
                        opacity: 1,
                      },
                    })}
                  >
                    <Icon type={item.type} size={20} color="light" />
                  </a>
                ))}
            </div>
          </div>
        </div>
        <div
          className={css({
            paddingTop: rem(60),
            display: 'flex',
            [mqOnlyPhone]: {
              flexDirection: 'column',
            },
            [mq[0]]: {
              alignItems: 'center',
              justifyContent: 'space-between',
            },
          })}
        >
          <div
            className={css({
              [mqOnlyPhone]: {
                marginTop: rem(60),
                textAlign: 'center',
              },
            })}
          >
            <Icon type="station" color="light" size={22} />
          </div>
          <div
            className={css({
              [mqOnlyPhone]: {
                marginTop: rem(20),
                order: -1,
              },
              [mq[0]]: {
                display: 'flex',
                alignItems: 'center',
              },
            })}
          >
            {DATA.producthunt_title && DATA.producthunt_subtitle && (
              <div
                className={css({
                  display: 'flex',
                  alignItems: 'center',
                  [mqOnlyPhone]: {
                    justifyContent: 'center',
                  },
                  [mq[0]]: {
                    paddingRight: rem(30),
                  },
                })}
              >
                <div
                  className={css({
                    paddingRight: rem(12),
                    flexGrow: 0,
                  })}
                >
                  <Icon type="cup" color="light" size={23} />
                </div>
                <div>
                  <img
                    src={ProductHunt}
                    alt=""
                    width="70"
                    height="9"
                    className={css({
                      display: 'block',
                    })}
                  />
                  <div
                    className={css({
                      color: color.light,
                      fontSize: rem(12),
                    })}
                  >
                    {DATA.producthunt_subtitle}
                  </div>
                </div>
              </div>
            )}
            {DATA.socials_links && (
              <ul
                className={css({
                  display: 'flex',
                  alignItems: 'center',
                  [mqOnlyPhone]: {
                    marginTop: rem(20),
                    justifyContent: 'center',
                  },
                })}
              >
                {DATA.socials_links.map(item => (
                  <li
                    key={item.type}
                    className={css({
                      '&:not(:first-child)': {
                        marginLeft: rem(10),
                      },
                    })}
                  >
                    <a
                      href={item.url}
                      title={item.type}
                      className={css({
                        display: 'block',
                      })}
                    >
                      <Icon type={item.type} color="light" size={30} />
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </Wrapper>
    </footer>
  );
};

export default Footer;

export const query = graphql`
  fragment FooterData on PrismicFooter {
    data {
      producthunt_subtitle
      column_1_title
      column_2_title
      column_3_title
      column_1_list {
        type
        text
        url
      }
      column_2_list {
        type
        text
        url
        tooltip
      }
      column_3_list {
        type
        text
        url
      }
      socials_links {
        type
        url
      }
    }
  }
`;
