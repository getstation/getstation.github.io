import React from 'react';
import styled from 'react-emotion';
import { css } from 'emotion';
import { rem, rgba } from 'polished';
import posed from 'react-pose';
import Button from '../atoms/Button';
import Wrapper from '../layout/Wrapper';
import { mqMin, mqMax } from '../../styles/breackpoint';
import * as font from '../../styles/fonts';
import * as color from '../../styles/colors';
import quoteImg from '../../images/quote.svg';

const TIMER = 4000;

const Section = styled('div')`
  padding: ${rem(110)} 0;
  margin-bottom: ${rem(-50)};
  background-image: linear-gradient(0deg, #f5fbff 1%, #ffffff 100%);
  ${mqMin[1]} {
    padding: ${rem(150)} 0;
  }
`;

const Title = styled('div')`
  font-size: ${rem(22)};
  ${mqMax[1]} {
    text-align: center;
  }
  ${mqMin[1]} {
    font-size: ${rem(28)};
    div {
      display: inline-block;
    }
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

const Grid = styled('div')`
  ${mqMin[1]} {
    display: flex;
    align-items: center;
  }
`;

const Left = styled('div')`
  ${mqMin[1]} {
    flex-grow: 1;
    padding-right: ${rem(100)};
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

const ItemSwitch = posed.div({
  hidden: { opacity: 0, x: 10 },
  visible: { opacity: 1, x: 0 },
});

const Fade = posed.div({
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
});

const Word = styled(ItemSwitch)`
  font-weight: ${font.weightBold};
`;
const JobWord = styled(Fade)`
  font-weight: ${font.weightBold};
`;

const QuoteText = styled(Fade)``;

const Author = styled(Fade)`
  margin: ${rem(70)} 0 0;
  ${mqMin[1]} {
    margin-top: ${rem(40)};
  }
  img {
    display: block;
    margin: ${rem(20)} auto 0 auto;
  }
`;
class Opinons extends React.Component {
  state = {
    slide: 0,
    isAnimated: true,
  };
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        isAnimated: !this.state.isAnimated,
      });
    }, TIMER - 300);
    this.timerID = setInterval(() => {
      this.tick(),
        this.setState({
          isAnimated: !this.state.isAnimated,
        });
    }, TIMER);
    setTimeout(() => {
      this.timerAlternate = setInterval(() => {
        this.setState({
          isAnimated: !this.state.isAnimated,
        });
      }, TIMER);
    }, TIMER - 300);
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
    clearInterval(this.timerAlternate);
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
    const download = this.props.download;
    return (
      <Section>
        <Wrapper className={css({})}>
          <Grid>
            <Left>
              <Title>
                <JobWord pose={this.state.isAnimated ? 'visible' : 'hidden'}>
                  {items[this.state.slide].job}
                </JobWord>{' '}
                {this.props.slideUseText}{' '}
                <Word pose={this.state.isAnimated ? 'visible' : 'hidden'}>
                  {items[this.state.slide].use_for}
                </Word>
              </Title>
            </Left>
            <Right>
              <Quote>
                <QuoteText pose={this.state.isAnimated ? 'visible' : 'hidden'}>
                  {items[this.state.slide].quote}
                </QuoteText>
                <QuoteArrow />
              </Quote>
            </Right>
          </Grid>
          <Grid>
            <Left />
            <Right>
              <Author pose={this.state.isAnimated ? 'visible' : 'hidden'}>
                <b>{items[this.state.slide].name}</b>,{' '}
                {items[this.state.slide].job}
                <img
                  src={items[this.state.slide].logo.url}
                  alt=""
                  height={items[this.state.slide].logo.dimensions.height}
                  width={items[this.state.slide].logo.dimensions.width}
                />
              </Author>
            </Right>
          </Grid>
          {download.text && download.url && (
            <div
              className={css({
                textAlign: 'center',
                marginTop: rem(30),
              })}
            >
              <Button to={download.url} size="L" shadow>
                {download.text}
              </Button>
            </div>
          )}
        </Wrapper>
      </Section>
    );
  }
}

export default Opinons;
