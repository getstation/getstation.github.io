import React from 'react';

class AppNumber extends React.Component {
  state = {
    number: 600,
  };
  componentDidMount() {
    fetch('https://api.getstation.com/graphql', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query: '{ applicationsConnection { totalCount } }' }),
    })
      .then(res => res.json())
      .then(res =>
        this.setState({ number: res.data.applicationsConnection.totalCount }),
      );
  }
  render() {
    return <span>{Math.ceil(this.state.number / 10) * 10}+</span>;
  }
}

export default AppNumber;
