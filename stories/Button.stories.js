import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import Button from '../src/components/atoms/Button';

storiesOf('Atom|Button', module)
  .add('a tag', () => (
    <Button
      to={text('to', 'http://sutterlity.fr')}
      disabled={boolean('disabled', false)}
    >
      {text('children', 'My button')}
    </Button>
  ))
  .add('button tag', () => (
    <Button
      element="button"
      disabled={boolean('disabled', false)}
      onClick={action('onClick')}
    >
      {text('children', 'My button')}
    </Button>
  ));
