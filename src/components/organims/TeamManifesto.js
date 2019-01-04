import React from 'react';
import styled from 'react-emotion';
import slugify from 'slugify';
import { css } from 'emotion';
import { rem } from 'polished';
import Wrapper from '../layout/Wrapper';
import Button from '../atoms/Button';
import { mqMin } from '../../styles/breackpoint';
import * as font from '../../styles/fonts.js';
import * as color from '../../styles/colors';

const Box = styled('div')`
  padding: ${rem(120)} 0 ${rem(50)};
  border-top: 1px solid #a1d3ff;
  border-bottom: 1px solid #a1d3ff;
  background-image: linear-gradient(to top, #e9f3fd, #ffffff);
`;

const Grid = styled('div')`
  ${mqMin[0]} {
    display: grid;
    grid-gap: ${rem(20)};
    grid-template-columns: repeat(1, 1fr);
  }
  ${mqMin[1]} {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: ${rem(80)};
  }
  &:not(:first-child) {
    margin-top: ${rem(70)};
    ${mqMin[1]} {
      margin-top: ${rem(100)};
    }
    ${mqMin[2]} {
      margin-top: ${rem(140)};
    }
  }
`;

const Title = styled('h2')`
  text-transform: uppercase;
  font-weight: ${font.weightMedium};
  ${mqMin[1]} {
    font-size: ${rem(18)};
  }
  ${mqMin[2]} {
    font-size: ${rem(20)};
  }
`;

const SubTitle = styled('div')`
  font-weight: ${font.weightMedium};
  font-size: ${rem(20)};
  ${mqMin[1]} {
    font-size: ${rem(26)};
  }
  ${mqMin[2]} {
    font-size: ${rem(30)};
  }
`;

const Content = styled('div')`
  color: ${color.neutralLight};
  font-weight: ${font.weightMedium};
  max-width: ${rem(480)};
  ${mqMin[1]} {
    font-size: ${rem(20)};
  }
  * + * {
    margin-top: ${rem(20)};
  }
`;

const ManifestoItem = ({ title, titleColor, subtitle, content, ...rest }) => (
  <Grid {...rest}>
    <div>
      {title && <Title className={css({ color: titleColor })}>{title}</Title>}
      {subtitle && <SubTitle>{subtitle}</SubTitle>}
    </div>
    <div>
      <Content dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  </Grid>
);

const TeamManifesto = ({ data, button, ...rest }) => (
  <Box {...rest}>
    <Wrapper>
      {data.map((item, index) => (
        <ManifestoItem
          key={`${index}-${slugify(item.title, { lower: true })}`}
          title={item.title}
          titleColor={item.title_color}
          subtitle={item.subtitle}
          content={item.content.html}
        />
      ))}
      {button.url && button.text && (
        <div
          className={css({
            textAlign: 'center',
            margin: `${rem(100)} 0 0`,
          })}
        >
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
    </Wrapper>
  </Box>
);

export default TeamManifesto;
