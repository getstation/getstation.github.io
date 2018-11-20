import React from 'react';
import { rem, rgba } from 'polished';
import { css } from 'emotion';
import styled from 'react-emotion';
import Title from '../atoms/Title';
import Content from '../molecules/Content';
import Wrapper from '../layout/Wrapper';
import { mqMin, mqMax } from '../../styles/breackpoint';
import * as font from '../../styles/fonts';
import * as color from '../../styles/colors';

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
    order: 666 !important;
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

const SectionTitle = styled(Title)`
  display: inline-block;
  position: relative;
  font-size: ${font.XXL};
  ${[mqMin[2]]} {
    font-size: ${font.XXXL};
  }
  &:after {
    content: '';
    display: block;
    width: ${rem(170)};
    height: ${rem(26)};
    position: absolute;
    opacity: 0.28;
    top: ${rem(18)};
    right: ${rem(-30)};
    border-radius: ${rem(2)};
    ${[mqMin[1]]} {
      top: ${rem(18)};
      right: ${rem(33)};
      height: ${rem(28)};
    }
    ${[mqMin[2]]} {
      top: ${rem(22)};
      height: ${rem(30)};
    }
  }
`;

const Comet = styled('div')`
  ${mqMax[2]} {
    display: none;
  }
  position: relative;
  height: ${rem(60)};
  width: ${rem(500)};
  border-radius: ${rem(666)};
  margin-top: ${rem(-60)};
  transform: translateX(20vw) translateY(${rem(160)});
  &:after {
    content: '';
    display: block;
    width: ${rem(60)};
    height: ${rem(60)};
    border: 4px solid;
    border-radius: ${rem(666)};
    position: absolute;
    top: 0;
    opacity: 0.8;
  }
`;

const Section = styled('div')`
  padding: ${rem(50)} 0;
  overflow: hidden;
  ${mqMin[1]} {
    padding: ${rem(100)} 0;
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
    ${SectionTitle} {
      &:after {
        background: ${color.clr2};
      }
    }
    ${Comet} {
      background: ${rgba(color.clr2, 0.3)};
      &:after {
        border-color: ${color.clr2};
      }
    }
  }
  &:nth-child(3n + 2) {
    ${Subtitle} {
      color: ${color.clr3};
    }
    ${SectionTitle} {
      &:after {
        background: ${color.clr3};
      }
    }
    ${Comet} {
      background: ${rgba(color.clr3, 0.3)};
      transform: translateX(-10vw) translateY(${rem(160)});
      &:after {
        border-color: ${color.clr3};
        right: 0;
      }
    }
  }
  &:nth-child(3n + 3) {
    ${Subtitle} {
      color: ${color.clr4};
    }
    ${SectionTitle} {
      &:after {
        background: ${color.clr4};
      }
    }
    ${Comet} {
      background: ${rgba(color.clr4, 0.3)};
      &:after {
        border-color: ${color.clr4};
      }
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
                display: 'flex',
                flexDirection: 'column',
                [mqMin[1]]: {
                  flexDirection: 'row',
                  alignItems: 'center',
                },
              })}
            >
              <ColText>
                {item.subtitle && <Subtitle>{item.subtitle}</Subtitle>}
                {item.title && (
                  <SectionTitle>
                    <div
                      className={css({
                        position: 'relative',
                        zIndex: 1,
                      })}
                    >
                      {item.title}
                    </div>
                  </SectionTitle>
                )}
                {item.content && (
                  <Content
                    dangerouslySetInnerHTML={{ __html: item.content.html }}
                    className={css`
                      margin-top: ${rem(20)};
                    `}
                  />
                )}
                <Comet />
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
