import React from 'react';
import { css } from 'emotion';
import { graphql } from 'gatsby';
import { Link } from 'gatsby';
import { rem } from 'polished';
import Logo from '../../images/logo-station-blue.svg';

const Header = ({ header, ...rest }) => {
  const data = header.data;
  return (
    <header
      className={css({
        padding: rem('20px'),
      })}
      {...rest}
    >
      <h1>
        <Link to="/">
          <img src={Logo} alt="Station" width="100" height="28" />
        </Link>
      </h1>
      {data.link_1_text && <Link to="/">{data.link_1_text}</Link>}
      {data.link_2_text && <Link to="/">{data.link_2_text}</Link>}
      {data.link_3_text && <Link to="/">{data.link_3_text}</Link>}
      {data.download_text && data.download_url && (
        <a href={data.download_url.url}>{data.download_text}</a>
      )}
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
