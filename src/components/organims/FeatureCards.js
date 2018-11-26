import React from 'react';
import styled from 'react-emotion';
import { css } from 'emotion';
import { rem } from 'polished';
import Wrapper from '../layout/Wrapper';
import { mqMin, mqMax } from '../../styles/breackpoint';
import { FeatureCardBase, FeatureCardSlider } from '../molecules/FeatureCard';

const gutter = {
  s: 15,
  m: 20,
  l: 25,
};

const Grid = styled('div')`
  ${mqMin[0]} {
    display: flex;
    flex-wrap: wrap;
    margin-left: -${rem(gutter.m)};
    margin-right: -${rem(gutter.m)};
    > * {
      padding: ${rem(gutter.m)};
    }
  }
  ${mqMin[2]} {
    margin-left: -${rem(gutter.l)};
    margin-right: -${rem(gutter.l)};
    > * {
      padding: ${rem(gutter.l)};
    }
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
              <GridItem
                key={`${index}-grid-item`}
                css={`
                  ${mqMin[0]} {
                    width: 50%;
                  }
                  ${mqMin[2]} {
                    width: 33.333%;
                  }
                `}
              >
                <FeatureCardBase data={item.primary} />
              </GridItem>
            );
          } else if (item.slice_type === 'featureslider') {
            return (
              <GridItem
                key={`${index}-grid-item`}
                css={`
                  ${mqMin[0]} {
                    width: 100%;
                  }
                  ${mqMin[2]} {
                    width: 66.666%;
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
