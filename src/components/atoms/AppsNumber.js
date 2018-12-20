import React from 'react';

class AppNumber extends React.Component {
  state = {
    number: '600+',
  };
  componentDidMount() {
    fetch('https://api.getstation.com/graphql', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query: '{ servicesConnection { totalCount } }' }),
    })
      .then(res => res.json())
      .then(res =>
        this.setState({ number: res.data.servicesConnection.totalCount }),
      );
  }
  render() {
    return <span>{Math.ceil(this.state.number / 10) * 10 - 10}+</span>;
  }
}

export default AppNumber;
