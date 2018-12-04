import React from 'react';
import styled from 'react-emotion';
import { css } from 'emotion';
import { rem } from 'polished';
import Title from '../atoms/Title';
import SectionTitle from './sectionTitle';
import Wrapper from '../layout/Wrapper';
import { mqMin } from '../../styles/breackpoint';
import * as font from '../../styles/fonts';

const Box = styled('div')`
  padding: ${rem(60)} 0;
  ${mqMin[1]} {
    padding: ${rem(100)} 0;
  }
`;

const Footer = styled('div')`
  text-align: center;
  margin-top: ${rem(60)};
  ${mqMin[1]} {
    margin-top: ${rem(100)};
  }
`;

const SectionBase = ({ title, footer, children, ...rest }) => {
  return (
    <Box {...rest}>
      <Wrapper>{title && <SectionTitle>{title}</SectionTitle>}</Wrapper>
      {children && children}
      {footer && (
        <Wrapper>
          <Footer>{footer}</Footer>
        </Wrapper>
      )}
    </Box>
  );
};

export default SectionBase;
