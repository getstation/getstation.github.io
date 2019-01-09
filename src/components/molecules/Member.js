import React from 'react';
import styled from 'react-emotion';
import { css } from 'emotion';
import { rem } from 'polished';
import Icon from '../atoms/Icon';
import * as font from '../../styles/fonts.js';
import * as color from '../../styles/colors';
import * as transition from '../../styles/transitions';
import { mqMin } from '../../styles/breackpoint';

const Box = styled('div')`
  text-align: center;
`;

const Thumb = styled('div')`
  width: ${rem(160)};
  height: ${rem(160)};
  overflow: hidden;
  border-radius: ${rem(666)};
  background-size: cover;
  margin-left: auto;
  margin-right: auto;
  &:not(:last-child) {
    margin-bottom: ${rem(20)};
  }
`;

const Name = styled('div')`
  font-weight: ${font.weightBold};
  font-size: ${rem(16)};
  ${mqMin[1]} {
    font-size: ${rem(18)};
  }
  ${mqMin[2]} {
    font-size: ${rem(20)};
  }
`;

const Job = styled('div')`
  font-size: ${rem(14)};
  color: ${color.neutral};
  ${mqMin[1]} {
    font-size: ${rem(16)};
  }
  ${mqMin[2]} {
    font-size: ${rem(18)};
  }
`;

const Divider = styled('div')`
  width: 87px;
  height: 3px;
  border-radius: 3px;
  background-color: #66c6ed;
  margin: ${rem(20)} auto;
`;

const Links = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Link = styled('a')`
  display: block;
  transition: transform 0.2s ${transition.base};
  &:not(:first-child) {
    margin-left: ${rem(10)};
  }
  &:hover {
    transform: translateY(${rem(-2)});
  }
`;

const Member = ({
  thumb,
  name,
  job,
  twitter,
  instagram,
  personalLink,
  linkedin,
  facebook,
  github,
  ...rest
}) => (
  <Box {...rest}>
    {thumb && <Thumb className={css({ backgroundImage: `url(${thumb})` })} />}
    {name && <Name>{name}</Name>}
    {name && <Job>{job}</Job>}
    <Divider />
    <Links>
      {twitter && (
        <Link href={twitter} target="_blank">
          <Icon type="twitter" color="clr1" size={30} />
        </Link>
      )}
      {instagram && (
        <Link href={instagram} target="_blank">
          <Icon type="instagram" color="clr1" size={30} />
        </Link>
      )}
      {facebook && (
        <Link href={facebook} target="_blank">
          <Icon type="facebook" color="clr1" size={30} />
        </Link>
      )}
      {linkedin && (
        <Link href={linkedin} target="_blank">
          <Icon type="linkedin" color="clr1" size={30} />
        </Link>
      )}
      {personalLink && (
        <Link href={personalLink} target="_blank">
          <Icon type="link" color="clr1" size={30} />
        </Link>
      )}
      {github && (
        <Link href={github} target="_blank">
          <Icon type="github" color="clr1" size={30} />
        </Link>
      )}
    </Links>
  </Box>
);

export default Member;
