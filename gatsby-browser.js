/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import React from "react"
import { ApolloProvider } from 'react-apollo';

import { client } from './src/utils/apollo';
import { checkSession } from "./src/utils/auth"

class SessionCheck extends React.Component {
  construct() {
    this.state = { loading: true };
  }

  handleCheckSession() {
    this.setState({ loading: false })
  }

  componentWillMount() {
    checkSession(() => this.handleCheckSession())
  }

  render() {
    return (
      this.state.loading === false && (
        <React.Fragment>{this.props.children}</React.Fragment>
      )
    )
  }
}

export const wrapRootElement = ({ element }) => {
  return (
    <SessionCheck>
      <ApolloProvider client={client}>
        {element}
      </ApolloProvider>
    </SessionCheck>
  );
};
