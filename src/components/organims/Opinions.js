import React from 'react';
import styled from 'react-emotion';
import ReactTypingEffect from 'react-typing-effect';
import { css, keyframes } from 'emotion';
import { Link } from 'gatsby';
import { rem, rgba } from 'polished';
import SectionBase from '../molecules/SectionBase';
import Button from '../atoms/Button';
import Wrapper from '../layout/Wrapper';
import { mqMin, mqMax } from '../../styles/breackpoint';
import * as font from '../../styles/fonts';
import * as color from '../../styles/colors';
import quoteImg from '../../images/quote.svg';

const Section = styled('div')`
  padding: ${rem(60)} 0;
  ${mqMin[1]} {
    padding: ${rem(100)} 0;
  }
`;

const Title = styled('div')`
  font-size: ${rem(22)};
  ${mqMax[1]} {
    text-align: center;
  }
  ${mqMin[1]} {
    font-size: ${rem(28)};
  }
`;

const Quote = styled('div')`
  ${mqMax[1]} {
    margin-top: ${rem(40)};
  }
  position: relative;
  padding: ${rem(50)};
  text-align: center;
  font-size: ${rem(18)};
  color: ${rgba(color.neutralDark, 0.5)};
  background-color: ${color.light};
  border-radius: 14.5px;
  box-shadow: 0 12px 26px 0 rgba(35, 62, 120, 0.2);
  ${mqMin[1]} {
    font-size: ${rem(22)};
  }
  &::before,
  &::after {
    position: absolute;
    content: '';
    display: block;
    width: ${rem(28)};
    height: ${rem(18)};
    background: transparent url(${quoteImg}) center no-repeat;
  }
  &::before {
    top: ${rem(26)};
    left: ${rem(26)};
  }
  &::after {
    bottom: ${rem(26)};
    right: ${rem(26)};
    transform: rotate(180deg);
  }
`;

const Author = styled('div')`
  margin: ${rem(70)} 0 ${rem(20)};
  ${mqMin[1]} {
    margin-top: ${rem(40)};
  }
`;

const Grid = styled('div')`
  ${mqMin[1]} {
    display: flex;
  }
`;

const Left = styled('div')`
  ${mqMin[1]} {
    flex-grow: 1;
    padding-right: ${rem(100)};
    padding-top: ${rem(40)};
  }
`;
const Right = styled('div')`
  text-align: center;
  ${mqMin[1]} {
    flex-shrink: 0;
    width: ${rem(400)};
  }
`;

const QuoteArrow = styled('div')`
  position: absolute;
  bottom: ${rem(-14)};
  left: 50%;
  width: 0;
  height: 0;
  border-top: ${rem(14)} solid ${color.light};
  border-left: ${rem(14)} solid transparent;
  border-right: ${rem(14)} solid transparent;
  transform: translateX(-50%);
`;
class Opinons extends React.Component {
  state = {
    slide: 0,
  };
  componentDidMount() {
    this.timerID = setInterval(this.tick, 4000);
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick = () => {
    if (this.state.slide < this.props.slideText.length - 1) {
      this.setState({ slide: this.state.slide + 1 });
    } else {
      this.setState({ slide: 0 });
    }
  };
  render() {
    const items = this.props.slideText;
    return (
      <Section>
        <Wrapper className={css({})}>
          <Grid>
            <Left>
              <Title>
                <b>{items[0].job}</b> {this.props.slideUseText}{' '}
                <b>
                  <ReactTypingEffect
                    text={['Stay Focus', 'Have fun', 'Icrase Productivity']}
                    speed="100"
                    eraseDeay="100" //text=["Hello.", "World!"]
                  />
                </b>
              </Title>
            </Left>
            <Right>
              <Quote>
                {items[this.state.slide].quote}
                <QuoteArrow />
              </Quote>
            </Right>
          </Grid>
          <Grid>
            <Left />
            <Right>
              <Author>
                <b>{items[this.state.slide].name}</b>,{' '}
                {items[this.state.slide].job}
              </Author>
              <img
                src={items[this.state.slide].logo.url}
                alt=""
                height={items[this.state.slide].logo.dimensions.height}
                width={items[this.state.slide].logo.dimensions.width}
              />
            </Right>
          </Grid>
        </Wrapper>
      </Section>
    );
  }
}

export default Opinons;
