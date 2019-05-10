import Button from '../atoms/Button';
import { Link } from 'gatsby';
import React from 'react';
import PropTypes from 'prop-types';

class DeleteAccountButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { done: false, deleting: false };
    this.onClickButton = this.onClickButton.bind(this);
  }

  onClickButton(e) {
    e.preventDefault();
    this.setState({ deleting: true });
    this.props.method().then(() => {
      this.setState({ deleting: false, done: true });
    });
  }

  render() {
    let buttonText = this.props.children;
    if (this.state.deleting) buttonText = 'Account deletion...';
    if (this.state.done) buttonText = 'Done';

    return (
      <Button
        disabled={this.state.deleting || this.state.done}
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

