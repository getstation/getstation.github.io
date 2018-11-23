import React from 'react';
import styled from 'react-emotion';
import { css } from 'emotion';
import { rem } from 'polished';
import Title from '../atoms/Title';
import Wrapper from '../layout/Wrapper';
import Button from '../atoms/Button';
import { mqMin, mqMax } from '../../styles/breackpoint';
import * as font from '../../styles/fonts';
import * as color from '../../styles/colors';

const Section = styled('div')`
  text-align: center;
  padding: ${rem(60)} 0;
  ${mqMin[1]} {
    padding: ${rem(100)} 0;
  }
`;

const Box = styled('div')`
  padding: ${rem(30)};
  background: ${color.light};
  box-shadow: 0 7px 25px 0 rgba(48, 112, 205, 0.1),
    0 0 1px 0 rgba(48, 112, 205, 0.1);
  border-radius: ${rem(14)};
  ${mqMax[1]} {
    margin-top: ${rem(60)};
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
  margin-bottom: ${rem(60)};
  ${mqMin[1]} {
    display: flex;
    flex-wrap: wrap;
    margin: ${rem(60)} ${rem(-20)};
    > * {
      margin: ${rem(20)};
      width: calc(33.333% - ${rem(20 * 2)});
    }
  }
  ${mqMin[2]} {
    margin-top: ${rem(75)};
    margin-bottom: ${rem(55)};
    margin-left: ${rem(-45)};
    margin-right: ${rem(-45)};
    > * {
      margin: ${rem(45)};
      width: calc(33.333% - ${rem(45 * 2)});
    }
  }
`;

const Line = styled('div')`
  display: inline-block;
  width: ${rem(87)};
  height: ${rem(3)};
  border-radius: ${rem(666)};
  background-color: ${color.clr4};
`;

const More = ({ title, data, button, ...rest }) => {
  return (
    <Section {...rest}>
      <Wrapper className={css({ overflow: 'hidden' })}>
        {title && (
          <React.Fragment>
            <Title
              element="h2"
              className={css({
                fontSize: font.XXL,
                [[mqMin[2]]]: {
                  fontSize: rem(34),
                },
              })}
            >
              {title}
            </Title>
            <Line />
          </React.Fragment>
        )}
        {data && (
          <Grid>
            {data.map(
              (item, index) =>
                item.image.url && (
                  <Box key={`${index}-more-data`}>
                    {item.image.url && (
                      <img
                        src={item.image.url}
                        width={84}
                        height={84}
                        alt=""
                        className={css({
                          marginTop: rem(-84),
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
        )}
        {button && (
          <Button to="/" size="L" theme="ghost">
            {button}
          </Button>
        )}
      </Wrapper>
    </Section>
  );
};

export default More;
