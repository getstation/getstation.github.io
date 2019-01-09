import React from 'react';
import styled from 'react-emotion';
import { css } from 'emotion';
import { rem } from 'polished';
import Title from '../atoms/Title';
import Wrapper from '../layout/Wrapper';
import { mqMin } from '../../styles/breackpoint';
import * as font from '../../styles/fonts';
import * as color from '../../styles/colors';

export const Themes = {
  dark: {
    color: color.neutralDark,
  },
  light: {
    color: color.light,
  },
};

const Header = styled('div')`
  text-align: center;
  margin-bottom: ${rem(60)};
  ${mqMin[1]} {
    margin-bottom: ${rem(80)};
  }
`;

const Line = styled('div')`
  display: inline-block;
  width: ${rem(87)};
  height: ${rem(3)};
  border-radius: ${rem(666)};
  background-color: ${color.clr4};
`;

const SectionTitle = ({ children, element, theme, ...rest }) => (
  <Header {...rest}>
    <Wrapper>
      <Title
        element={element}
        className={css({
          fontSize: font.XXL,
          ...Themes[theme],
          [[mqMin[1]]]: {
            fontSize: rem(34),
          },
        })}
      >
        {children}
      </Title>
      <Line
        data-aos="flip-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
      />
    </Wrapper>
  </Header>
);

SectionTitle.defaultProps = {
  theme: 'dark',
  element: 'h2',
};

export default SectionTitle;
