import React from 'react';
import styled from 'react-emotion';
import slugify from 'slugify';
import { css } from 'emotion';
import { rem, rgba } from 'polished';
import Title from '../atoms/Title';
import TextBigger from '../atoms/TextBigger';
import Wrapper from '../layout/Wrapper';
import Button from '../atoms/Button';
import { mqMin, mqMax } from '../../styles/breackpoint';
import * as font from '../../styles/fonts.js';
import * as color from '../../styles/colors';

const Box = styled('div')`
  padding: ${rem(100)} 0 ${rem(70)};
`;

const Head = styled('div')`
  text-align: center;
`;

const TimelineList = styled('ul')`
  margin-top: ${rem(100)};
  position: relative;
  padding: ${rem(10)} 0 ${rem(120)} 0;
  &::before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: ${rem(6)};
    background: ${rgba(color.clr1, 0.2)};
    border-radius: ${rem(3)};
    ${[mqMin[1]]} {
      left: 50%;
    }
  }
  &::after {
    content: '';
    display: block;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: ${rem(330)};
    background-image: linear-gradient(to top, #ffffff, rgba(255, 255, 255, 0));
  }
`;

const EventCard = styled('div')`
  border-radius: ${rem(7)};
  box-shadow: 0 0 1px 0 rgba(0, 0, 0, 0.2), 0 7px 25px 0 rgba(0, 0, 0, 0.03),
    0 4px 12px 0 rgba(0, 0, 0, 0.03);
  background: ${color.light};
  overflow: hidden;
  max-width: ${rem(280)};
  img {
    display: block;
    width: 100%;
  }
`;

const EventItem = styled('li')`
  position: relative;
  z-index: 2;
  padding-left: ${rem(30)};
  ${[mqMin[1]]} {
    width: 50%;
    &:nth-child(odd) {
      margin-left: auto;
      padding-left: ${rem(70)};
    }
    &:nth-child(even) {
      text-align: right;
      padding-left: auto;
      padding-right: ${rem(70)};
      ${EventCard} {
        margin-left: auto;
      }
      &::before {
        left: auto;
        right: ${rem(-13)};
      }
    }
  }
  &:not(:last-child) {
    margin-bottom: ${rem(40)};
  }
  &::before {
    content: '';
    display: block;
    position: absolute;
    top: ${rem(10)};
    left: ${rem(-7)};
    height: ${rem(20)};
    width: ${rem(20)};
    background: ${color.clr1};
    border-radius: 50%;
  }
`;

const EventDate = styled('div')`
  text-transform: uppercase;
  font-weight: ${font.weightBold};
  color: #a1d3ff;
  font-size: ${rem(12)};
  ${[mqMin[1]]} {
    font-size: ${rem(14)};
  }
`;

const EventContent = styled('div')`
  padding: ${rem(20)};
  color: ${color.neutralLight};
  text-align: center;
`;

const EventWrapper = ({ element, ...props }) => {
  return React.createElement(element, { ...props });
};

const Event = ({ date, title, url, text, thumb, ...rest }) => (
  <EventItem {...rest}>
    <EventWrapper element={url ? 'a' : 'div'} href={url}>
      {date && <EventDate>{date}</EventDate>}
      {title && (
        <Title
          element="h3"
          className={css({
            fontSize: font.L,
            color: color.clr1,
            [[mqMin[1]]]: {
              fontSize: font.XXL,
            },
            '&:not(:last-child)': {
              marginBottom: rem(5),
            },
          })}
        >
          {title}
        </Title>
      )}
      <EventCard>
        {thumb && (
          <img
            src={thumb.url}
            width={thumb.dimensions.width || null}
            height={thumb.dimensions.height || null}
            alt=""
          />
        )}
        {text && <EventContent>{text}</EventContent>}
      </EventCard>
    </EventWrapper>
  </EventItem>
);

const numberEvents = 5;
class Timeline extends React.Component {
  state = {};
  componentDidMount() {
    this.setState({
      nbEvents: numberEvents,
    });
  }
  increment() {
    this.setState({
      nbEvents: this.state.nbEvents + numberEvents,
    });
  }
  render() {
    const getEventsLenght = Object.keys(this.props.events).length;
    return (
      <div
        className={css({
          [[mqMax[1]]]: {
            display: 'inline-block',
            margin: 'auto',
          },
        })}
      >
        <TimelineList>
          {this.props.events
            .slice(0, this.state.nbEvents)
            .map((item, index) => (
              <Event
                key={`${index}-${slugify(item.title, { lower: true })}`}
                {...item}
              />
            ))}
        </TimelineList>
        {this.props.button && (
          <div
            className={css({ textAlign: 'center', margin: `${rem(100)} 0` })}
          >
            <Button
              theme="ghost"
              element="button"
              size="L"
              onClick={() => this.increment()}
              className={css({
                display:
                  this.state.nbEvents >= getEventsLenght
                    ? 'none !important'
                    : 'inline-flex',
              })}
            >
              {this.props.button}
            </Button>
          </div>
        )}
      </div>
    );
  }
}

const TeamTimeline = ({ title, text, timeline, button, ...rest }) => {
  return (
    <Box {...rest}>
      <Wrapper>
        <Head>
          {title && (
            <Title
              element="h2"
              className={css({
                fontSize: font.XXL,
                [[mqMin[1]]]: {
                  fontSize: font.XXXL,
                },
                '&:not(:last-child)': {
                  marginBottom: rem(5),
                },
              })}
            >
              {title}
            </Title>
          )}
          {text && <TextBigger>{text}</TextBigger>}
        </Head>
        {timeline && (
          <div className={css({ [[mqMax[1]]]: { textAlign: 'center' } })}>
            <Timeline events={timeline} button={button} />
          </div>
        )}
      </Wrapper>
    </Box>
  );
};

export default TeamTimeline;
