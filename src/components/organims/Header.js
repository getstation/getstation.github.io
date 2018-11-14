import React from 'react';
import { css } from 'emotion';
import { Link } from 'gatsby';
import { rem } from 'polished';

const Header = () => (
  <header
    className={css({
      padding: rem('20px'),
    })}
  >
    <Link to="/">Header</Link>
  </header>
);

export default Header;
