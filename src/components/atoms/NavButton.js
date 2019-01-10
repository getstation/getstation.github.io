import React from 'react';
import styled from 'react-emotion';
import { css } from 'emotion';
import * as color from '../../styles/colors';
import * as transition from '../../styles/transitions';
import { mqNavMobile, mqNavDesktop } from '../../styles/breackpoint';
import { rem } from 'polished';

const Box = styled('button')`
  ${[mqNavMobile]} {
    cursor: pointer;
    position: absolute;
    right: 0;
    top: ${rem(18)};
    border: none;
    background: none;
    line-height: 1;
    height: ${rem(40)};
    padding: 0 ${rem(20)};
  }
  ${[mqNavDesktop]} {
    display: none;
  }
  span {
    display: block;
    width: ${rem(20)};
    height: ${rem(2)};
    background: ${color.neutralDark};
    transition: all 0.3s ${transition.base};
    border-radius: ${rem(666)};
    &:not(:first-child) {
      margin-top: ${rem(5)};
    }

    &:nth-child(1) {
      transform: ${props =>
        props.open
          ? `translateY(${rem(7)}) rotate(45deg)`
          : 'translateY(0) rotate(0)'};
    }
    &:nth-child(2) {
      transform: ${props => (props.open ? 'rotateY(90deg)' : 'rotateY(0)')};
    }
    &:nth-child(3) {
      transform: ${props =>
        props.open
          ? `translateY(-${rem(7)}) rotate(-45deg)`
          : 'translateY(0) rotate(0)'};
    }
  }
`;

const NavButton = ({ onClick, open }) => {
  return (
    <Box onClick={() => onClick()} open={open}>
      <span />
      <span />
      <span />
      <span
        className={css({
          position: 'absolute !important',
          overflow: 'hidden !important',
          clip: 'rect(0, 0, 0, 0)!important',
          width: '1px !important',
          height: '1px !important',
          margin: '-1px',
          padding: '0 !important',
          border: '0 !important',
        })}
      >
        Menu
      </span>
    </Box>
  );
};

export default NavButton;
