import React from 'react';
import { css } from 'emotion';
import { rem } from 'polished';
import Link from '../atoms/Link';

const Footer = () => (
  <footer
    className={css({
      padding: rem('20px'),
    })}
  >
    Made by{' '}
    <Link to="http://sutterlity.fr" target="_blank">
      Laurent Sutterlity
    </Link>
  </footer>
);

export default Footer;
