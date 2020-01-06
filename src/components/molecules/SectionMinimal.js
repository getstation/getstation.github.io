import React from 'react';
import { css } from 'emotion';

import Section from '../layout/Section';
import Wrapper from '../layout/Wrapper';

const SectionMinimal = ({
  background,
  children,
  bgStaticCenter,
  customCss,
  wrapperClassname,
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
      <Wrapper className={wrapperClassname}>
        {children}
      </Wrapper>
    </Section>
  );
}

export default SectionMinimal;