import Button from '../atoms/Button';
import { Link } from 'gatsby';
import React from 'react';
import PropTypes from 'prop-types';

class DeleteAccountButton extends React.Component {
  constructor(props) {
    super(props);
    this.onClickButton = this.onClickButton.bind(this);
  }

  onClickButton(e) {
    e.preventDefault();
    this.props.onClick();
  }

  render() {
    const buttonText = this.props.children;

    return (
      <Button
        disabled={this.props.disabled}
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
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};

export default DeleteAccountButton

