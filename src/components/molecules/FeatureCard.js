import React from 'react';
import styled from 'react-emotion';
import { css } from 'emotion';
import { rem } from 'polished';
import Tag from '../atoms/Tag';
import * as font from '../../styles/fonts';
import * as color from '../../styles/colors';
import * as transition from '../../styles/transitions';

const sliderButton = {
  size: 34,
  spacing: 10,
};

const Box = styled('div')`
  flex-grow: 0;
  overflow: hidden;
  background: ${color.light};
  box-shadow: 0 5px 25px 0 rgba(48, 112, 205, 0.1),
    0 0 1px 0 rgba(48, 112, 205, 0.1);
  border-radius: ${rem(15)};
`;

const Thumb = styled('div')`
  max-height: ${rem(218)};
  overflow: hidden;
  img {
    display: block;
    width: 100%;
  }
`;

const Body = styled('div')`
  padding: ${rem(30)};
`;

const Title = styled('div')`
  color: ${color.neutralDark};
  font-weight: ${font.weightBold};
  line-height: ${font.lineHeightL};
  &:not(:first-child) {
    margin-top: ${rem(10)};
  }
`;

const Content = styled('div')`
  color: ${color.neutralLight};
  font-size: ${font.XS};
  line-height: ${font.lineHeightL};
  &:not(:first-child) {
    margin-top: ${rem(10)};
  }
`;

const Button = styled('div')`
  cursor: pointer;
  width: ${rem(sliderButton.size)};
  height: ${rem(sliderButton.size)};
  background: ${color.light};
  border-radius: 50%;
  transition: transform 0.3s ${transition.base};
  &.active {
    box-shadow: 0 0 0 ${rem(4)} ${color.light};
  }
`;

const GridButton = styled('div')`
  display: flex;
  padding: 0 ${rem(30)};
  margin: ${rem(-sliderButton.spacing)} ${rem(-sliderButton.spacing)} 0;
  > * {
    margin: 0 ${rem(sliderButton.spacing)};
  }
`;

const ActiveLine = styled('div')`
  width: ${rem(sliderButton.size)};
  height: ${rem(2)};
  background: ${color.clr1Light};
  margin: ${rem(10)} 0 ${rem(-12)} ${rem(30)};
  border-radius: ${rem(666)};
  transition: transform 0.3s ${transition.base};
`;

const FeatureCardBase = ({ data, ...rest }) => {
  return (
    <Box {...rest}>
      {data.image.url && (
        <Thumb>
          <img src={data.image.url} alt="" />
        </Thumb>
      )}
      {data.title && (
        <Body>
          {data.title && <Title>{data.title}</Title>}
          {data.content && <Content>{data.content}</Content>}
          {data.tag && (
            <Tag text={data.tag} className={css({ marginTop: rem(20) })} />
          )}
        </Body>
      )}
    </Box>
  );
};

class FeatureCardSlider extends React.Component {
  state = {
    slide: 0,
  };
  slideChange(index) {
    this.setState({ slide: index });
  }
  render() {
    return (
      <Box className={this.props.className}>
        <Thumb>
          <img src={this.props.items[this.state.slide].image.url} alt="" />
        </Thumb>
        <GridButton>
          {this.props.items.map((item, index) => {
            return (
              <Button
                key={item.icon.url}
                onClick={() => this.slideChange(index)}
                className={this.state.slide === index ? 'active' : null}
              >
                <img src={item.icon.url} alt="" />
              </Button>
            );
          })}
        </GridButton>
        <ActiveLine
          className={css({
            transform: `translateX(${rem(
              this.state.slide * (sliderButton.size + sliderButton.spacing * 2),
            )})`,
          })}
        />
        <Body>
          {this.props.data && this.props.items[this.state.slide].title_part && (
            <Title>
              {this.props.data.title}{' '}
              <span style={{ color: color.clr1Light }}>
                {this.props.items[this.state.slide].title_part}
              </span>
            </Title>
          )}
          {this.props.items[this.state.slide].content && (
            <Content>{this.props.items[this.state.slide].content}</Content>
          )}
          {this.props.data.tag && (
            <Tag
              text={this.props.data.tag}
              className={css({ marginTop: rem(20) })}
            />
          )}
        </Body>
      </Box>
    );
  }
}
export { FeatureCardBase, FeatureCardSlider };
