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
import bkgGradient from '../../images/hero-gradient.svg';

class Video extends React.Component {
  componentDidMount() {
    this.update();
  }
  componentDidUpdate() {
    this.update();
  }
  update() {
    this.refs.video.setAttribute('muted', '1');
    this.refs.video.setAttribute('playsInline', '1');
    this.refs.video.setAttribute('autoplay', '1');
    this.refs.video.setAttribute('loop', '1');
  }
  render() {
    const { src, onEnded, poster } = this.props;
    return (
      <video
        src={src}
        poster={poster}
        autoPlay
        playsInline
        muted
        loop
        onEnded={onEnded}
        ref="video"
      />
    );
  }
}

const Background = styled('div')`
  z-index: 0;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url(${bkgGradient}) center no-repeat;
  background-size: cover;
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
    width: 31%;
    top: 47px;
    ${[mqMin[0]]} {
      top: 50px;
    }
    ${[mqMin[2]]} {
      width: 39%;
      top: 13px;
    }
  }
`;

const HeroHome = ({
  title,
  content,
  download,
  downloadTracking,
  legend,
  image,
  video,
  videoPoster,
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
          paddingTop: rem(300),
          paddingBottom: rem(120),
          [[mqMax[2]]]: {
            padding: `${rem(260)} 0 ${rem(140)}`,
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
          <div style={{ display: 'inline-block' }}>
            <DownloadApp data={download} className={downloadTracking} />
          </div>
        </div>
        {image.url && (
          <Illustration>
            <Lottie
              options={{
                loop: true,
                autoplay: true,
                animationData: require('../../animations/coffee.json'),
              }}
              height={920}
              width={920}
            />
            {video && (
              <Video src={video} poster={videoPoster} type="video/mp4" />
            )}
            {image.url && (
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
                width={image.dimensions.width || null}
                height={image.dimensions.height || null}
              />
            )}
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
                <span>670+</span> {legend}
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
