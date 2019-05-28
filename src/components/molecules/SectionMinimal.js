import React from 'react';
import { css } from 'emotion';

import Section from '../layout/Section';
import Wrapper from '../layout/Wrapper';

const SectionMinimal = ({
  background,
  children,
  bgStaticCenter,
  ...rest
}) => {
  return (
    <Section
      className={css`
        background-image: url(${background || ''});
        ${ bgStaticCenter
          ? 'background-position: center 330px; background-size: auto;'
          : ''
        }
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