import React from 'react';
import styled from 'react-emotion';
import { css } from 'emotion';
import slugify from 'slugify';
import { rem } from 'polished';
import Title from '../atoms/Title';
import TextBigger from '../atoms/TextBigger';
import Wrapper from '../layout/Wrapper';
import SectionButtons from '../molecules/SectionButtons';
import { mqMin } from '../../styles/breackpoint';
import * as color from '../../styles/colors';
import * as font from '../../styles/fonts';
import quoteImg from '../../images/quote.svg';

const Box = styled('div')`
  text-align: center;
  padding: ${rem(60)} 0;
  background-image: linear-gradient(0deg, #f5fbff 1%, #ffffff 100%);
  ${mqMin[1]} {
    padding: ${rem(100)} 0;
  }
`;

const Quote = styled('div')`
  position: relative;
  display: inline-block;
  padding: 0 ${rem(50)};
  margin: 0 auto;
  color: ${color.neutralLight};
  font-size: ${rem(16)};
  &:not(:first-child) {
    margin-top: ${rem(40)};
  }
  ${mqMin[0]} {
    font-size: ${rem(18)};
  }
  ${mqMin[1]} {
    font-size: ${rem(20)};
  }
  &::before,
  &::after {
    position: absolute;
    content: '';
    display: block;
    width: ${rem(28)};
    height: ${rem(18)};
    background: transparent url(${quoteImg}) center no-repeat;
  }
  &::before {
    top: 0;
    left: 0;
  }
  &::after {
    top: 0;
    right: 0;
    transform: rotate(180deg);
  }
`;

const Grid = styled('div')`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  &:not(:first-child) {
    margin-top: ${rem(60)};
    ${mqMin[1]} {
      margin-top: ${rem(100)};
    }
  }
  &:not(:last-child) {
    margin-bottom: ${rem(60)};
    ${mqMin[1]} {
      margin-bottom: ${rem(100)};
    }
  }
`;

const Card = styled('div')`
  padding: ${rem(30)};
  text-align: center;
`;

const CardImg = styled('div')`
  height: ${rem(100)};
`;

const CardTitle = styled('div')`
  color: ${color.neutral};
  font-size: ${rem(16)};
  font-weight: ${font.weightMedium};
  ${mqMin[0]} {
    font-size: ${rem(18)};
  }
  ${mqMin[1]} {
    font-size: ${rem(22)};
  }
  &:not(:first-child) {
    margin-top: ${rem(30)};
  }
`;

const DevelopersAndPartnersSection2 = ({
  title,
  items,
  quote,
  text,
  buttons,
  ...rest
}) => {
  return (
    <Box {...rest}>
      <Wrapper>
        {title && (
          <Title
            element={'h2'}
            className={css({
              fontSize: font.XXL,
              textAlign: 'center',
              [[mqMin[1]]]: {
                fontSize: rem(34),
              },
            })}
          >
            {title}
          </Title>
        )}
        {quote.text && quote.author && (
          <Quote>
            <p>{quote.text}</p> <p>—&nbsp;{quote.author}</p>
          </Quote>
        )}
        {items && (
          <Grid>
            {items.map((item, index) => (
              <Card key={`${index}-${slugify(item.title, { lower: true })}`}>
                <CardImg>
                  <img
                    src={item.image.url}
                    width={item.image.dimensions.width}
                    height={item.image.dimensions.height}
                    alt=""
                  />
                </CardImg>
                <CardTitle>{item.title}</CardTitle>
              </Card>
            ))}
          </Grid>
        )}
        {text && <TextBigger>{text}</TextBigger>}
        {buttons && <SectionButtons data={buttons} />}
      </Wrapper>
    </Box>
  );
};

export default DevelopersAndPartnersSection2;
