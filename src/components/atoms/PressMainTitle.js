import styled from 'react-emotion';
import { rem } from 'polished';
import * as font from '../../styles/fonts';
import { mqMin } from '../../styles/breackpoint';

const PressMainTitle = styled('h3')`
  font-weight: ${font.weightBold};
  font-size: ${rem(18)};
  ${[mqMin[1]]} {
    font-size: ${rem(20)};
  }
  &:not(:last-child) {
    margin-bottom: ${rem(15)};
  }
`;

export default PressMainTitle;
