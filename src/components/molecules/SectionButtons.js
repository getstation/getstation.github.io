import React from 'react';
import slugify from 'slugify';
import { Link } from 'gatsby';
import styled from 'react-emotion';
import { rem } from 'polished';
import Button from '../atoms/Button.js';
import { mqMin, mqMax } from '../../styles/breackpoint';

const Box = styled('div')`
  text-align: center;
  margin-top: ${rem(60)};
  overflow: hidden;
`;

const Grid = styled('div')`
  ${mqMax[0]} {
    text-align: center;
    > * {
      &:not(:first-child) {
        margin-top: ${rem(40)};
      }
    }
  }
  ${mqMin[0]} {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: ${rem(-20)};
    > * {
      margin: ${rem(40)};
    }
  }
  ${mqMin[1]} {
    margin: ${rem(-40)};
    > * {
      margin: ${rem(80)};
    }
  }
`;

const Card = ({ data, ...rest }) => {
  return (
    <Box {...rest}>
      {data && (
        <Grid>
          {data.map((item, index) => (
            <div key={`${index}-${slugify(item.text, { lower: true })}`}>
              <Button
                to={item.url || '/'}
                theme={item.theme}
                size="L"
                data-aos-delay={index * 100}
                data-aos="zoom-in"
                element={item.type === 'internal' ? Link : 'a'}
                shadow={item.theme === 'primary' ? true : false}
              >
                {item.text}
              </Button>
            </div>
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default Card;
