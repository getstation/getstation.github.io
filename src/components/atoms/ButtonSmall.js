import styled from 'react-emotion';
import { rem } from 'polished';
import * as color from '../../styles/colors';
import * as font from '../../styles/fonts';
import * as transition from '../../styles/transitions';

const ButtonSmall = styled('button')`
  cursor: pointer;
  line-height: ${rem(23)};
  height: ${rem(23)};
  border: none;
  padding: 0 ${rem(10)};
  font-size: ${rem(14)};
  font-weight: ${font.weightMedium};
  background: ${props => (props.active ? color.neutralLighter : color.light)};
  color: ${props => (props.active ? color.neutralLight : color.neutral)};
  border-radius: ${rem(5)};
  transition: all 0.3s ${transition.base};
  box-shadow: ${props =>
    props.active
      ? 'none'
      : '0 0 1px 0 rgba(0, 0, 0, 0.2), 0 7px 25px 0 rgba(0, 0, 0, 0.03), 0 4px 12px 0 rgba(0, 0, 0, 0.08)'};
  transform: ${props => (props.active ? 'translateY(-1px)' : 'translateY(0)')};
`;

export default ButtonSmall;
