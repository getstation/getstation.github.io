import React from 'react';
import styled from 'react-emotion';
import { css } from 'emotion';
import { rem, margin } from 'polished';
import ButtonSmall from '../atoms/ButtonSmall';
import Content from '../molecules/Content';
import * as font from '../../styles/fonts';
import * as color from '../../styles/colors';
import { mqMin, mqMax } from '../../styles/breackpoint';

const Title = styled('h3')`
  font-weight: ${font.weightBold};
  font-size: ${rem(18)};
  ${[mqMin[1]]} {
    font-size: ${rem(20)};
  }
  &:not(:last-child) {
    margin-bottom: ${rem(15)};
  }
`;

const Buttons = styled('div')`
  display: flex;
  > * + * {
    margin-left: ${rem(13)};
  }
  &:not(:last-child) {
    margin-bottom: ${rem(15)};
  }
`;

const PressMainContentText = data => {
  return data.items.map((item, index) => (
    <ContentTextItem
      key={`contentText-${index}`}
      title={item.title}
      short={item.short.html}
      long={item.long.html}
      className={css({
        '&:not(:first-child)': {
          marginTop: rem(60),
        },
      })}
    />
  ));
};

class ContentTextItem extends React.Component {
  state = {};
  componentDidMount = () => {
    this.getShortContent();
  };
  getLongContent = () => {
    this.setState({
      activeLink: 'long',
      content: this.props.long,
    });
  };
  getShortContent = () => {
    this.setState({
      activeLink: 'short',
      content: this.props.short,
    });
  };
  render() {
    const item = this.props;
    return (
      <React.Fragment>
        {item.short && (
          <div className={this.props.className}>
            <Title>{item.title}</Title>
            <Buttons>
              <ButtonSmall
                onClick={() => this.getShortContent()}
                active={this.state.activeLink === 'short' ? true : false}
              >
                Short
              </ButtonSmall>
              {item.long && (
                <ButtonSmall
                  onClick={() => this.getLongContent()}
                  active={this.state.activeLink === 'long' ? true : false}
                >
                  Long
                </ButtonSmall>
              )}
            </Buttons>
            <Content dangerouslySetInnerHTML={{ __html: this.state.content }} />
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default PressMainContentText;
