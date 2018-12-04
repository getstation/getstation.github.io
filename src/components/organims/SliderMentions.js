import React from 'react';
import Slider from 'react-slick';
import { TwitterTweetEmbed } from 'react-twitter-embed';
import { rem } from 'polished';
import SectionTitle from '../molecules/sectionTitle';
import Wrapper from '../layout/Wrapper';
import styled from 'react-emotion';

const Section = styled('div')`
  padding: ${rem(100)} 0;
  background: #3ca9cd;
  overflow: hidden;
`;

const Slide = styled('div')`
  padding: 0 ${rem(20)};
  width: ${rem(400)} !important;
`;

class SimpleSlider extends React.Component {
  render() {
    var settings = {
      dots: false,
      autoplay: true,
      infinite: true,
      speed: 200,
      slidesToShow: 1,
      centerMode: true,
      variableWidth: true,
    };
    return (
      <Slider {...settings}>
        <Slide>
          <TwitterTweetEmbed tweetId={'994610198831648768'} />
        </Slide>
        <Slide>
          <TwitterTweetEmbed tweetId={'994489828640280576'} />
        </Slide>
        <Slide>
          <TwitterTweetEmbed tweetId={'1024178183514607617'} />
        </Slide>
        <Slide>
          <TwitterTweetEmbed tweetId={'1024053297529815040'} />
        </Slide>
        <Slide>
          <TwitterTweetEmbed tweetId={'1024279016973459457'} />
        </Slide>
        <Slide>
          <TwitterTweetEmbed tweetId={'1031351767835979777'} />
        </Slide>
      </Slider>
    );
  }
}

const SliderMention = ({ title, data, ...rest }) => {
  return (
    <Section>
      <Wrapper>{title && <SectionTitle>{title}</SectionTitle>}</Wrapper>
      <SimpleSlider />
    </Section>
  );
};

export default SliderMention;
