import React from 'react';
import styled from 'react-emotion';
import * as font from '../../styles/fonts';
import * as color from '../../styles/colors';
import Button from '../atoms/Button';

const Wrapper = styled('div')`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, .6);
  z-index: 1;
`;

const Container = styled('div')`
  width: 450px;
  max-height: 500px;
  background-color: ${color.light};
  border-radius: 5px;
`;

const Header = styled('div')`
  width: 100%;
  padding: 20px;
  text-align: center;
  background-color: ${color.neutralLighter};
  box-sizing: border-box;
  border-radius: 5px 5px 0 0;
`;

const Title = styled('div')`
  font-size: ${font.M};
  font-weight: ${font.weightMedium};
  color: black;
  margin-bottom: 5px;
`;

const Description = styled('div')`
  font-size: ${font.XS};
  color: ${color.neutralDarker};
  opacity: .4px;
`;

const Body = styled('div')`
  color: black;
  position: relative;
  padding: 40px;
`;

const Footer = styled('div')`
  white-space: nowrap;
  display: flex;
  justify-content: space-between;
  padding: 0 40px 40px 40px;
  & > a {
    flexBasis: 48%;
    margin-left: 5px;
    width: 100%;
    margin: 0 10px;
    & > div {
      width: 100%;
    }
  }
`;

export default class Modal extends React.PureComponent {
  render() {
    const {
      title, description, children, onCancel, cancelContent, onContinue, continueContent,
    } = this.props;

    return (
      <Wrapper>
        <Container>
          <Header>
            <Title>{title}</Title>
            <Description>{description}</Description>
          </Header>

          <Body>
            {children}
          </Body>

          { (onCancel || onContinue) &&
          <Footer>
            <Button
              onClick={onCancel}
              theme="ghost"
            >
              {cancelContent || `Cancel`}
            </Button>

            <Button
              onClick={onContinue}
              theme="danger"
            >
              {continueContent || `OK`}
            </Button>
          </Footer>
          }
        </Container>
      </Wrapper>
    );
  }
}
