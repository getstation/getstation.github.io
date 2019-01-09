import React from 'react';
import { css, cx } from 'emotion';
import { isMobile } from 'react-device-detect';
import Icon from '../../components/atoms/Icon';
import { rem, rgba } from 'polished';
import Button from '../atoms/Button';
import * as transition from '../../styles/transitions';
import * as color from '../../styles/colors';

const DownloadApp = ({ data, theme, className, ...rest }) => {
  const DATA = data.data;
  console.log(DATA.button_url_mobile);
  return (
    <div {...rest}>
      <div className={css({ marginBottom: rem(15), textAlign: 'center' })}>
        {DATA.button_text && DATA.button_url && (
          <Button
            to={!isMobile ? DATA.button_url.url : DATA.button_url_mobile.url}
            theme={theme}
            size="L"
            shadow
            className={cx(
              css`
                > div {
                  transition: all 0.2s ${transition.base};
                  &:hover {
                    transform: translateY(${rem(-2)});
                    box-shadow: 0 7px 16px ${rgba(color.clr1Dark, 0.25)};
                  }
                }
              `,
              className,
            )}
          >
            {DATA.button_text}
          </Button>
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
            </a>
          ))}
      </div>
    </div>
  );
};

export default DownloadApp;
