import React from 'react';
import { css } from 'emotion';
import { graphql } from 'gatsby';
import { Link } from 'gatsby';
import { rem } from 'polished';

const Header = ({ header, ...rest }) => {
  const data = header.data;
  return (
    <header
      className={css({
        padding: rem('20px'),
      })}
      {...rest}
    >
      <Link to="/">Logo</Link>
      {data.link_1_text && <Link to="/">{data.link_1_text}</Link>}
      {data.link_2_text && <Link to="/">{data.link_2_text}</Link>}
      {data.link_3_text && <Link to="/">{data.link_3_text}</Link>}
      {data.download_text && data.download_link && (
        <a href={data.download_link.url}>{data.download_text}</a>
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
