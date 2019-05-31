import React from 'react';
import { css } from 'emotion';

import Section from '../layout/Section';
import Wrapper from '../layout/Wrapper';

const SectionMinimal = ({
  background,
  children,
  bgStaticCenter,
  customCss,
  ...rest
}) => {
  return (
    <Section
      className={css({
        backgroundImage: `url(${background || ''})`,
        ...customCss,
      })}
      {...rest}
    >
      <Wrapper>
        {children}
      </Wrapper>
    </Section>
  );
}

export default SectionMinimal;