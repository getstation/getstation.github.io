import React from 'react';
import { css, cx } from 'emotion';
import Icon from '../../components/atoms/Icon';
import { rem } from 'polished';
import Button from '../atoms/Button';
import * as transition from '../../styles/transitions';

const DownloadApp = ({ data, theme, className, ...rest }) => {
  const DATA = data.data;
  return (
    <div {...rest}>
      <div
        className={css({
          marginBottom: rem(15),
          textAlign: 'center',
        })}
      >
        {DATA.button_text && DATA.button_url && (
          <Button
            to={DATA.button_url.url}
            theme={theme}
            size="L"
            shadow
            className={className}
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
              className={css({
                padding: rem(5),
                display: 'block',
                margin: `0 ${rem(5)}`,
                cursor: 'pointer',
                opacity: 0.666,
                transition: `opacity 0.3s ${transition.base}`,
                '&:hover, &:focus, &:active': {
                  opacity: 1,
                },
              })}
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
