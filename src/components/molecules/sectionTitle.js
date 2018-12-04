import React from 'react';
import styled from 'react-emotion';
import { css } from 'emotion';
import { rem } from 'polished';
import Title from '../atoms/Title';
import Wrapper from '../layout/Wrapper';
import { mqMin } from '../../styles/breackpoint';
import * as font from '../../styles/fonts';
import * as color from '../../styles/colors';

const Header = styled('div')`
  text-align: center;
  margin-bottom: ${rem(60)};
  ${mqMin[1]} {
    margin-bottom: ${rem(100)};
  }
`;

const Line = styled('div')`
  display: inline-block;
  width: ${rem(87)};
  height: ${rem(3)};
  border-radius: ${rem(666)};
  background-color: ${color.clr4};
`;

const SectionTitle = ({ children }) => (
  <Header>
    <Title
      element="h2"
      className={css({
        fontSize: font.XXL,
        [[mqMin[1]]]: {
          fontSize: rem(34),
        },
      })}
    >
      {children}
    </Title>
    <Line />
  </Header>
);

export default SectionTitle;
