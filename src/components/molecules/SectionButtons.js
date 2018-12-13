import React from 'react';
import slugify from 'slugify';
import { Link } from 'gatsby';
import styled from 'react-emotion';
import { rem } from 'polished';
import Button from '../atoms/Button.js';
import { mqMin, mqMax } from '../../styles/breackpoint';

const Box = styled('div')`
  text-align: center;
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
      &:not(:first-child) {
        margin: ${rem(40)};
      }
    }
  }
  ${mqMin[1]} {
    margin: ${rem(-40)};
    > * {
      &:not(:first-child) {
        margin-left: ${rem(80)};
      }
    }
  }
`;

const Card = ({ data, ...rest }) => {
  console.log(data);
  return (
    <Box {...rest}>
      {data && (
        <Grid>
          {data.map((item, index) => (
            <div key={`${index}-${slugify(item.text, { lower: true })}`}>
              <Button
                to={item.url}
                theme={item.theme}
                size="L"
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
