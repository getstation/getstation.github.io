import React from 'react';
import { Link } from 'gatsby';
import { rem } from 'polished';
import { keyframes } from 'react-emotion';
import { css } from 'emotion';
import AppNumber from '../atoms/AppsNumber';
import SectionBase from '../molecules/SectionBase';
import Button from '../atoms/Button';

const slide = keyframes`
  from { background-position: 0 0 }
  to { background-position: -1520px 0 }
`;

const SeeAllApps = ({ title, data, button, ...rest }) => {
  return (
    <SectionBase
      title={
        <React.Fragment>
          <AppNumber /> {title}
        </React.Fragment>
      }
      footer={
        button && (
          <Button
            to={button.url}
            size="L"
            theme="ghost"
            element={button.type === 'internal' ? Link : 'a'}
            data-aos="fade"
            className={button.tracking}
          >
            {button.text}
          </Button>
        )
      }
      {...rest}
    >
      {data && (
        <div
          className={css({
            height: rem(data.dimensions.height),
            backgroundImage: `url(${data.url})`,
            animation: `${slide} 60s linear infinite`,
          })}
        />
      )}
    </SectionBase>
  );
};

export default SeeAllApps;
