import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean } from '@storybook/addon-knobs';
import Link from '../src/components/atoms/Link';

storiesOf('Atom|Link', module).add('base', () => (
  <Link
    to={text('to', 'http://sutterlity.fr')}
    disabled={boolean('disabled', false)}
  >
    {text('children', 'Laurent Sutterlity')}
  </Link>
));
