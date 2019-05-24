import React from 'react';
import { rem } from 'polished';
import styled from 'react-emotion';

const Section = styled('div')`
  padding: ${rem(160)} 0 ${rem(100)};
  text-align: center;
  flex-grow: 1;
  display: flex;
  align-items: center;
  min-height: 100vh;
  background-position: center bottom;
  background-repeat: no-repeat;
  background-size: 100% auto;
`;

export default Section;
