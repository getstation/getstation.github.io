import Button from '../atoms/Button';
import { Link } from 'gatsby';
import React from 'react';
import PropTypes from 'prop-types';

class DeleteAccountButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { deleting: false };
    this.onClickButton = this.onClickButton.bind(this);
  }

  onClickButton(e) {
    e.preventDefault();
    this.setState({ deleting: true });
    this.props.method().then(() => {
      this.setState({ deleting: false });
    });
  }

  render() {
    const buttonText = this.state.deleting ? 'Account deletion...' : this.props.children;

    return (
      <Button
        disabled={this.state.deleting}
        onClick={this.onClickButton}
        to="/"
        element={Link}
        size={'L'}
        shadow={true}
        theme="danger"
      >
        {buttonText}
      </Button>
    );
  }
}

DeleteAccountButton.propTypes = {
  children: PropTypes.string.isRequired, // button text
  method: PropTypes.func.isRequired, // should return a promise
};

export default DeleteAccountButton

