import React from "react";

const Login = () => {
  return(
    <div className="login">
      <div className="login__wrap">
        <span className="close"><i className="fa fa-times" aria-hidden="true"></i></span>
        <div className="login__inner">
          <div className="login__name">LOGIN</div>
          <p className="login__sub--text">
            Please login before buying tickets to accumulate points, the opportunity to receive more offers from the Galaxy Cinema membership program.
          </p>
          <form className="login__form">
            <input placeholder="Email" type="text" />
            <input placeholder="Password" type="text" />
            <div className="login__forget--pass">
              <a href="#">Forgot password?</a>
            </div>
            <button className="login__button--submit">LOGIN</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;