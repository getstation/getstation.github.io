import React from 'react';
import styled from 'react-emotion';
import { css, cx } from 'emotion';
import { mqMin } from '../../styles/breackpoint';
import { rem } from 'polished';
import slugify from 'slugify';
import TextBigger from '../atoms/TextBigger';
import Button from '../atoms/Button';
import Member from '../molecules/Member';
import Wrapper from '../layout/Wrapper';

const Grid = styled('div')`
  padding-top: ${rem(60)};
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: ${rem(60)};
  ${mqMin[0]} {
    grid-template-columns: repeat(2, 1fr);
  }
  ${mqMin[1]} {
    grid-template-columns: repeat(3, 1fr);
    grid-gap: ${rem(80)};
  }
  ${mqMin[2]} {
    grid-template-columns: repeat(4, 1fr);
    grid-gap: ${rem(100)};
  }
`;

const TeamSection1 = ({ text, button, members, className, ...rest }) => (
  <div
    className={cx(
      css({
        padding: `${rem(70)} 0`,
      }),
      className,
    )}
    {...rest}
  >
    <Wrapper>
      {text && (
        <div className={css({ paddingBottom: rem(30) })}>
          <TextBigger dangerouslySetInnerHTML={{ __html: text }} />
        </div>
      )}
      {button.url && button.text && (
        <div className={css({ textAlign: 'center' })}>
          <Button
            to={button.url}
            theme={button.theme}
            type={button.type}
            size="L"
          >
            {button.text}
          </Button>
        </div>
      )}
      {members && (
        <Grid>
          {members.map((item, index) => (
            <Member
              key={`${index}-${slugify(item.name, { lower: true })}`}
              thumb={item.thumb.url}
              name={item.name}
              job={item.job}
              twitter={item.twitter}
              instagram={item.instagram}
              github={item.github}
              personalLink={item.personal_link}
            />
          ))}
        </Grid>
      )}
    </Wrapper>
  </div>
);

export default TeamSection1;
