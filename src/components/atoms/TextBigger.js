import styled from 'react-emotion';
import { rem } from 'polished';
import { mqMin } from '../../styles/breackpoint';
import * as color from '../../styles/colors';

const TextBigger = styled('div')`
  text-align: center;
  max-width: ${rem(670)};
  margin: 0 auto;
  color: ${color.neutralLight};
  font-size: ${rem(16)};
  ${mqMin[0]} {
    font-size: ${rem(18)};
  }
  ${mqMin[1]} {
    font-size: ${rem(20)};
  }
`;

export default TextBigger;
