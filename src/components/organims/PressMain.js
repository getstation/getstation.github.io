import React from 'react';
import Wrapper from '../layout/Wrapper';
import PressMainContentText from '../organims/PressMainContentText';

const PressMain = ({ data, ...rest }) => {
  return (
    <div {...rest}>
      <Wrapper>
        <PressMainContentText items={data.content.text} />
      </Wrapper>
    </div>
  );
};

export default PressMain;
