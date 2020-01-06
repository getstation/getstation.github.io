import React from 'react';

import AppMinimal from '../components/layout/AppMinimal';
import Seo from '../components/molecules/Seo';

import PrivacyBox from '../components/organims/PrivacyBox';

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
