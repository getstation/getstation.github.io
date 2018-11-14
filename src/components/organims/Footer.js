import React from 'react';
import { css } from 'emotion';
import { rem } from 'polished';
import { Link as GatsbyLink } from 'gatsby';
import Link from '../atoms/Link';
import Button from '../atoms/Button';

const Item = ({ type, text, url, tooltip, ...rest }) => (
  <li {...rest}>
    {type === 'external' && (
      <Link to={url} target="_blank">
        {text}
      </Link>
    )}
    {type === 'internal' && (
      <Link element={GatsbyLink} to={url}>
        {text}
      </Link>
    )}
  </li>
);

const Col = ({ title, list, ...rest }) => {
  return (
    <div {...rest}>
      <div>{title}</div>
      {list && list.map(item => <Item key={item.text} {...item} />)}
    </div>
  );
};

const Footer = ({ footer, ...rest }) => {
  const data = footer.data;
  return (
    <footer
      className={css({
        padding: rem('20px'),
      })}
      {...rest}
    >
      {data.column_1_title && (
        <Col title={data.column_1_title} list={data.column_1_list} />
      )}
      {data.column_2_title && (
        <Col title={data.column_2_title} list={data.column_2_list} />
      )}
      {data.column_3_title && (
        <Col title={data.column_3_title} list={data.column_3_list} />
      )}
      {data.download_text && data.download_url && (
        <Button to={data.download_url.url}>{data.download_text}</Button>
      )}
      {data.download_link &&
        data.download_link.map(item => (
          <a key={item.type} href={item.url.url}>
            {item.type}
          </a>
        ))}
      {data.producthunt_title && data.producthunt_subtitle && (
        <div>
          <div>{data.producthunt_title}</div>
          <div>{data.producthunt_subtitle}</div>
        </div>
      )}
      {data.socials_links && (
        <ul>
          {data.socials_links.map(item => (
            <li key={item.type}>
              <a href={item.url}>{item.type}</a>
            </li>
          ))}
        </ul>
      )}
    </footer>
  );
};

export default Footer;

export const query = graphql`
  fragment FooterData on PrismicFooter {
    data {
      download_text
      download_url {
        url
      }
      producthunt_title
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
      download_link {
        type
        url {
          url
        }
      }
    }
  }
`;
