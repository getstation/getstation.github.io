import React from 'react';

import { css, cx } from 'emotion';
import styled from 'react-emotion';
import { rem } from 'polished';
import Lottie from 'react-lottie';
import { mqMin, mqMax } from '../../styles/breackpoint';
import Wrapper from '../layout/Wrapper';
import Title from '../atoms/Title';
import DownloadApp from '../organims/DownloadApp';
import * as font from '../../styles/fonts';
import * as color from '../../styles/colors';
import blueGradient from '../../images/hero-home-gradient.png';
import blueGradientS from '../../images/hero-home-gradient-s.png';
import blueGradientM from '../../images/hero-home-gradient-m.png';

class AppNumber extends React.Component {
  state = {
    number: '600+',
  };
  componentDidMount() {
    fetch('https://api.getstation.com/graphql', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query: '{ servicesConnection { totalCount } }' }),
    })
      .then(res => res.json())
      .then(res =>
        this.setState({ number: res.data.servicesConnection.totalCount }),
      );
  }
  render() {
    return (
      <span>
        {this.state.number} {this.props.legend && this.props.legend}
      </span>
    );
  }
}

let AppTotalCount = 600;

const Background = styled('div')`
  z-index: 0;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url(${blueGradientS}) right bottom no-repeat;
  background-size: 100%;
  ${[mqMin[1]]} {
    background-image: url(${blueGradientM});
    background-size: 80%;
  }
  ${[mqMin[2]]} {
    background-image: url(${blueGradient});
    background-size: 70%;
  }
  ${[mqMin[3]]} {
    background-size: 60%;
  }
  ${[mqMin[4]]} {
    background-size: 50%;
  }
`;

const Illustration = styled('div')`
  position: relative;
  border: 1px solid transparent;
  ${[mqMin[2]]} {
    margin-right: -20%;
    width: 120%;
  }
  > div {
    position: absolute;
    top: 0;
    width: 100% !important;
    height: auto !important;
  }
    img {
      width: 100%;
      display: block;
    }
  }
  video {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 28%;
    top: 47px;
    ${[mqMin[0]]} {
      top: 50px;
    }
    ${[mqMin[2]]} {
      width: 35%;
      top: 17px;
    }
  }
`;

const HeroHome = ({
  title,
  content,
  download,
  legend,
  image,
  video,
  className,
  ...rest
}) => {
  return (
    <div
      className={cx(
        css({
          overflow: 'hidden',
          position: 'relative',
          backgroundImage: 'linear-gradient(to top, #f5f7ff, #ffffff)',
        }),
        className,
      )}
      {...rest}
    >
      <Wrapper
        className={css({
          zIndex: 1,
          position: 'relative',
          padding: `${rem(130 + 88)} 0 ${rem(130)}`,
          [[mqMax[2]]]: {
            padding: `${rem(140)} 0`,
          },
          [[mqMin[2]]]: {
            display: 'flex',
          },
        })}
      >
        <div
          className={css({
            [[mqMin[2]]]: {
              width: '40%',
              flexShrink: 0,
            },
            [[mqMax[2]]]: {
              padding: `0 ${rem(20)}`,
              textAlign: 'center',
            },
          })}
        >
          {title && (
            <Title
              element="h2"
              className={css({
                fontSize: font.XXL,
                '&:not(:last-child)': {
                  marginBottom: rem(20),
                },
                [[mqMin[1]]]: {
                  fontSize: font.XXXL,
                },
                [[mqMin[2]]]: {
                  fontSize: font.XXXXL,
                },
              })}
            >
              {title}
            </Title>
          )}
          {content && (
            <p
              className={css({
                '&:not(:last-child)': {
                  lineHeight: font.lineHeightXL,
                  marginBottom: rem(40),
                  maxWidth: rem(440),
                  [[mqMin[2]]]: {
                    maxWidth: rem(440),
                    fontSize: font.M,
                  },
                  [[mqMax[2]]]: {
                    marginLeft: 'auto',
                    marginRight: 'auto',
                  },
                },
              })}
            >
              {content}
            </p>
          )}
          <DownloadApp
            data={download}
            className={css({ [[mqMin[2]]]: { display: 'inline-block' } })}
          />
        </div>
        {image.url && (
          <Illustration>
            <Lottie
              options={{
                loop: true,
                autoplay: true,
                animationData: require('../../animations/coffee.json'),
              }}
              height={357}
              width={920}
            />
            {video && (
              <video autoPlay="autoplay" loop="loop">
                <source src={video} type="video/mp4" />
              </video>
            )}
            <img
              src={image.url}
              alt=""
              className={css({
                [[mqMax[2]]]: {
                  maxWidth: '80%',
                  display: 'block',
                  margin: `${rem(40)} auto 0`,
                },
              })}
              width={image.dimensions.width}
              height={image.dimensions.height}
            />
            {legend && (
              <p
                className={css({
                  textAlign: 'center',
                  color: color.light,
                  fontWeight: font.weightBold,
                  opacity: 0.6,
                  marginTop: rem(20),
                  [[mqMin[2]]]: {
                    fontSize: font.M,
                  },
                })}
              >
                <AppNumber legend={legend} />
              </p>
            )}
          </Illustration>
        )}
      </Wrapper>
      <Background />
    </div>
  );
};

export default HeroHome;
