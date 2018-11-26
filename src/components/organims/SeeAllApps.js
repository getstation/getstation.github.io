import React from 'react';
import { rem } from 'polished';
import { keyframes } from 'react-emotion';
import { css } from 'emotion';
import SectionBase from '../molecules/SectionBase';
import Button from '../atoms/Button';

const isEven = n => {
  return n % 2 == 0;
};

const slide = keyframes`
  from { background-position: 0 0; }
    to { background-position: -1500px 0; }
}
`;

const slideBack = keyframes`
  from { background-position: 0 0; }
    to { background-position: 1500px; }
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
      {data &&
        data.map((item, index) => (
          <div
            key={`${index}-slide-app`}
            className={css({
              height: item.image.dimensions.height + 25,
              background: `url(${item.image.url}) center repeat-x`,
              animation: `${
                isEven(index) ? slide : slideBack
              } 100s linear infinite`,
            })}
          />
        ))}
    </SectionBase>
  );
};

export default More;
