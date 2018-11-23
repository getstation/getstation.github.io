import React from 'react';
import styled from 'react-emotion';
import { css } from 'emotion';
import { rem } from 'polished';
import Title from '../atoms/Title';
import Wrapper from '../layout/Wrapper';
import { mqMin } from '../../styles/breackpoint';
import * as font from '../../styles/fonts';
import * as color from '../../styles/colors';

const Box = styled('div')`
  text-align: center;
  padding: ${rem(60)} 0;
  ${mqMin[1]} {
    padding: ${rem(100)} 0;
  }
`;

const Header = styled('div')`
  margin-bottom: ${rem(60)};
  ${mqMin[1]} {
    margin-bottom: ${rem(100)};
  }
`;

const Footer = styled('div')`
  margin-top: ${rem(60)};
  ${mqMin[1]} {
    margin-top: ${rem(100)};
  }
`;

const Line = styled('div')`
  display: inline-block;
  width: ${rem(87)};
  height: ${rem(3)};
  border-radius: ${rem(666)};
  background-color: ${color.clr4};
`;

const SectionBase = ({ title, footer, children, ...rest }) => {
  return (
    <Box {...rest}>
      <Wrapper>
        {title && (
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
              {title}
            </Title>
            <Line />
          </Header>
        )}
      </Wrapper>
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
