import React from 'react';
import { css, cx } from 'emotion';
import { rem, rgba } from 'polished';
import FooterLink from '../../components/atoms/LinkFooter';
import Tooltip from '../../components/atoms/Tooltip';
import Icon from '../../components/atoms/Icon';
import Wrapper from '../layout/Wrapper';
import DownloadApp from '../organims/DownloadApp';
import * as font from '../../styles/fonts';
import * as color from '../../styles/colors';
import * as transition from '../../styles/transitions';
import { mqMin, mqMax } from '../../styles/breackpoint';

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
          transform: `translateY(${rem(2)})`,
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
          [mqMax[0]]: {
            '&:not(:first-child)': {
              marginTop: rem(30),
            },
          },
          [mqMin[0]]: {
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
          {list.map((item, index) => (
            <Item key={`${index}-footer-list`} {...item} />
          ))}
        </ul>
      )}
    </div>
  );
};

const Footer = ({ footer, download, ...rest }) => {
  const DATA = footer.data;
  return (
    <footer
      className={css({
        padding: `${rem(40)} 0 ${rem(40)}`,
        background: `linear-gradient(to top, ${DATA.gradient_bottom ||
          '#130cb7'},  ${DATA.gradient_top || '#52e5e7'})`,
        [mqMin[0]]: {
          padding: `${rem(100)} 0 ${rem(40)}`,
        },
      })}
      {...rest}
    >
      <Wrapper>
        <div
          className={css({
            [mqMin[1]]: {
              display: 'flex',
            },
          })}
        >
          <div
            className={css({
              [mqMin[0]]: {
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
              [mqMin[1]]: {
                marginTop: 0,
                paddingTop: 0,
                borderTop: 'none',
                borderLeft: `1px solid ${rgba(color.light, 0.2)}`,
                flexShrink: 0,
                width: '33.333%',
              },
            })}
          >
            <DownloadApp
              data={download}
              theme="light"
              className={DATA.download_tracking_class}
            />
          </div>
        </div>
        <div
          className={css({
            paddingTop: rem(60),
            display: 'flex',
            [mqMax[0]]: {
              flexDirection: 'column',
            },
            [mqMin[0]]: {
              alignItems: 'center',
              justifyContent: 'space-between',
            },
          })}
        >
          <div
            className={css({
              [mqMax[0]]: {
                marginTop: rem(60),
                textAlign: 'center',
              },
            })}
          >
            <Icon type="station" color="light" size={22} />
          </div>
          <div
            className={css({
              [mqMax[0]]: {
                marginTop: rem(20),
                order: -1,
              },
              [mqMin[0]]: {
                display: 'flex',
                alignItems: 'center',
              },
            })}
          >
            {DATA.reward_title && DATA.reward_url && (
              <a
                href={DATA.reward_url}
                target="_blank"
                className={css({
                  display: 'flex',
                  alignItems: 'center',
                  transition: `transform .2s ${transition.base}`,
                  '&:hover': {
                    transform: `translateY(${rem(-2)})`,
                  },
                  [mqMax[0]]: {
                    justifyContent: 'center',
                  },
                  [mqMin[0]]: {
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
                  <Icon
                    type="cup"
                    color="light"
                    size={23}
                    className={css({ display: 'block' })}
                  />
                </div>
                <div>
                  {DATA.reward_title && (
                    <div
                      className={css({
                        color: color.light,
                        fontSize: rem(12),
                        fontWeight: font.weightBold,
                        lineHeight: 1.1,
                      })}
                    >
                      {DATA.reward_title}
                    </div>
                  )}
                  {DATA.reward_subtitle && (
                    <div
                      className={css({
                        lineHeight: 1.1,
                        color: color.light,
                        fontSize: rem(12),
                      })}
                    >
                      {DATA.reward_subtitle}
                    </div>
                  )}
                </div>
              </a>
            )}
            {DATA.socials_links && (
              <ul
                className={css({
                  display: 'flex',
                  alignItems: 'center',
                  [mqMax[0]]: {
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
                      target="_blank"
                      href={item.url}
                      title={item.type}
                      className={css({
                        display: 'block',
                        transition: `transform .2s ${transition.base}`,
                        '&:hover': {
                          transform: `translateY(${rem(-2)})`,
                        },
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
