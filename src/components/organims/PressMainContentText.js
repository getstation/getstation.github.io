import React from 'react';
import styled from 'react-emotion';
import { css } from 'emotion';
import { rem } from 'polished';
import PressMainTitle from '../atoms/PressMainTitle';
import ButtonSmall from '../atoms/ButtonSmall';
import Content from '../molecules/Content';
import * as color from '../../styles/colors';

const Buttons = styled('div')`
  display: flex;
  > * + * {
    margin-left: ${rem(13)};
  }
  &:not(:last-child) {
    margin-bottom: ${rem(15)};
  }
`;

const PressMainContentText = ({ items, ...rest }) => {
  return (
    <div
      className={css({
        paddingTop: rem(88),
        borderBottom: `1px solid ${color.neutralLighter}`,
      })}
      {...rest}
    >
      {items.map((item, index) => (
        <ContentTextItem
          key={`contentText-${index}`}
          title={item.title}
          short={item.short.html}
          long={item.long.html}
          className={css({
            paddingBottom: rem(60),
          })}
        />
      ))}
    </div>
  );
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
            {item.title && <PressMainTitle>{item.title}</PressMainTitle>}
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
