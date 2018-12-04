import React from 'react';
import Slider from 'react-slick';
import styled from 'react-emotion';
import { css } from 'emotion';
import { rem } from 'polished';
import Wrapper from '../layout/Wrapper';
import Tweet from '../molecules/Tweet';
import SectionTitle from '../molecules/sectionTitle';
import { mqMin } from '../../styles/breackpoint';
import * as color from '../../styles/colors';
import * as font from '../../styles/fonts';
import * as transition from '../../styles/transitions';

const bgColor = '#3ca9cd';

const Section = styled('div')`
  background: ${bgColor};
  overflow: hidden;
  padding: ${rem(80)} 0;
`;

const Slide = styled('div')`
  padding: ${rem(20)};
  ${mqMin[0]} {
    max-width: ${rem(300)} !important;
  }
`;

class SimpleSlider extends React.Component {
  render() {
    var settings = {
      dots: false,
      autoplay: true,
      infinite: true,
      speed: 200,
      centerMode: true,
      variableWidth: true,
      responsive: [
        {
          breakpoint: 576,
          settings: {
            centerMode: false,
            variableWidth: false,
            slidesToShow: 1,
          },
        },
      ],
    };
    return (
      <Slider {...settings}>
        {this.props.data.map((item, index) => (
          <Slide key={`tweet-slide-${index}`}>
            <Tweet
              url={item.url}
              thumb={item.thumb.url}
              fullName={item.fullname}
              userName={item.username}
              content={item.content.html}
              date={item.date}
            />
          </Slide>
        ))}
      </Slider>
    );
  }
}

const TweetsLink = styled('a')`
  color: ${color.light};
  font-weight: ${font.weightBold};
  font-size: ${rem(22)};
  transition: opacity 0.3s ${transition.base};
  &:hover,
  &:focus {
    color: ${color.light};
    opacity: 0.5;
  }
`;

const SliderMention = ({ title, data, link }) => {
  return (
    <React.Fragment>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1440"
        height="50"
        viewBox="0 0 1440 50"
        preserveAspectRatio="none"
        className={css({
          display: 'block',
          width: '100%',
        })}
      >
        <path
          d="M1440 50V36.7c-74.21 3.35-160.32 5.02-258.37 5.02C823.32 41.72 579.9 0 251.7 0 163.78 0 79.88 2.79 0 8.35V50h1440z"
          fill={bgColor}
        />
      </svg>
      <Section>
        <Wrapper>
          {title && (
            <SectionTitle
              theme="light"
              className={css({
                marginBottom: rem(40),
                [mqMin[1]]: {
                  marginBottom: rem(40),
                },
              })}
            >
              {title}
            </SectionTitle>
          )}
        </Wrapper>
        <SimpleSlider data={data} />
        {link.url && link.text && (
          <div
            className={css({
              textAlign: 'center',
              marginTop: rem(30),
            })}
          >
            <TweetsLink href={link.url} target="_blank">
              {link.text}
            </TweetsLink>
          </div>
        )}
      </Section>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1440"
        height="50"
        viewBox="0 0 1440 50"
        preserveAspectRatio="none"
        className={css({
          display: 'block',
          width: '100%',
        })}
      >
        <path
          d="M0 0v12.35C79.88 6.79 163.78 4 251.7 4c328.2 0 571.62 41.72 929.93 41.72 98.04 0 184.16-1.67 258.37-5.02V0H0z"
          fill={bgColor}
        />
      </svg>
    </React.Fragment>
  );
};

export default SliderMention;
