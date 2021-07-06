import React, { Component } from "react";
import { Redirect } from "react-router";
import "./LoginForm.scss";

class LoginForm extends Component {
  state = {
    redirect: false,
  };

  constructor() {
    super();
    this.state = {
      handleSubmit: false,
      store: null,
      clickIcon: false,
      type: "password",
      src: "/images/private.svg",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.passwordVisibility = this.passwordVisibility.bind(this);
  }

  passwordVisibility() {
    if (this.state.clickIcon === false) {
      this.setState({ type: "text" });
      this.setState({ src: "/images/visibility.svg" });
      this.setState({ clickIcon: true });
    } else {
      this.setState({ type: "password" });
      this.setState({ src: "/images/private.svg" });
      this.setState({ clickIcon: false });
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    fetch("https://randomuser.me/api/?login", {
      method: "POST",
      body: JSON.stringify(this.state),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => {
      response
        .json()
        .then((data) => {
          console.log(data);
          sessionStorage.setItem(
            "login",
            JSON.stringify({
              // handleSubmit: true,
              user: data.userName,
              token: data.token,
            })
          );
        })
        .then(() => this.setState({ redirect: true }));
    });
  }

  // handleSubmit(event){
  //   event.preventDefault();
  //   let data = {userName: "user", password: "pass"};
  //   fetch("https://.........", {
  //     method: "POST",
  //     body: JSON.stringify(data),
  //     headers: { 'Content-Type': 'application/json' }
  //   }).then(res => {
  //     console.log("Request complete! response:", res);
  //   });
  // }

  render() {
    const type = this.state.type;
    const src = this.state.src;
    const { redirect } = this.state;

    if (redirect) {
      return <Redirect to="/search" />;
    }
    return (
      <div>
        <div className="logo-loginForm">
          <img
            className="logo-loginForm__image"
            src="/images/ZS_Orange_horisontal@4x.png"
            alt="Zignsec logo"
          ></img>
        </div>
        <div className="container-loginForm">
          <form onSubmit={this.handleSubmit} className="loginForm">
            <input
              onChange={(event) => {
                this.setState({ username: event.target.value });
              }}
              type="text"
              placeholder="User Name"
              name="username"
              className="loginForm__username"
            ></input>
            <div className="loginForm__password-container">
              {/* <input onChange={event => this.setPassword({password: event.target.value})} type={clickPassword ? "password" : "text"} placeholder="Password" name="password" className="loginForm__password" id="HideOrShowPassword"></input> */}
              <input
                onChange={(event) => {
                  this.setState({ password: event.target.value });
                }}
                type={type}
                placeholder="Password"
                name="password"
                className="loginForm__password"
                id="HideOrShowPassword"
              ></input>
              <div className="loginForm__hidePassword">
                <img
                  alt="Hide or show password"
                  className="loginForm__hidePasswordIcon"
                  id="passwordIcon"
                  onClick={this.passwordVisibility}
                  src={src}
                ></img>
              </div>
            </div>
            <button type="submit" className="loginForm__submit">
              Login
            </button>
          </form>
        </div>
        {/* <button type="submit" className="loginForm__submit">
              Login
            </button>
          </form> */}
      </div>
      // </div>
    );
  }
}
// LoginForm.propTypes = {
//   setToken: PropTypes.func.isRequired
// }
export default LoginForm;
