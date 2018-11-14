import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, select } from '@storybook/addon-knobs';
import Title, { elements } from '../src/components/atoms/Title';

storiesOf('Atom|Title', module).add('base', () => (
  <Title
    style={{ fontSize: 24 }}
    element={select('element', elements, elements[0])}
  >
    {text('children', 'Laurent Sutterlity')}
  </Title>
));
