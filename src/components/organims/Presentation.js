import React from 'react';
import { rem, rgba } from 'polished';
import { css } from 'emotion';
import slugify from 'slugify';
import styled from 'react-emotion';
import Content from '../molecules/Content';
import Title from '../atoms/Title';
import Wrapper from '../layout/Wrapper';
import { mqMin, mqMax } from '../../styles/breackpoint';
import * as font from '../../styles/fonts';
import * as color from '../../styles/colors';

const ColText = styled('div')`
  ${mqMin[1]} {
    padding: ${rem(200)} 0;
  }
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
    padding: ${rem(60)} 0;
    img {
      width: 100%;
    }
  }
`;

const Subtitle = styled('div')`
  text-transform: uppercase;
  font-weight: ${font.weightBold};
  font-size: ${rem(20)};
`;

const SectionTitle = styled(Title)`
  font-size: ${font.XXL};
  ${[mqMin[2]]} {
    font-size: ${font.XXXL};
  }
  strong {
    display: inline-block;
    position: relative;
    &:after {
      content: '';
      display: block;
      z-index: 1;
      width: 100%;
      height: 0.75em;
      position: absolute;
      opacity: 0.28;
      top: 0.75em;
      left: 0.5em;
      border-radius: ${rem(2)};
      mix-blend-mode: multiply;
    }
  }
`;

const Comet = styled('div')`
  ${mqMax[2]} {
    display: none;
  }
  position: absolute;
  height: ${rem(60)};
  width: ${rem(500)};
  border-radius: ${rem(666)};
  margin-top: ${rem(-60)};
  bottom: ${rem(60)};
  &:before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: ${rem(666)};
  }
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
  overflow: hidden;
  ${mqMax[1]} {
    padding: ${rem(50)} 0;
  }
  &:nth-child(odd) {
    ${ColText} {
      ${mqMin[1]} {
        padding-left: ${rem(30)};
      }
    }
    ${ColImage} {
      order: -1;
      ${mqMin[1]} {
        padding-right: ${rem(30)};
      }
    }
    ${Comet} {
      right: -10vw;
      &:after {
        left: 0;
      }
      &:before {
        background: linear-gradient(
          90deg,
          rgba(255, 255, 255, 0.1),
          rgba(255, 255, 255, 0.95)
        );
      }
    }
  }
  &:nth-child(even) {
    ${ColText} {
      ${mqMin[1]} {
        padding-right: ${rem(30)};
      }
    }
    ${ColImage} {
      ${mqMin[1]} {
        padding-left: ${rem(30)};
      }
    }
    ${Comet} {
      left: -10vw;
      &:after {
        right: 0;
      }
      &:before {
        background: linear-gradient(
          -90deg,
          rgba(255, 255, 255, 0.1),
          rgba(255, 255, 255, 0.95)
        );
      }
    }
  }
  &:nth-child(3n + 1) {
    ${Subtitle} {
      color: ${color.clr2};
    }
    ${SectionTitle} {
      strong:after {
        background: ${color.clr2};
      }
    }
    ${Comet} {
      background: ${rgba(color.clr2, 0.2)};
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
      strong:after {
        background: ${color.clr3};
      }
    }
    ${Comet} {
      background: ${rgba(color.clr3, 0.2)};
      &:after {
        border-color: ${color.clr3};
      }
    }
  }
  &:nth-child(3n + 3) {
    ${Subtitle} {
      color: ${color.clr4};
    }
    ${SectionTitle} {
      strong:after {
        background: ${color.clr4};
      }
    }
    ${Comet} {
      background: ${rgba(color.clr4, 0.2)};
      &:after {
        border-color: ${color.clr4};
      }
    }
  }
`;

const Presentation = ({ data, componentStyle, ...rest }) => {
  return (
    <div {...rest}>
      {data &&
        data.map((item, index) => (
          <Section key={`${index}-${slugify(item.subtitle, { lower: true })}`}>
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
                {item.title.html && (
                  <SectionTitle
                    dangerouslySetInnerHTML={{ __html: item.title.html }}
                  />
                )}
                {item.content && (
                  <Content
                    dangerouslySetInnerHTML={{ __html: item.content.html }}
                    className={css`
                      margin-top: ${rem(20)};
                    `}
                  />
                )}
                <Comet
                  data-aos={index % 2 ? 'fade-right' : 'fade-left'}
                  data-aos-offset="300"
                />
              </ColText>
              <ColImage>
                {item.image.url && (
                  <img
                    src={item.image.url}
                    alt=""
                    data-aos="fade"
                    data-aos-duration="2000"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine"
                    width={item.image.dimensions.width}
                    height={item.image.dimensions.height}
                  />
                )}
              </ColImage>
            </Wrapper>
          </Section>
        ))}
    </div>
  );
};

export default Presentation;
