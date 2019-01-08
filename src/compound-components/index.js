import React, { Component } from 'react';
import Button from '../components/Button';

class Auth extends Component {
  static Authorized = ({ auth, children }) => auth && children;
  static UnAuthorized = ({ auth, children }) => (auth ? null : children);
  static Button = ({ toggle, auth, ...props }) => (
    <Button onClick={toggle} {...props} auth={auth}>
      {!auth && 'un'}auth
    </Button>
  );
  state = {
    auth: false
  };
  toggle = () => {
    this.setState(prevState => ({
      auth: !prevState.auth
    }));
  };

  render() {
    const { auth } = this.state;

    return React.Children.map(this.props.children, child =>
      React.cloneElement(child, {
        auth,
        toggle: this.toggle
      })
    );
  }
}

export default () => (
  <Auth>
    <Auth.Authorized>You are authorized</Auth.Authorized>
    <Auth.UnAuthorized>You are not authorized</Auth.UnAuthorized>
    <Auth.Button />
  </Auth>
);
