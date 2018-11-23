import React from 'react';
import { rem } from 'polished';
import { keyframes } from 'react-emotion';
import { css } from 'emotion';
import SectionBase from '../molecules/SectionBase';
import Button from '../atoms/Button';

const slide = keyframes`
  from { background-position: 0 0; }
    to { background-position: 400px 0; }
}
`;

const Footer = ({ button, url = '/' }) =>
  button && (
    <Button to={url} size="L" theme="ghost">
      {button}
    </Button>
  );

const More = ({ title, data, button, buttonUrl, ...rest }) => {
  console.log(data);
  return (
    <SectionBase
      title={title}
      footer={button && buttonUrl && <Footer button={button} url={buttonUrl} />}
      {...rest}
    >
      {data && (
        <div
          className={css({
            height: rem(300),
            backgroundImage: `url(${data.url})`,
            backgroundSize: 'auto 100%',
            animation: `${slide} 60s linear infinite`,
          })}
        />
      )}
    </SectionBase>
  );
};

export default More;
