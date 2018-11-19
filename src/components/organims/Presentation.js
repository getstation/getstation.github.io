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

const ColText = styled('div')``;
const ColImage = styled('div')`
  ${mqMax[1]} {
    margin-top: ${rem(30)};
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
    margin-top: ${rem(180)};
  }
  &:nth-child(2n + 1) {
    ${ColImage} {
      order: -1;
    }
  }
  &:nth-child(3n + 1) {
    ${Subtitle} {
      color: ${color.clr1};
    }
  }
  &:nth-child(3n + 2) {
    ${Subtitle} {
      color: ${color.clr2};
    }
  }
  &:nth-child(3n + 3) {
    ${Subtitle} {
      color: ${color.clr3};
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
                <img
                  src={item.image.url}
                  alt=""
                  width={item.image.dimensions.width}
                  height={item.image.dimensions.height}
                />
              </ColImage>
            </Wrapper>
          </Section>
        ))}
    </div>
  );
};

export default Presentation;
