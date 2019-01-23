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
  padding-top: ${rem(100)};
  margin-left: auto;
  margin-right: auto;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: ${rem(60)};
  max-width: ${rem(980)};
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
        padding: `${rem(70)} 0 ${rem(140)}`,
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
      {button.top.url && button.top.text && (
        <div className={css({ textAlign: 'center' })}>
          <Button
            to={button.top.url}
            theme={button.top.theme}
            type={button.top.type}
            size="L"
            className={button.top.tracking}
            target={button.top.type === 'external' ? '_blank' : null}
            rel={button.top.type === 'external' ? 'noreferrer' : null}
          >
            {button.top.text}
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
              linkedin={item.linkedin}
              facebook={item.facebook}
              personalLink={item.personal_link}
            />
          ))}
        </Grid>
      )}
      {button.bottom.url && button.bottom.text && (
        <div className={css({ textAlign: 'center', marginTop: rem(100) })}>
          <Button
            to={button.bottom.url}
            theme={button.bottom.theme}
            type={button.bottom.type}
            size="L"
            className={button.bottom.tracking}
            target={button.bottom.type === 'external' ? '_blank' : null}
            rel={button.bottom.type === 'external' ? 'noreferrer' : null}
          >
            {button.bottom.text}
          </Button>
        </div>
      )}
    </Wrapper>
  </div>
);

export default TeamSection1;
