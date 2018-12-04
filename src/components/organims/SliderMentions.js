import React from 'react';
import Slider from 'react-slick';
import Tweet from '../molecules/Tweet';
import { rem } from 'polished';
import SectionTitle from '../molecules/sectionTitle';
import Wrapper from '../layout/Wrapper';
import styled from 'react-emotion';
import { mqMin } from '../../styles/breackpoint';

const Section = styled('div')`
  padding: ${rem(100)} 0;
  background: #3ca9cd;
  overflow: hidden;
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

const SliderMention = ({ title, data, ...rest }) => {
  console.log(data);
  return (
    <Section>
      <Wrapper>{title && <SectionTitle>{title}</SectionTitle>}</Wrapper>
      <SimpleSlider data={data} />
    </Section>
  );
};

export default SliderMention;
