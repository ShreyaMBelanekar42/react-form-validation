import React from "react";

const Registration = () => {
  return (
    <>
      <div className="container">
        <form action="">
          <div className="text-block">
            <h2>Welcome!</h2>
            <p>Join us to learn new things.</p>
          </div>
          <div className="input-block">
            <label htmlFor="name" className="input-label">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter your name..."
              autoComplete="off"
            />
          </div>
          <div className="input-block">
            <label htmlFor="email" className="input-label">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email..."
              autoComplete="off"
            />
          </div>
          <div className="input-block">
            <label htmlFor="tel" className="input-label">
              Mobile No.
            </label>
            <input
              type="tel"
              name="tel"
              id="tel"
              placeholder="Enter your mobile..."
            />
          </div>
          <div className="input-block">
            <label htmlFor="password" className="input-label">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="****"
            />
          </div>
          <div className="input-block">
            <label htmlFor="confirm_password" className="input-label">
              Confirm Password
            </label>
            <input
              type="password"
              name="confirm_password"
              id="confirm_password"
              placeholder="****"
            />
          </div>
          <div className="button-block">
            <button type="submit">Register</button>
          </div>
          <div className="text-block">
            <p>Already have an account?</p>
            <a href="/">Sign in</a>
          </div>
        </form>
        <div className="image-div">
          <img
            src="https://images.unsplash.com/photo-1588091210060-1ee4fab270ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Ym9va3MlMjBhbmQlMjBsYXB0b3B8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
            alt="image"
          />
        </div>
      </div>
    </>
  );
};

export default Registration;
