import React, { useEffect, useState } from "react";

import Header2 from "./Header2";
import back from "./outo.png";
import backs from "./footimg.jpg";
import pro from "./exam.png";
import r1 from "./edublink-breadcrumb-bg.webp";
import r5 from "./examthree.png";
import Footer from "./Footer";
import "./style.css";
import Test from "./Test";
import Header from "./Header";
import Footers from "./Footers";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; // use icons for buttons
import Builder from "./Builder";
import Swipes from "./Swipes";
import "./login.css";
import img from "./blog.webp";

const Register = () => {
  const [isOpen, setIsOpen] = useState(true); // Controls modal visibility

  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <>
      {isOpen && (
        <body class="responsive home-1">
          <div
            class="mfp-wrap mfp-close-btn-in mfp-auto-cursor mfp-zoom-in mfp-ready"
            tabindex="-1"
            style={{ top: "0px", position: "absolute", height: "671px" }}
          >
            <div class="mfp-container mfp-s-ready mfp-inline-holder">
              <div class="mfp-content">
                <div id="bp-popup-login" class="white-popup mfp-with-anim">
                  <div class="loginwrapper">
                    <button
                      className="close-btn"
                      onClick={closeModal}
                      style={{
                        position: "absolute",
                        top: "10px",
                        right: "10px",
                        background: "transparent",
                        border: "none",
                        fontSize: "20px",
                        cursor: "pointer",
                        color: "#000",
                      }}
                    >
                      ✖
                    </button>
                    <div class="login-popup box-register">
                      <div
                        class="media-content"
                        style={{
                          backgroundImage: "url(assets/images/bg-01.jpg)",
                        }}
                      ></div>

                      <div class="inner-login">
                        <h3 class="title">
                          <span class="current-title">Create an Account</span>
                        </h3>

                        <div class="form-row">
                          <div class="wrap-form">
                            <form id="registerform">
                              <p class="login-username">
                                <input
                                  type="text"
                                  placeholder="Fullname"
                                  class="input"
                                  autocomplete="off"
                                />
                              </p>

                              <p class="login-email">
                                <input
                                  type="email"
                                  name="user_email"
                                  placeholder="Email"
                                  class="input"
                                  autocomplete="off"
                                />
                              </p>

                              <p class="login-phone">
                                <input
                                  type="number"
                                  name="user_email"
                                  placeholder="Phone number"
                                  class="input"
                                  autocomplete="off"
                                />
                              </p>

                              <p class="text-mail">
                                We send your registration email to this address.
                              </p>

                              <p class="button-submit">
                                <input
                                  type="submit"
                                  name="wp-submit-register"
                                  class="button button-primary button-large"
                                  value="Register"
                                  autocomplete="off"
                                />
                                <input
                                  type="hidden"
                                  name="redirect_to"
                                  value=""
                                  autocomplete="off"
                                />
                              </p>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="login-popup box-login active">
                      <div
                        class="media-content"
                        style={{
                          backgroundImage: "url(assets/images/bg-01.jpg)",
                        }}
                      ></div>

                      <div class="inner-login">
                        <h3 class="title">
                          <span class="current-title">Create an account</span>
                        </h3>

                        <div class="form-row">
                          <div class="wrap-form">
                            <form id="loginform">
                              <p class="login-username">
                                <input
                                  type="text"
                                  placeholder="Fullname"
                                  class="input"
                                  autocomplete="off"
                                />
                              </p>

                              <p class="login-email">
                                <input
                                  type="email"
                                  name="user_email"
                                  placeholder="Email"
                                  class="input"
                                  autocomplete="off"
                                />
                              </p>

                              <p class="login-phone">
                                <input
                                  type="number"
                                  name="user_email"
                                  placeholder="Phone number"
                                  class="input"
                                  autocomplete="off"
                                />
                              </p>

                              <p class="button-submit">
                                <input
                                  type="submit"
                                  name="wp-submit-register"
                                  class="button button-primary button-large"
                                  value="Register"
                                  autocomplete="off"
                                />
                                <input
                                  type="hidden"
                                  name="redirect_to"
                                  value=""
                                  autocomplete="off"
                                />
                              </p>

                              <p class="link-bottom">
                                <a
                                  href="#losspw"
                                  class="display-box"
                                  data-display=".box-lostpass"
                                ></a>
                              </p>
                            </form>
                            <div
                              className="link-container"
                              style={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                gap: "10px", // Adds spacing between elements
                                marginTop: "10px", // Adds some top margin for spacing
                              }}
                            >
                              <p className="link-bottom">
                                Already have an account?
                                <a
                                  href="/login"
                                  className="display-box"
                                  data-display=".box-register"
                                  style={{
                                    marginLeft: "5px",
                                    color: "purple",
                                    textDecoration: "none",
                                  }}
                                >
                                  Login
                                </a>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="login-popup box-lostpass">
                      <div class="login-popup box-lostpass">
                        <div
                          class="media-content"
                          style={{
                            backgroundImage: "url(assets/images/bg-01.jpg)",
                          }}
                        ></div>

                        <div class="inner-login">
                          <h3 class="title">
                            <span>
                              <a
                                href="#register"
                                class="display-box"
                                data-display=".box-register"
                              >
                                Registration
                              </a>
                            </span>

                            <span class="current-title"> Reset Password</span>
                          </h3>

                          <div class="form-row">
                            <form
                              name="lostpasswordform"
                              id="lostpasswordform"
                              method="post"
                            >
                              <p class="description">
                                {" "}
                                Please enter your username or email address. You
                                will receive a link to create a new password via
                                email.
                              </p>

                              <p class="login-username">
                                <input
                                  placeholder="Username or email"
                                  type="text"
                                  name="user_login_lostpass"
                                  id="user_login_lostpass"
                                  class="input"
                                  autocomplete="off"
                                />
                              </p>

                              <p>
                                <input
                                  type="submit"
                                  name="wp-submit-lostpass"
                                  id="wp-submit-lostpass"
                                  class="button button-primary button-large"
                                  value="Reset password"
                                  autocomplete="off"
                                />
                              </p>

                              <p class="link-bottom">
                                {" "}
                                Are you a member?
                                <a
                                  href="#login"
                                  class="display-box"
                                  data-display=".box-login"
                                >
                                  {" "}
                                  Sign in now{" "}
                                </a>
                              </p>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </body>
      )}
      <Footer />
    </>
  );
};

export default Register;
