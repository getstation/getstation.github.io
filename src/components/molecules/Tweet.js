import React from 'react';
import styled from 'react-emotion';
import { rem } from 'polished';
import truncate from 'truncate';
import { mqMin } from '../../styles/breackpoint';
import * as font from '../../styles/fonts';
import * as color from '../../styles/colors';
import bird from '../../images/twitter.svg';

const Box = styled('a')`
  display: block;
  border-radius: 11px;
  box-shadow: 0 0 1px 0 rgba(21, 76, 94, 0.2),
    0 7px 25px 0 rgba(32, 106, 130, 0.43), 0 4px 12px 0 rgba(30, 95, 116, 0.09);
  background: ${color.light} url(${bird}) right ${rem(20)} bottom ${rem(20)}
    no-repeat;
  ${[mqMin[1]]} {
    background: ${color.light} url(${bird}) right ${rem(20)} top ${rem(20)}
      no-repeat;
  }
`;

const BoxBody = styled('div')`
  padding: ${rem(20)};
`;

const BoxHead = styled('div')`
  display: flex;
  align-items: center;
  padding: ${rem(20)};
  + ${BoxBody} {
    padding-top: 0;
  }
`;

const Thumb = styled('div')`
  flex-shrink: 0;
  padding-right: ${rem(10)};
  div {
    width: ${rem(42)};
    height: ${rem(42)};
    border-radius: 50%;
    background-size: cover;
  }
`;

const FullName = styled('div')`
  color: #3070cd;
  font-size: ${rem(16)};
  font-weight: ${font.weightBold};
  white-space: nowrap;
`;

const UserName = styled('div')`
  color: ${color.neutralLight};
  font-size: ${rem(14)};
`;

const Content = styled('div')`
  color: ${color.neutralDark};
  line-height: ${font.lineHeightL};
  font-size: ${rem(14)};
  strong {
    color: #3070cd;
  }
  &:not(:last-child) {
    margin-bottom: ${rem(10)};
  }
`;

const Date = styled('div')`
  color: ${color.neutralLight};
  font-size: ${rem(14)};
`;

const Tweet = ({ url, thumb, fullName, userName, content, date, ...rest }) => (
  <Box href={url} target="_blank" {...rest}>
    <BoxHead>
      {thumb && (
        <Thumb>
          <div style={{ backgroundImage: `url(${thumb})` }} />
        </Thumb>
      )}
      <div>
        {fullName && <FullName>{truncate(fullName, 14)}</FullName>}
        {userName && <UserName>{truncate(userName, 20)}</UserName>}
      </div>
    </BoxHead>
    <BoxBody>
      {content && <Content dangerouslySetInnerHTML={{ __html: content }} />}
      {date && <Date>{truncate(date, 28)}</Date>}
    </BoxBody>
  </Box>
);

export default Tweet;
