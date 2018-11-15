import React from 'react';
import { css } from 'emotion';
import { graphql } from 'gatsby';
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

const Header = ({ header, ...rest }) => {
  const data = header.data;
  return (
    <header
      className={css({
        padding: rem('20px'),
      })}
      {...rest}
    >
      <Wrapper
        className={css({
          [mq[1]]: {
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
          {data.link_1_text && (
            <Link className={navLink} to="/">
              {data.link_1_text}
            </Link>
          )}
          {data.link_2_text && (
            <Link className={navLink} to="/">
              {data.link_2_text}
            </Link>
          )}
          {data.link_3_text && (
            <Link className={navLink} to="/">
              {data.link_3_text}
            </Link>
          )}
          {data.download_text && data.download_url && (
            <Button to={data.download_url.url}>{data.download_text}</Button>
          )}
        </div>
      </Wrapper>
    </header>
  );
};

export default Header;

export const query = graphql`
  fragment HeaderData on PrismicHeader {
    data {
      link_1_text
      link_2_text
      link_3_text
      download_text
      download_url {
        url
      }
    }
  }
`;
