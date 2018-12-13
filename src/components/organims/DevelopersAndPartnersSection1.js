import React from 'react';
import styled from 'react-emotion';
import { css } from 'emotion';
import { rem } from 'polished';
import Wrapper from '../layout/Wrapper';
import { mqMin } from '../../styles/breackpoint';
import * as font from '../../styles/fonts';
import * as color from '../../styles/colors';

const Box = styled('div')`
  padding: ${rem(60)} 0;
  ${mqMin[1]} {
    padding: ${rem(100)} 0;
  }
`;

const Title = styled('div')`
  text-align: center;
  max-width: ${rem(670)};
  margin: 0 auto;
  color: ${color.neutralLight};
  font-size: ${rem(16)};
  ${mqMin[0]} {
    font-size: ${rem(18)};
  }
  ${mqMin[1]} {
    font-size: ${rem(20)};
  }
`;

const DevelopersAndPartnersSection1 = ({ title, ...rest }) => {
  return (
    <Box {...rest}>
      <Wrapper>{title && <Title>{title}</Title>}</Wrapper>
    </Box>
  );
};

export default DevelopersAndPartnersSection1;
