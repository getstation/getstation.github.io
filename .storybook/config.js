import React from 'react';
import { addDecorator, configure } from '@storybook/react';
import { withOptions } from '@storybook/addon-options';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';
import '../src/styles/global';

addDecorator(
  withOptions({
    hierarchyRootSeparator: /\|/,
  }),
);

addDecorator(withKnobs);
addDecorator(withInfo);

addDecorator(story => (
  <div
    style={{
      padding: 40,
    }}
  >
    {story()}
  </div>
));

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /.stories.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
