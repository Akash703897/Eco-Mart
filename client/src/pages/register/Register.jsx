import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import { connect } from "react-redux";
import ModalShowError from "../../helpers/ModalShowError";
import withRouter from "../../helpers/withRouter";
import { setError, setMessage } from "../../redux/actions/commonAction";
import { insertUser } from "../../redux/actions/userAction";
import "./Register.css";
class Register extends Component {
  constructor() {
    super();
    this.state = {
      user: {
        name: "",
        userName: "",
        password: "",
        email: "",
        phoneNumber: "",
      },
    };
  }
  registNewUser = (event) => {
    event.preventDefault();
    const userName = event.target.elements.userName.value;
    const password = event.target.elements.password.value;
    const passwordAgain = event.target.elements.passwordAgain.value;
    const name = event.target.elements.name.value;
    const email = event.target.elements.email.value;
    const phoneNumber = event.target.elements.phoneNumber.value;
    //validate
    if (name === "") {
      this.props.setError("Name is required!");
      return;
    }
    if (userName.length < 6 || userName.length > 18) {
      this.props.setError("Username must be between 6 and 18 characters!");
      return;
    }
    if (password.length < 6 || password.length > 18) {
      this.props.setError("password must be between 6 and 18 characters!");
      return;
    }
    if (passwordAgain.length < 6 || passwordAgain.length > 18) {
      this.props.setError("password must be between 6 and 18 characters!");
      return;
    }

    if (phoneNumber.length !== 10 || phoneNumber < 0 || isNaN(phoneNumber)) {
      this.props.setError("Phone number is invalid!");
      return;
    }
    if (password !== passwordAgain) {
      this.props.setError("Password does not match!");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "") {
      this.props.setError("Email is required!");
      return;
    }
    if (!emailRegex.test(email)) {
      this.props.setError("Invalid email address!");
      return;
    }
    const { error } = this.props;

    if (!error === "") {
      return ;
    }
    const { navigate } = this.props.router;
      const { user } = this.state;
      user.name = name;
      user.userName = userName;
      user.password = password;
      user.email = email;
      user.phoneNumber = phoneNumber;
      user.type = "User";
      this.props.insertUser(user, navigate);
  };
  renderErrorMessage = () => {
    const { error } = this.props;
    if (error) {
      return (
        <ModalShowError
          content={error}
          heading="Something is wrong!"
        ></ModalShowError>
      );
    }
    return <></>;
  };

  render() {
    let { navigate } = this.props.router;
    return (
      <div style={{ width: "100vw" }} className="login-page register-page">
        <img
          className="back-to-home logo-custom"
          src="../../../logo.png"
          alt="logo"
          onClick={() => {
            navigate("/");
          }}
        />
        <Form onSubmit={this.registNewUser} className="px-3 form-login">
          <h1>Sign Up</h1>
          {this.renderErrorMessage()}
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter name" name="name" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter username"
              name="userName"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" name="email" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Password again</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password again"
              name="passwordAgain"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Phone contact</Form.Label>
            <Form.Control
              type="number"
              placeholder="xxxx-xxx-xxx"
              name="phoneNumber"
            />
          </Form.Group>
          <Form.Group className="mb-3 d-flex justify-content-end">
            <div>
              <p
                className="sign-up"
                onClick={() => {
                  navigate("/login");
                }}
              >
                Already have account
              </p>
              <button type="submit" style={{ marginRight: "20px" }}>
                Sign Up
              </button>
            </div>
          </Form.Group>
        </Form>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  error: state.commonReducer.error,
});

const mapDispatchToProps = {
  setError,
  insertUser,
  setMessage,
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Register)
);
