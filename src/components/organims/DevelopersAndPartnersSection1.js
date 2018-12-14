import React from 'react';
import styled from 'react-emotion';
import slugify from 'slugify';
import { rem } from 'polished';
import Status from '../atoms/Status';
import TextBigger from '../atoms/TextBigger';
import Wrapper from '../layout/Wrapper';
import SectionButtons from '../molecules/SectionButtons';
import { mqMin } from '../../styles/breackpoint';
import * as color from '../../styles/colors';

const Box = styled('div')`
  padding: ${rem(60)} 0;
  ${mqMin[1]} {
    padding: ${rem(100)} 0;
  }
`;

const Grid = styled('div')`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: ${rem(60)};
  ${mqMin[0]} {
    grid-template-columns: repeat(2, 1fr);
  }
  ${mqMin[2]} {
    grid-template-columns: repeat(4, 1fr);
  }
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

const CardBox = styled('div')`
  text-align: center;
`;

const CardThumb = styled('div')`
  position: relative;
  &:not(:last-child) {
    margin-bottom: ${rem(20)};
  }
`;

const Img = styled('img')`
  position: relative;
`;

const Shape = styled('img')`
  position: absolute;
`;

const CardTitle = styled('p')`
  &:not(:last-child) {
    margin-bottom: ${rem(20)};
  }
`;

const CardSubtitle = styled('p')`
  font-size: ${rem(13)};
  color: ${color.neutralLight};
`;

const Card = ({ title, subtitle, tag, image, shape, ...rest }) => (
  <CardBox {...rest}>
    <CardThumb>
      {shape && (
        <Shape
          src={shape.url}
          alt=""
          width={shape.dimensions.width}
          height={shape.dimensions.height}
        />
      )}
      {image && (
        <Img
          src={image.url}
          alt=""
          width={image.dimensions.width}
          height={image.dimensions.height}
        />
      )}
    </CardThumb>
    {title && <CardTitle>{title}</CardTitle>}
    {subtitle && <CardSubtitle>{subtitle}</CardSubtitle>}
    {tag && <Status>{tag}</Status>}
  </CardBox>
);

const DevelopersAndPartnersSection1 = ({ title, items, buttons, ...rest }) => {
  return (
    <Box {...rest}>
      <Wrapper>
        {title && <TextBigger>{title}</TextBigger>}
        {items && (
          <Grid>
            {items.map((item, index) => (
              <Card
                key={`${index}-${slugify(item.title, { lower: true })}`}
                title={item.title}
                subtitle={item.subtitle}
                tag={item.tag}
                shape={item.shape}
                image={item.image}
              />
            ))}
          </Grid>
        )}
        {buttons && <SectionButtons data={buttons} />}
      </Wrapper>
    </Box>
  );
};

export default DevelopersAndPartnersSection1;
