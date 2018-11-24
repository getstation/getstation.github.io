import React from 'react';
import styled from 'react-emotion';
import { rem } from 'polished';
import { mqMin } from '../../styles/breackpoint';
import * as font from '../../styles/fonts';
import * as color from '../../styles/colors';

const Box = styled('div')`
  overflow: hidden;
  background: ${color.light};
  box-shadow: 0 5px 25px 0 rgba(48, 112, 205, 0.1),
    0 0 1px 0 rgba(48, 112, 205, 0.1);
  border-radius: ${rem(15)};
`;

const Thumb = styled('div')`
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

const FeatureCardBody = ({ title, content }) => (
  <Body>
    {title && <Title>{title}</Title>}
    {content && <Content>{content}</Content>}
  </Body>
);

const FeatureCardBase = ({ data, ...rest }) => {
  console.log('FeatureCardBase data :', data);
  return (
    <Box {...rest}>
      {data.image.url && (
        <Thumb>
          <img src={data.image.url} alt="" />
        </Thumb>
      )}
      {data.title && (
        <FeatureCardBody title={data.title} content={data.content} />
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
    console.log('FeatureCardSlider data :', this.props.data);
    console.log('FeatureCardSlider item :', this.props.items);
    return (
      <Box>
        <Thumb>
          <img src={this.props.items[this.state.slide].image.url} alt="" />
        </Thumb>
        {this.props.items.map((item, index) => {
          return (
            <div key={item.icon.url} onClick={() => this.slideChange(index)}>
              <img src={item.icon.url} alt="" />
            </div>
          );
        })}
        {this.props.data.title && (
          <FeatureCardBody
            title={this.props.data.title}
            content={this.props.data.content}
          />
        )}
      </Box>
    );
  }
}
export { FeatureCardBase, FeatureCardSlider };
