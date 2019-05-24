import React from 'react';
import { css } from 'emotion';

import Section from '../layout/Section';
import Wrapper from '../layout/Wrapper';

const SectionMinimal = ({
  background,
  children,
  ...rest
}) => {
  return (
    <Section
      className={css`
        background-image: url(${background || ''});
      `}
      {...rest}
    >
      <Wrapper>
        {children}
      </Wrapper>
    </Section>
  );
}

export default SectionMinimal;