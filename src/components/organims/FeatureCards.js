import React from 'react';
import styled from 'react-emotion';
import { css } from 'emotion';
import { rem } from 'polished';
import Wrapper from '../layout/Wrapper';
import { mqMin, mqMax } from '../../styles/breackpoint';
import SectionBase from '../molecules/SectionBase';
import { FeatureCardBase, FeatureCardSlider } from '../molecules/FeatureCard';
import Tag from '../atoms/Tag';
import Button from '../atoms/Button';
import { isMobile, CustomView } from 'react-device-detect';

const gutter = {
  s: 15,
  m: 30,
  l: 50,
};

const Grid = styled('div')`
  padding-top: ${rem(60)};
  ${mqMin[0]} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: ${rem(gutter.m)};
    grid-auto-flow: row dense;
  }
  ${mqMin[1]} {
    padding-top: ${rem(60)};
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

const Tags = styled('div')`
  text-align: center;
  > * {
    margin: ${rem(10)};
    ${mqMin[3]} {
      margin: ${rem(20)};
    }
  }
`;
class FeatureCards extends React.Component {
  state = {};
  resetTagFilter = () => {
    this.setState({ activeFilter: undefined });
  };
  setTagFilter = item => {
    this.setState({ activeFilter: item });
  };
  render() {
    const items = this.props.data.body;
    const getAlltags = items.map(item => item.primary.tag);
    const getCurrentTags = getAlltags.filter(
      (item, index, self) => self.indexOf(item) == index,
    );
    const filteredItems = items.filter(
      item => item.primary.tag === this.state.activeFilter,
    );
    return (
      <SectionBase
        title={this.props.data.title}
        footer={
          this.props.data.download_text &&
          this.props.download.button_url.url && (
            <div>
              <div>
                <CustomView condition={!isMobile}>
                  <Button
                    to={this.props.download.button_url.url}
                    size="L"
                    shadow
                    data-aos="fade"
                    className={this.props.data.download_tracking_class}
                  >
                    {this.props.data.download_text}
                  </Button>
                </CustomView>
              </div>
              <div>
                <CustomView condition={isMobile}>
                  <Button
                    to={this.props.download.button_url_mobile.url}
                    size="L"
                    shadow
                    data-aos="fade"
                    className={this.props.data.download_tracking_class}
                  >
                    {this.props.data.download_text}
                  </Button>
                </CustomView>
              </div>
            </div>
          )
        }
      >
        <Wrapper>
          <Tags>
            <Tag
              key={'tag-filter-all'}
              text={'All'}
              onClick={() => this.resetTagFilter()}
              active={this.state.activeFilter ? false : true}
              size="L"
              element="button"
            />
            {getCurrentTags.map((item, index) => (
              <Tag
                key={`tag-filter-${index}`}
                text={item}
                onClick={() => this.setTagFilter(item)}
                active={this.state.activeFilter === item ? true : false}
                size="L"
                element="button"
              />
            ))}
          </Tags>
          <Grid>
            {(this.state.activeFilter ? filteredItems : items).map(
              (item, index) => {
                if (item.slice_type === 'featurecard') {
                  return (
                    <GridItem key={`${index}-grid-item`}>
                      <FeatureCardBase data={item.primary} />
                    </GridItem>
                  );
                } else if (item.slice_type === 'featureslider') {
                  return (
                    <GridItem
                      key={`${index}-grid-item-slider`}
                      css={`
                        ${mqMin[0]} {
                          grid-column: 1 / 3;
                        }
                      `}
                    >
                      <FeatureCardSlider
                        data={item.primary}
                        items={item.items}
                      />
                    </GridItem>
                  );
                }
              },
            )}
          </Grid>
        </Wrapper>
      </SectionBase>
    );
  }
}

export default FeatureCards;
