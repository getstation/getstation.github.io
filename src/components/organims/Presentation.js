import React from 'react';
import { rem } from 'polished';
import { css } from 'emotion';
import styled from 'react-emotion';
import Title from '../atoms/Title';
import Content from '../molecules/Content';
import Wrapper from '../layout/Wrapper';
import { mqMin, mqMax } from '../../styles/breackpoint';
import * as font from '../../styles/fonts';
import * as color from '../../styles/colors';
import pattern1 from '../../images/pattern-form1.png';

const ColText = styled('div')`
  ${mqMin[1]} {
    position: relative;
    z-index: 1;
    width: 50%;
  }
`;

const ColImage = styled('div')`
  position: relative;
  ${mqMax[1]} {
    margin-top: ${rem(30)};
  }
  ${mqMin[1]} {
    width: 50%;
    img {
      width: 100%;
    }
    &::before {
      content: '';
      display: block;
      width: 70%;
      position: absolute;
      top: 0;
      bottom: 0;
      right: -20%;
      background-image: linear-gradient(
        -90deg,
        #ffffff 77%,
        rgba(0, 0, 0, 0) 100%
      );
    }
  }
`;

const ColImageInner = styled('div')`
  ${mqMin[1]} {
    margin-right: -20%;
  }
`;

const Subtitle = styled('div')`
  text-transform: uppercase;
  font-weight: ${font.weightBold};
  font-size: ${rem(20)};
`;

const Section = styled('div')`
  margin-top: ${rem(100)};
  ${mqMin[1]} {
    margin-top: ${rem(150)};
  }
  &:nth-child(2n + 1) {
    ${ColImage} {
      order: -1;
    }
  }
  &:nth-child(3n + 1) {
    ${Subtitle} {
      color: ${color.clr2};
    }
  }
  &:nth-child(3n + 2) {
    ${Subtitle} {
      color: ${color.clr3};
    }
  }
  &:nth-child(3n + 3) {
    ${Subtitle} {
      color: ${color.clr4};
    }
  }
`;

const Presentation = ({ data, ...rest }) => {
  return (
    <div {...rest}>
      {data &&
        data.map(item => (
          <Section key={item.title}>
            <Wrapper
              className={css({
                [mqMin[1]]: {
                  display: 'flex',
                  alignItems: 'center',
                  overflow: 'hidden',
                },
              })}
            >
              <ColText>
                {item.subtitle && <Subtitle>{item.subtitle}</Subtitle>}
                {item.title && (
                  <Title
                    className={css({
                      fontSize: font.XXL,
                      [[mqMin[2]]]: {
                        fontSize: font.XXXL,
                      },
                    })}
                  >
                    {item.title}
                  </Title>
                )}
                {item.content && (
                  <Content
                    dangerouslySetInnerHTML={{ __html: item.content.html }}
                    className={css`
                      margin-top: ${rem(20)};
                    `}
                  />
                )}
              </ColText>
              <ColImage>
                <ColImageInner>
                  <img
                    src={item.image.url}
                    alt=""
                    width={item.image.dimensions.width}
                    height={item.image.dimensions.height}
                  />
                </ColImageInner>
              </ColImage>
            </Wrapper>
          </Section>
        ))}
    </div>
  );
};

export default Presentation;
