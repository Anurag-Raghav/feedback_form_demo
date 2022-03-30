import React, { Component, Fragment } from "react";
import "./App.css";

export default class App extends Component {
  state = {
    submit: false,
  };

  // on hover toggle filter-grayScale
  onClick = (e) => {
    e.target.classList.toggle("filter-grayScale");
    this.setState({ submit: true });
    setTimeout(() => {
      this.setState({
        submit: false,
      });
    }, 3000);
  };
  render() {
    const { submit } = this.state;
    return (
      <Fragment>
        {!submit ? (
          <>
            <h1 className="text-center mb-4 fw-bold headi">Feedback Form</h1>
            <div className="d-flex justify-content-center">
              <div className="card">
                <div className="card-body">
                  <div className="form-group mb-3">
                    <h2 className="text-center fw-bold purple">
                      How satisfied are you with our services?
                    </h2>
                    <div className="d-flex justify-content-center align-items-center mt-5 ">
                      <img
                        onClick={this.onClick}
                        src="/images/angry.png"
                        className="img-fluid"
                        alt=""
                      />

                      <img
                        src="/images/sad.png"
                        className="img-fluid"
                        alt=""
                        onClick={this.onClick}
                      />

                      <img
                        src="/images/confused.png"
                        className="img-fluid"
                        alt=""
                        onClick={this.onClick}
                      />

                      <img
                        src="/images/smile.png"
                        className="img-fluid"
                        alt=""
                        onClick={this.onClick}
                      />

                      <img
                        src="/images/in-love.png"
                        className="img-fluid"
                        alt=""
                        onClick={this.onClick}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <h1 className="text-center mb-5 fw-bold headi ">
              Thank you for your precious Feedback.
            </h1>
            <h5 className="alert bg-success text-white r-20 px-4 text-center">
              Feedback has been submitted succesfully.
            </h5>
          </>
        )}
      </Fragment>
    );
  }
}
