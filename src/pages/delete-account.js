import React from 'react';

import { css } from 'emotion';
import AppMinimal from '../components/layout/AppMinimal';
import Seo from '../components/molecules/Seo';

import PrivacyBox from '../components/organims/PrivacyBox';
import SectionMinimal from '../components/molecules/SectionMinimal';
import Title from '../components/atoms/Title';

// remove me when back on
const Unavailable = () => (
  <SectionMinimal>
    <Title element="h1">
      This feature is momentarily unavailable. Please come back in a few days.
    </Title>
  </SectionMinimal>
);

class Privacy extends React.Component {
  constructor(props) {
    super(props);

    // Init State
    this.state = {
      isClient: false,
    };

  }

  componentDidMount() {
    this.setState({
      isClient: true,
    });
  }

  render() {
    const { isClient } = this.state;

    if (isClient) {
      return (
        <AppMinimal>
          <Seo
            title="Station • Privacy access"
            description="Manage your personal data on Station"
          />
          {/* <Unavailable /> */}
          <PrivacyBox></PrivacyBox>
        </AppMinimal>
      );
    }

    return (
      <p>Loading...</p>
    );
  }
}

export default Privacy;
