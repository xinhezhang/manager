import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import {
  emailChanged,
  passwordChanged,
  signupUser,
  loginUser,
} from '../actions';
import { Card, CardSection, Input, Button, Spinner } from './common';

class LoginForm extends Component {
  onEmailChange = (text) => {
    this.props.emailChanged(text);
  }

  onPasswordChange = (text) => {
    this.props.passwordChanged(text);
  }

  onSignupButtonPress = () => {
    const { email, password } = this.props;
    this.props.signupUser({ email, password });  // MUST be a object
  }

  onLoginButtonPress = () => {
    const { email, password } = this.props;
    this.props.loginUser({ email, password });  // MUST be a object
  }

  renderSignupButton = () => {
    if (this.props.signupLoading) {
      return <Spinner size="large" />;
    }

    return (
      <Button onPress={this.onSignupButtonPress}>
        Signup
      </Button>
    );
  }

  renderLoginButton = () => {
    if (this.props.loginLoading) {
      return <Spinner size="large" />;
    }

    return (
      <Button onPress={this.onLoginButtonPress}>
        Login
      </Button>
    );
  }

  renderMessage = () => {
    const { viewStyle, errorTextStyle, messageTextStyle } = styles;

    if (this.props.error) {
      return (
        <View style={viewStyle}>
          <Text style={errorTextStyle}>
            {this.props.error}
          </Text>
        </View>
      );
    } else if (this.props.message) {
      return (
        <View style={viewStyle}>
          <Text style={messageTextStyle}>
            {this.props.message}
          </Text>
        </View>
      );
    }
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label='Email'
            placeholder='test@gmail.com'
            onChangeText={this.onEmailChange}
            value={this.props.email}
          />
        </CardSection>

        <CardSection>
          <Input
            secureTextEntry
            label='Password'
            placeholder='password'
            onChangeText={this.onPasswordChange}
            value={this.props.password}
          />
        </CardSection>

        {this.renderMessage()}

        <CardSection>
          {this.renderSignupButton()}
          {this.renderLoginButton()}
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  viewStyle: {
    backgroundColor: 'white',
  },
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red',
  },
  messageTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'green',
  },
};

// We now have access to "this.props.email"
const mapStateToProps = ({ auth }) => {
  const { email, password, error, message, loginLoading, signupLoading } = auth;

  return { email, password, error, message, loginLoading, signupLoading };
};

export default connect(mapStateToProps, {
  emailChanged,
  passwordChanged,
  signupUser,
  loginUser,
})(LoginForm);
