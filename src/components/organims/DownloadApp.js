import React from 'react';
import { css, cx } from 'emotion';
import * as ReactMobileDetect from 'react-device-detect';
import Icon from '../../components/atoms/Icon';
import { rem, rgba } from 'polished';
import Button from '../atoms/Button';
import * as transition from '../../styles/transitions';
import * as color from '../../styles/colors';

class DownloadApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile: false,
    }
  }

  componentDidMount() {
    // on client side we check if we are on mobile
    // or not
    this.setState({
      isMobile: ReactMobileDetect.isMobile,
    })

  }


  render() {
    const { props, state } = this;
    const { data, theme, className, ...rest } = props;
    const { isMobile } = state;

    const DATA = data.data;
    return (
      <div {...rest}>
        <div className={css({ marginBottom: rem(15), textAlign: 'center' })}>
          {DATA.button_text && DATA.button_url && (
            <div>
              <div>
                <ReactMobileDetect.CustomView condition={!isMobile}>
                  <Button
                    to={DATA.button_url.url}
                    theme={theme}
                    size="L"
                    shadow
                    className={cx(
                      css`
                        > div {
                          transition: all 0.2s ${transition.base};
                          &:hover {
                            box-shadow: 0 7px 16px ${rgba(color.clr1Dark, 0.25)};
                          }
                        }
                      `,
                      className,
                    )}
                  >
                    {DATA.button_text}
                  </Button>
                </ReactMobileDetect.CustomView>
              </div>
              <div>
                <ReactMobileDetect.CustomView condition={isMobile}>
                  <Button
                    to={DATA.button_url_mobile.url}
                    theme={theme}
                    size="L"
                    target="_blank"
                    rel="noreferrer"
                    shadow
                    className={cx(
                      css`
                        > div {
                          transition: all 0.2s ${transition.base};
                          &:hover {
                            box-shadow: 0 7px 16px ${rgba(color.clr1Dark, 0.25)};
                          }
                        }
                      `,
                      className,
                    )}
                  >
                    {DATA.button_text}
                  </Button>
                </ReactMobileDetect.CustomView>
              </div>
            </div>
          )}
        </div>
        <div
          className={css({
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          })}
        >
          {DATA.plateform_list &&
            DATA.plateform_list.map((item, index) => (
              <a
                key={`${index}-plateform-list`}
                href={item.url.url}
                className={cx(
                  `${className}-${item.type}`,
                  css({
                    padding: rem(5),
                    display: 'block',
                    margin: `0 ${rem(5)}`,
                    cursor: 'pointer',
                    opacity: 0.666,
                    transition: `opacity 0.3s ${transition.base}`,
                    '&:hover, &:focus, &:active': {
                      opacity: 1,
                    },
                  }),
                )}
              >
                <Icon
                  type={item.type}
                  size={20}
                  color={theme === 'light' ? 'light' : 'clr1Light'}
                />
                <span
                  className={css({
                    position: 'absolute !important',
                    overflow: 'hidden !important',
                    clip: 'rect(0, 0, 0, 0)!important',
                    width: '1px !important',
                    height: '1px !important',
                    margin: '-1px',
                    padding: '0 !important',
                    border: '0 !important',
                  })}
                >
                  {item.type}
                </span>
              </a>
            ))}
        </div>
      </div>
    );
  }
}

export default DownloadApp;
