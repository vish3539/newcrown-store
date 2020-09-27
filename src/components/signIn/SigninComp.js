import React, { Component } from "react";
import FormInputComp from '../FormInput/FormInputComp';
import './SigninStyles.scss'
import CustomButtonComp from "../CustomButton/CustomButtonComp";

class SigninComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }
// form takes care of this
  handleSubmit = event => {
    event.preventDefault();
    this.setState({
      email: "",
      password: ""
    });
  };
// the input field uses this.
  handleChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and Password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInputComp
            name="email"
            type="email"
            label = 'email'
            value={this.state.email}
            handleChange={this.handleChange}
            required
          />
          <FormInputComp
            name="password"
            type="password"
            label= 'password'
            value={this.state.password}
            handleChange={this.handleChange}
            required
          />

          <CustomButtonComp type="submit">Sign In</CustomButtonComp>
        </form>
      </div>
    );
  }
}

export default SigninComp;
