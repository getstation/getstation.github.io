import React from 'react';
import { css } from 'emotion';
import { rem } from 'polished';
import { graphql } from 'gatsby';
import App from '../components/layout/App';
import Hero from '../components/organims/Hero';
import Button from '../components/atoms/Button';

const Presskit = props => {
  const DATA = props.data.press.data;
  return (
    <App>
      <Hero
        title={DATA.hero_title}
        subtitle={DATA.hero_baseline}
        gradient={{
          top: DATA.hero_gradient_top,
          bottom: DATA.hero_gradient_bottom,
        }}
      />
      <div
        className={css({
          position: 'relative',
          zIndex: 2,
          textAlign: 'center',
          marginTop: rem(-60),
        })}
      >
        <Button
          type="external"
          to="http://google.fr"
          size="L"
          theme="light"
          shadow
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="24"
            viewBox="0 0 22 24"
          >
            <path
              d="M9.7 13.7V1.5C9.7.7 10.3 0 11 0s1.4.7 1.4 1.5v12.1l2.8-2.6c.5-.5 1.3-.5 1.8.1.2.2.4.6.3.9s-.1.8-.3 1l-4.8 4.6c-.3.3-.7.5-1.1.4-.4 0-.8-.1-1.1-.4L5.1 13c-.2-.2-.4-.6-.4-.9 0-.4.1-.7.3-.9.5-.5 1.3-.6 1.8-.1l2.9 2.6zM1.4 21h19.2c.8 0 1.4.7 1.4 1.5s-.6 1.5-1.4 1.5H1.4C.6 24 0 23.3 0 22.5S.6 21 1.4 21z"
              fill="#3070cd"
            />
          </svg>
          <span>Download Press Kit</span>
        </Button>
      </div>
    </App>
  );
};

export default Presskit;
export const pageQuery = graphql`
  query presskitQuery {
    press: prismicPress {
      data {
        hero_title
        hero_baseline
        hero_gradient_top
        hero_gradient_bottom
      }
    }
  }
`;
