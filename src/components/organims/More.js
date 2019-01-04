import React from 'react';
import styled from 'react-emotion';
import { css } from 'emotion';
import { Link } from 'gatsby';
import { rem } from 'polished';
import SectionBase from '../molecules/SectionBase';
import Button from '../atoms/Button';
import Wrapper from '../layout/Wrapper';
import { mqMin, mqMax } from '../../styles/breackpoint';
import * as font from '../../styles/fonts';
import * as color from '../../styles/colors';

const Box = styled('div')`
  text-align: center;
  padding: ${rem(30)};
  background: ${color.light};
  box-shadow: 0 7px 25px 0 rgba(48, 112, 205, 0.1),
    0 0 1px 0 rgba(48, 112, 205, 0.1);
  border-radius: ${rem(14)};
  ${mqMax[1]} {
    &:not(:first-child) {
      margin-top: ${rem(60)};
    }
  }
  ${mqMin[1]} {
    margin-top: ${rem(30)};
  }
`;

const BoxTitle = styled('h3')`
  color: ${color.clr1};
  font-weight: ${font.weightBold};
  font-size: ${font.M};
  &:not(:first-child) {
    margin-bottom: ${rem(10)};
  }
  ${mqMin[1]} {
    font-size: ${font.L};
  }
`;

const BoxContent = styled('p')`
  ${mqMax[1]} {
    font-size: ${font.S};
  }
  color: ${color.neutralLight};
  line-height: ${font.lineHeightXL};
`;

const Grid = styled('div')`
  ${mqMin[1]} {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: ${rem(20)};
  }
  ${mqMin[2]} {
    grid-gap: ${rem(90)};
  }
`;

const More = ({ title, data, button, ...rest }) => {
  return (
    <SectionBase
      title={title}
      footer={
        button.text &&
        button.url && (
          <Button
            to={button.url}
            size="L"
            theme="ghost"
            className={button.tracking}
            element={button.type === 'internal' ? Link : 'a'}
            data-aos="fade"
          >
            {button.text}
          </Button>
        )
      }
      {...rest}
    >
      {data && (
        <Wrapper>
          <Grid>
            {data.map(
              (item, index) =>
                item.image.url && (
                  <Box
                    key={`${index}-more-data`}
                    data-aos="fade"
                    data-aos-delay={index * 200}
                  >
                    {item.image.url && (
                      <img
                        src={item.image.url}
                        width={84}
                        height={84}
                        alt=""
                        className={css({
                          marginTop: -item.image.dimensions.height,
                          transform: `translateY(${rem(-15)})`,
                        })}
                      />
                    )}

                    {item.title && <BoxTitle>{item.title}</BoxTitle>}
                    {item.content && <BoxContent>{item.content}</BoxContent>}
                  </Box>
                ),
            )}
          </Grid>
        </Wrapper>
      )}
    </SectionBase>
  );
};

export default More;
