import React from 'react';
import styled from 'react-emotion';
import { css } from 'emotion';
import * as font from '../../styles/fonts.js';
import * as color from '../../styles/colors';
import { rem } from 'polished';
import darkGrid from '../../images/dark-grid.svg';
import lightGrid from '../../images/light-grid.svg';
import * as transition from '../../styles/transitions';

const Title = styled('div')`
  font-weight: ${font.weightMedium};
  &:not(:last-child) {
    margin-bottom: ${rem(20)};
  }
`;

const Button = styled('a')`
  display: inline-block;
  border-radius: ${rem(5)};
  padding: ${rem(4)} ${rem(10)};
  border: 1px solid ${color.clr1};
  color: ${color.clr1};
  font-size: ${rem(14)};
  line-height: 1;
  transition: all 0.2s ${transition.base};
  &:hover,
  &:focus {
    background: ${color.clr1};
    color: ${color.light};
    border: 1px solid ${color.clr1};
  }
`;

const Box = styled('div')`
  border-radius: ${rem(8)};
  box-shadow: 0 0 ${rem(1)} 0 rgba(0, 0, 0, 0.2),
    0 ${rem(9)} ${rem(30)} 0 rgba(0, 0, 0, 0.04),
    0 ${rem(4)} ${rem(12)} 0 rgba(0, 0, 0, 0.03);
  background-color: ${color.light};
  transition: transform 0.2s ${transition.base};
  &:hover {
    transform: translateY(${rem(-3)});
  }
`;

const BoxBody = styled('div')`
  padding: ${rem(25)} ${rem(30)};
`;

const Card = ({ title, theme, images, size, ...rest }) => {
  return (
    <Box {...rest}>
      <div
        className={css({
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: rem(140),
          borderRadius: `${rem(8)} ${rem(8)} 0 0`,
          backgroundImage: `url(${theme === 'dark' ? darkGrid : lightGrid})`,
        })}
      >
        {size === 'big' && (
          <div
            className={css({
              height: rem(140),
              width: '100%',
              backgroundImage: `url(${images.svg.url ||
                images.png.url ||
                images.jpg.url})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              borderRadius: `${rem(8)} ${rem(8)} 0 0`,
            })}
          />
        )}
        {size === 'small' && (
          <div
            className={css({
              padding: rem(20),
            })}
          >
            <img
              src={images.svg.url || images.png.url || images.jpg.url}
              alt={title || ''}
            />
          </div>
        )}
      </div>
      <BoxBody>
        {title && <Title>{title}</Title>}
        <div
          className={css({
            margin: rem(-5),
            '> *': {
              margin: rem(5),
            },
          })}
        >
          {images.svg.url && (
            <Button href={images.svg.url} target="_blank">
              SVG
            </Button>
          )}
          {images.png.url && (
            <Button href={images.png.url} target="_blank">
              PNG
            </Button>
          )}
          {images.jpg.url && (
            <Button href={images.jpg.url} target="_blank">
              JPG
            </Button>
          )}
        </div>
      </BoxBody>
    </Box>
  );
};

export default Card;
