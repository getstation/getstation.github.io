import React from 'react';
import styled from 'react-emotion';
import { Link } from 'gatsby';
import { css } from 'emotion';
import { rem } from 'polished';
import Lottie from 'react-lottie';
import Title from '../atoms/Title';
import Button from '../atoms/Button';
import Wrapper from '../layout/Wrapper';
import * as font from '../../styles/fonts';
import { mqMin, mqMax } from '../../styles/breackpoint';
import * as color from '../../styles/colors';

const BoxBody = styled('div')`
  ${mqMin[1]} {
    flex-grow: 1;
    padding: 0 ${rem(30)};
  }
  &:not(:last-child) {
    margin-bottom: ${rem(30)};
  }
`;

const Box = styled('div')`
  text-align: center;
  ${mqMax[1]} {
    &:not(:first-child) {
      margin-top: ${rem(60)};
    }
  }
  ${mqMin[1]} {
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    width: 50%;
    padding: ${rem(30)} 0;
    &:nth-child(even) {
      ${BoxBody} {
        border-left: 1px solid ${color.neutralLighter};
      }
    }
  }
`;

const Content = styled('p')`
  ${mqMax[1]} {
    font-size: ${font.S};
  }
  max-width: ${rem(300)};
  margin-left: auto;
  margin-right: auto;
  color: ${color.neutralLight};
  line-height: ${font.lineHeightXL};
`;

const iconSwitcher = type => {
  switch (type) {
    case 'star':
      return (
        <Lottie
          options={{
            loop: true,
            autoplay: true,
            animationData: require('../../animations/star.json'),
          }}
          height={45}
          width={45}
        />
      );
    case 'lego':
      return (
        <Lottie
          options={{
            loop: true,
            autoplay: true,
            animationData: require('../../animations/lego-build.json'),
          }}
          height={80}
          width={80}
        />
      );
  }
};

const Icon = styled('div')`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  height: ${rem(80)};
  &:not(:last-child) {
    margin-bottom: ${rem(20)};
  }
`;

const Grid = styled('div')`
  ${mqMin[1]} {
    display: flex;
    flex-wrap: wrap;
  }
`;

const FeatureMore = ({ data, ...rest }) => {
  return (
    <Wrapper
      className={css({
        paddingBottom: rem(30),
        [[mqMin[1]]]: {
          paddingBottom: rem(70),
        },
      })}
      {...rest}
    >
      {data && (
        <Grid>
          {data.map((item, index) => (
            <Box
              key={`feature-more-${index}`}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {item.icon && <Icon>{iconSwitcher(item.icon)}</Icon>}
              <BoxBody>
                {item.title1 && (
                  <Title
                    element="h2"
                    className={css({
                      fontSize: font.XXL,
                      [[mqMin[1]]]: {
                        fontSize: font.XXXL,
                      },
                      '&:not(:last-child)': {
                        marginBottom: rem(5),
                      },
                    })}
                  >
                    {item.title1}
                  </Title>
                )}
                {item.content && <Content>{item.content}</Content>}
              </BoxBody>
              {item.button_text && item.button_url && (
                <Button
                  to={item.button_url}
                  theme="ghost"
                  element={item.button_type === 'internal' ? Link : 'a'}
                  data-aos="zoom-in"
                >
                  {item.button_text}
                </Button>
              )}
            </Box>
          ))}
        </Grid>
      )}
    </Wrapper>
  );
};

export default FeatureMore;
