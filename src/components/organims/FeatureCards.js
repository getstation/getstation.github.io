import React from 'react';
import styled from 'react-emotion';
import { rem } from 'polished';
import Wrapper from '../layout/Wrapper';
import { mqMin } from '../../styles/breackpoint';
import { FeatureCardBase, FeatureCardSlider } from '../molecules/FeatureCard';

const gutter = {
  s: 15,
  m: 20,
  l: 25,
};

const Grid = styled('div')`
  > *:not(:first-child) {
    margin-top: ${rem(gutter.m)};
  }
  ${mqMin[0]} {
    display: flex;
    flex-wrap: wrap;
    margin-left: -${rem(gutter.m)};
    margin-right: -${rem(gutter.m)};
    > * {
      margin: ${rem(gutter.m)};
      width: calc(50% - ${rem(gutter.m * 2)});
    }
  }
  ${mqMin[2]} {
    margin-left: -${rem(gutter.l)};
    margin-right: -${rem(gutter.l)};
    > * {
      margin: ${rem(gutter.l)};
      width: calc(33.333% - ${rem(gutter.l * 2)});
    }
  }
`;

const FeatureCards = ({ data, ...rest }) => {
  console.log(data.body);
  return (
    <Wrapper>
      <Grid>
        {data.body.map((item, index) => {
          if (item.slice_type === 'featurecard') {
            return <FeatureCardBase key={index} data={item.primary} />;
          } else if (item.slice_type === 'featureslider') {
            return (
              <FeatureCardSlider
                key={index}
                data={item.primary}
                items={item.items}
              />
            );
          }
        })}
      </Grid>
    </Wrapper>
  );
};

export default FeatureCards;
