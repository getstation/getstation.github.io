import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean, select } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import Button, { Sizes, Themes } from '../src/components/atoms/Button';

const buttonProps = () => ({
  theme: select('theme', Object.keys(Themes), Object.keys(Themes)[0]),
  size: select('size', Object.keys(Sizes), Object.keys(Sizes)[0]),
  children: text('children', 'Download'),
  disabled: boolean('disabled', false),
});

storiesOf('Atom|Button', module)
  .add('a tag', () => (
    <Button to={text('to', 'http://sutterlity.fr')} {...buttonProps()} />
  ))
  .add('button tag', () => (
    <Button element="button" {...buttonProps()} onClick={action('onClick')} />
  ));
