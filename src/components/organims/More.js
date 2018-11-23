import React from 'react';
import styled from 'react-emotion';
import { css } from 'emotion';
import { rem } from 'polished';
import SectionBase from '../molecules/SectionBase';
import Button from '../atoms/Button';
import { mqMin, mqMax } from '../../styles/breackpoint';
import * as font from '../../styles/fonts';
import * as color from '../../styles/colors';

const Box = styled('div')`
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
  ${mqMax[1]} {
    padding-top: ${rem(34)};
  }
  ${mqMin[1]} {
    display: flex;
    flex-wrap: wrap;
    margin-left: ${rem(-20)};
    margin-right: ${rem(-20)};
    > * {
      margin: ${rem(20)};
      width: calc(33.333% - ${rem(20 * 2)});
    }
  }
  ${mqMin[2]} {
    margin-left: ${rem(-45)};
    margin-right: ${rem(-45)};
    > * {
      margin: ${rem(45)};
      width: calc(33.333% - ${rem(45 * 2)});
    }
  }
`;

const Footer = ({ button, url = '/' }) =>
  button && (
    <Button to={url} size="L" theme="ghost">
      {button}
    </Button>
  );

const More = ({ title, data, button, buttonUrl, ...rest }) => {
  return (
    <SectionBase
      title={title}
      footer={button && buttonUrl && <Footer button={button} url={buttonUrl} />}
      {...rest}
    >
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
    </SectionBase>
  );
};

export default More;
