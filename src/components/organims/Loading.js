import React from 'react';
import { css } from 'emotion'
import Lottie from 'react-lottie';
import AppMinimal from '../../components/layout/AppMinimal';

const animationData = require('../../animations/preloader-animation.json');

const optionsLoading = {
  loop: true,
  autoplay: true,
  animationData,
};


const loadingContainer = css`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Loading = () =>(
  <AppMinimal>
    <div className={loadingContainer}>
      <Lottie
        options={optionsLoading}
        height={230}
        width={400}
      />
    </div>
  </AppMinimal>
)