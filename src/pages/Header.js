import React, { useEffect, useState } from "react";

const Header = () => {
  return (
    <>
      <body class="responsive home-1">
        <div id="wrapper-container">
          <header class="site-header sticky-header layout-1">
            <div class="header-container">
              <div class="top-header">
                <div class="container">
                  <div class="wrap-content-header">
                    <div class="header-logo">
                      <a href="index-2.html" class="logo">
                        {/*}<img src="assets/images/logo-header-05.png" alt="IMG" /> */}
                        <h2
                          style={{
                            color: "white",
                            fontWeight: 800,
                            fontSize: "30px",
                          }}
                        >
                          LifeMirror
                        </h2>
                      </a>

                      <a href="index-2.html" class="mobile-logo">
                        {/*}<img src="assets/images/logo-header-05.png" alt="IMG" /> */}
                        <h2
                          style={{
                            color: "white",
                            fontWeight: 800,
                            fontSize: "30px",
                          }}
                        >
                          LifeMirror
                        </h2>
                      </a>

                      <a href="index-2.html" class="sticky-logo">
                        {/*}<img src="assets/images/logo-header-05.png" alt="IMG" /> */}
                        <h2
                          style={{
                            color: "white",
                            fontWeight: 800,
                            fontSize: "30px",
                          }}
                        >
                          LifeMirror
                        </h2>
                      </a>
                    </div>

                    <div class="right-logo">
                      <div class="widget_thim_layout_builder">
                        <div class="wpb_wrapper">
                          <div class="bp-element bp-element-st-search-videos vblog-layout-header-1">
                            <div class="wrap-element">
                              <form class="search-form">
                                <label
                                  class="wrap-select2"
                                  data-style="vblog-search"
                                >
                                  <select>
                                    <option>Movies</option>
                                    <option>Videos</option>
                                    <option>Categories</option>
                                    <option>Popular</option>
                                  </select>
                                </label>

                                <input
                                  type="search"
                                  class="search-field"
                                  name="search"
                                  placeholder="Seach for a Movie..."
                                />

                                <button class="btn-search">
                                  <i class="ion ion-android-search"></i>
                                </button>
                              </form>

                              <ul class="list-search-videos"></ul>
                            </div>
                          </div>

                          <div class="bp-element bp-element-social-links vblog-layout-header-1">
                            <div class="wrap-element">
                              <a href="javascript:;" class="social-item">
                                <i class="ion ion-social-facebook"></i>
                              </a>

                              <a href="javascript:;" class="social-item">
                                <i class="ion ion-social-twitter"></i>
                              </a>

                              <a href="javascript:;" class="social-item">
                                <i class="ion ion-social-vimeo"></i>
                              </a>

                              <a href="javascript:;" class="social-item">
                                <i class="ion ion-social-youtube"></i>
                              </a>

                              <a href="javascript:;" class="social-item">
                                <i class="ion ion-social-googleplus"></i>
                              </a>

                              <a href="javascript:;" class="social-item">
                                <i class="ion ion-social-instagram-outline"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="bottom-header element-to-stick">
                <div class="container">
                  <div class="wrap-content-header">
                    <div class="menu-mobile-effect navbar-toggle">
                      <div class="text-menu">Menu</div>

                      <div class="icon-wrap">
                        <i class="ion-navicon"></i>
                      </div>
                    </div>

                    <nav class="main-navigation">
                      <ul class="menu-lists">
                        <li>
                          <a href="/"> Home </a>
                        </li>

                        <li>
                          <a href="/all-videos"> Videos </a>
                        </li>
                        <li class="menu-item-has-children">
                          <a href="index-2.html">Resources</a>

                          <ul class="sub-menu">
                            <li>
                              <a href="index-2.html">Home 1</a>
                            </li>

                            <li>
                              <a href="home2.html">Home 2</a>
                            </li>

                            <li>
                              <a href="director.html">Director</a>
                            </li>

                            <li>
                              <a href="beauty-vlogger.html">Beauty Vlogger</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="/blog"> Blog </a>
                        </li>
                        <li>
                          <a href="/about"> About </a>
                        </li>
                        <li>
                          <a href="/contact"> Contact </a>
                        </li>
                        <li>
                          <a href="/donate"> Donate </a>
                        </li>
                      </ul>
                    </nav>

                    <div class="menu-right">
                      <div class="bp-element bp-element-button">
                        <a href="/submit-video" class="btn">
                          <i class="ion ion-upload"></i>
                          SUBMIT TESTIMONIES
                        </a>
                      </div>

                      <div class="bp-element-login-popup layout-1 show-icon">
                        <div class="login-links">
                          <a
                            class="login"
                            data-active=".box-login"
                            data-effect="mfp-zoom-in"
                            href="/login"
                          >
                            Login
                          </a>
                        </div>

                        <div
                          id="bp-popup-login"
                          class="white-popup mfp-with-anim mfp-hide"
                        >
                          <div class="loginwrapper">
                            <div class="login-popup box-register">
                              <div
                                class="media-content"
                                style={{
                                  backgroundImage:
                                    "url('assets/images/bg-01.jpg')",
                                }}
                              ></div>

                              <div class="inner-login">
                                <h3 class="title">
                                  <span class="current-title">Register</span>
                                  <span>
                                    <a
                                      href="/login"
                                      class="display-box"
                                      data-display=".box-login"
                                    >
                                      Login
                                    </a>
                                  </span>
                                </h3>

                                <div class="form-row">
                                  <div class="wrap-form">
                                    <div class="form-desc">We will need...</div>

                                    <form id="registerform">
                                      <p class="login-username">
                                        <input
                                          type="text"
                                          placeholder="Username"
                                          class="input"
                                        />
                                      </p>

                                      <p class="login-email">
                                        <input
                                          type="email"
                                          name="user_email"
                                          placeholder="Email"
                                          class="input"
                                        />
                                      </p>

                                      <p class="text-mail">
                                        We send your registration email to this
                                        address.
                                      </p>

                                      <p class="button-submit">
                                        <input
                                          type="submit"
                                          name="wp-submit-register"
                                          class="button button-primary button-large"
                                          value="Register"
                                        />
                                        <input
                                          type="hidden"
                                          name="redirect_to"
                                          value=""
                                        />
                                      </p>
                                    </form>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div class="login-popup box-login">
                              <div
                                class="media-content"
                                style={{
                                  backgroundImage:
                                    "url('assets/images/bg-01.jpg')",
                                }}
                              ></div>

                              <div class="inner-login">
                                <h3 class="title">
                                  <span>
                                    <a
                                      href="/register"
                                      class="display-box"
                                      data-display=".box-register"
                                    >
                                      Registration
                                    </a>
                                  </span>

                                  <span class="current-title">Login</span>
                                </h3>

                                <div class="form-row">
                                  <div class="wrap-form">
                                    <div class="form-desc">We will need...</div>

                                    <form id="loginform">
                                      <p class="login-username">
                                        <input
                                          type="text"
                                          placeholder="Username"
                                          class="input"
                                        />
                                      </p>

                                      <p class="login-email">
                                        <input
                                          type="email"
                                          name="user_email"
                                          placeholder="Email"
                                          class="input"
                                        />
                                      </p>

                                      <p class="login-remember">
                                        <input
                                          type="checkbox"
                                          name="rememberme"
                                          id="rememberme"
                                          value="forever"
                                        />
                                        Remember Me
                                      </p>

                                      <p class="button-submit">
                                        <input
                                          type="submit"
                                          name="wp-submit-register"
                                          class="button button-primary button-large"
                                          value="Register"
                                        />
                                        <input
                                          type="hidden"
                                          name="redirect_to"
                                          value=""
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

                                    <p class="link-bottom">
                                      <a
                                        href="#losspw"
                                        class="display-box"
                                        data-display=".box-lostpass"
                                      >
                                        Lost your password?
                                      </a>
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div class="login-popup box-lostpass">
                              <div class="login-popup box-lostpass">
                                <div
                                  class="media-content"
                                  style={{
                                    backgroundImage:
                                      "url('assets/images/bg-01.jpg')",
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

                                    <span class="current-title">
                                      Reset Password
                                    </span>
                                  </h3>

                                  <div class="form-row">
                                    <form
                                      name="lostpasswordform"
                                      id="lostpasswordform"
                                      method="post"
                                    >
                                      <p class="description">
                                        Please enter your username or email
                                        address. You will receive a link to
                                        create a new password via email.
                                      </p>

                                      <p class="login-username">
                                        <input
                                          placeholder="Username or email"
                                          type="text"
                                          name="user_login_lostpass"
                                          id="user_login_lostpass"
                                          class="input"
                                        />
                                      </p>

                                      <p>
                                        <input
                                          type="submit"
                                          name="wp-submit-lostpass"
                                          id="wp-submit-lostpass"
                                          class="button button-primary button-large"
                                          value="Reset password"
                                        />
                                      </p>

                                      <p class="link-bottom">
                                        Are you a member?
                                        <a
                                          href="#login"
                                          class="display-box"
                                          data-display=".box-login"
                                        >
                                          Sign in now
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
                </div>
              </div>
            </div>
          </header>
        </div>
      </body>
    </>
  );
};

export default Header;
