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
      {button.top.url && button.top.text && (
        <div className={css({ textAlign: 'center' })}>
          <Button
            to={button.top.url}
            theme={button.top.theme}
            type={button.top.type}
            size="L"
            className={button.top.tracking}
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
              data-aos="fade"
              data-aos-duration="700"
              data-aos-easing="ease-in-sine"
              data-aos-delay={index * 200}
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
      {button.bottom.url && button.bottom.text && (
        <div className={css({ textAlign: 'center' })}>
          <Button
            to={button.bottom.url}
            theme={button.bottom.theme}
            type={button.bottom.type}
            size="L"
            className={button.bottom.tracking}
          >
            {button.bottom.text}
          </Button>
        </div>
      )}
    </Wrapper>
  </div>
);

export default TeamSection1;
