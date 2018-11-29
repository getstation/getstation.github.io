import React from 'react';
import styled from 'react-emotion';
import { css } from 'emotion';
import { rem } from 'polished';
import Wrapper from '../layout/Wrapper';
import { mqMin, mqMax } from '../../styles/breackpoint';
import { FeatureCardBase, FeatureCardSlider } from '../molecules/FeatureCard';

const gutter = {
  s: 15,
  m: 30,
  l: 50,
};

const Grid = styled('div')`
  ${mqMin[0]} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: ${rem(gutter.m)};
    grid-auto-flow: row dense;
  }
  ${mqMin[2]} {
    grid-template-columns: repeat(3, 1fr);
    grid-gap: ${rem(gutter.l)};
  }
`;

const GridItem = styled('div')`
  ${mqMax[0]} {
    &:not(:first-child) {
      margin-top: ${rem(gutter.m)};
    }
  }
`;

const FeatureCards = ({ data, ...rest }) => {
  return (
    <Wrapper className={css({ overflow: 'hidden' })}>
      <Grid>
        {data.body.map((item, index) => {
          if (item.slice_type === 'featurecard') {
            return (
              <GridItem key={`${index}-grid-item`}>
                <FeatureCardBase data={item.primary} />
              </GridItem>
            );
          } else if (item.slice_type === 'featureslider') {
            return (
              <GridItem
                key={`${index}-grid-item`}
                css={`
                  ${mqMin[0]} {
                    grid-column: 1 / 3;
                  }
                `}
              >
                <FeatureCardSlider data={item.primary} items={item.items} />
              </GridItem>
            );
          }
        })}
      </Grid>
    </Wrapper>
  );
};

export default FeatureCards;
