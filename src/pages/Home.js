import React, { useEffect, useState } from "react";

import Header2 from "./Header2";
import back from "./outo.png";
import backs from "./footimg.jpg";
import pro from "./exam.png";
import r1 from "./examtwo.png";
import b1 from "./b2.png";
import photo from "./build.png";
import r5 from "./examthree.png";
import Footer from "./Footer";
import "./style.css";
import Test from "./Test";
import Header from "./Header";
import Team from "./Team";
import Builder from "./Builder";
import Carousel from "./Carousel";
import Footers from "./Footers";
import HomeBanner from "./HomeBanner";
import Homer from "./Homer";
import Homes from "./Homes";
import img from "./build.png";
import PopularVideo from "./PopularVideo";
import Trending from "./Trending";
const Home = () => {
  return (
    <>
      <body class="responsive home-1">
        <div id="wrapper-container">
          <div id="main-content" style={{ background: "#1e1e1e" }}>
            <div
              class="thim-banner_home-1"
              style={{ backgroundImage: "url(assets/images/bg-01.jpg)" }}
            >
              <div class="overlay-area"></div>

              <div class="container">
                <div class="bp-element bp-element-st-list-videos vblog-layout-1">
                  <div class="wrap-element">
                    <div class="feature-item">
                      <div class="row">
                        <div class="col-lg-9">
                          <div class="video">
                            <img
                              src="assets/images/bg-featurepost-01.jpg"
                              alt="IMG"
                            />

                            <div class="overlay"></div>

                            <div class="meta-info">
                              <div class="imdb">
                                <span class="value">5</span>IMDb
                              </div>

                              <div class="label">HDRip</div>
                            </div>
                            <a
                              href="https://www.youtube.com/watch?v=hNQFjqDvPhA&amp;feature=youtu.be"
                              class="btn-play popup-youtube"
                            ></a>
                          </div>
                        </div>

                        <div class="col-lg-3">
                          <div class="text">
                            <h4 class="title">
                              <a href="single-video.html">
                                MTV Game Awards GraphicPackage The Best Of year
                                2018
                              </a>
                            </h4>

                            <div class="info">
                              <span class="item-info">
                                BY <a href="javascript:;">POLLY</a>
                              </span>
                              <span class="item-info">MAY 1, 2018</span>
                              <span class="item-info">TV show</span>
                            </div>

                            <div class="description">
                              S1 E2 Escorpión/DzecThe one Mayans seek answers
                              from a local crew as the Galindo you worlds north
                              and south of the border oldcollide.
                            </div>

                            <a
                              href="single-video.html"
                              class="btn-readmore btn-normal shape-round"
                            >
                              read more
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="bp-element bp-element-st-list-videos vblog-layout-1-1">
                  <div class="wrap-element">
                    <div class="normal-items">
                      <div class="row">
                        <div class="col-sm-6 col-lg-3">
                          <div class="item">
                            <div class="pic">
                              <a href="single-video.html">
                                <img
                                  src="assets/images/png-bg-post-01.png"
                                  alt="IMG"
                                />
                              </a>

                              <div class="label">HD</div>
                            </div>

                            <h4 class="title">
                              <a href="single-video.html">Self-Hosted Video</a>
                            </h4>

                            <div class="info">FEBRUARY 10, 2018</div>
                          </div>
                        </div>

                        <div class="col-sm-6 col-lg-3">
                          <div class="item">
                            <div class="pic">
                              <a href="single-video.html">
                                <img
                                  src="assets/images/png-bg-post-02.png"
                                  alt="IMG"
                                />
                              </a>

                              <div class="label">CAM</div>
                            </div>

                            <h4 class="title">
                              <a href="single-video.html">Self-Hosted Video</a>
                            </h4>

                            <div class="info">FEBRUARY 10, 2018</div>
                          </div>
                        </div>

                        <div class="col-sm-6 col-lg-3">
                          <div class="item">
                            <div class="pic">
                              <a href="single-video.html">
                                <img
                                  src="assets/images/png-bg-post-03.png"
                                  alt="IMG"
                                />
                              </a>

                              <div class="label">Trailer</div>
                            </div>

                            <h4 class="title">
                              <a href="single-video.html">Self-Hosted Video</a>
                            </h4>

                            <div class="info">FEBRUARY 10, 2018</div>
                          </div>
                        </div>

                        <div class="col-sm-6 col-lg-3">
                          <div class="item">
                            <div class="pic">
                              <a href="single-video.html">
                                <img
                                  src="assets/images/png-bg-post-04.png"
                                  alt="IMG"
                                />
                              </a>

                              <div class="label">HD</div>
                            </div>

                            <h4 class="title">
                              <a href="single-video.html">Self-Hosted Video</a>
                            </h4>

                            <div class="info">FEBRUARY 10, 2018</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <PopularVideo />

            <div class="thim-ads_home-1">
              <div class="container">
                <div class="bp-element bp-element-call-to-action vblog-layout-1">
                  <div
                    class="wrap-element"
                    style={{ backgroundImage: "url(assets/images/ads-01.jpg)" }}
                  >
                    <div class="overlay"></div>

                    <a href="javascript:;" class="content">
                      <div class="text">
                        GAME SHOW Art line Collection Handmade
                      </div>

                      <div class="btn-readmore btn-small shape-round">
                        read more
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <Trending />
            <div class="thim-latest-video_home-1">
              <div class="container">
                <div class="bp-element bp-element-st-list-videos vblog-layout-grid-1">
                  <div class="wrap-element">
                    <div class="heading-post">
                      <div class="wrap-title">
                        <h3 class="title">LATEST VIDEOS</h3>

                        <a href="javascript:;" class="link">
                          See all news
                        </a>
                      </div>

                      <div class="categories">
                        <ul>
                          <li class="current-cat">
                            <a href="javascript:;">CINEMA</a>
                          </li>

                          <li>
                            <a href="javascript:;">MUSIC</a>
                          </li>

                          <li>
                            <a href="javascript:;">SPORT</a>
                          </li>

                          <li>
                            <a href="javascript:;">TECH</a>
                          </li>

                          <li>
                            <a href="javascript:;">FASHION</a>
                          </li>

                          <li>
                            <a href="javascript:;">ANIMATION</a>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div class="grid-posts grid-isotope">
                      <div class="grid-sizer"></div>

                      <div class="grid-item size_2x2">
                        <div class="post-item feature-item">
                          <a href="single-video.html">
                            <img
                              src="assets/images/bg-featurepost-02.jpg"
                              alt="IMG"
                            />
                          </a>

                          <div class="overlay"></div>

                          <div class="meta-info">
                            <div class="imdb">
                              <span class="value">5</span>IMDb
                            </div>

                            <div
                              class="label"
                              style={{ background: "#ff6c00;" }}
                            >
                              NEW
                            </div>
                          </div>

                          <div class="content">
                            <h4 class="title">
                              <a href="single-video.html">
                                MTV Game Awards Graphic Package The Best Of year
                                2018
                              </a>
                            </h4>

                            <div class="info">
                              <span>BY POLLY</span>
                              <span>MAY 1, 2018</span>
                            </div>

                            <div class="description">
                              S1 E2 Escorpión/DzecThe one Mayans seek answers
                              from a local crew as the Galindo you worlds north
                              and south of the border.
                            </div>

                            <a
                              href="single-video.html"
                              class="btn-readmore btn-small shape-round"
                            >
                              read more
                            </a>
                          </div>
                        </div>
                      </div>

                      <div class="grid-item ">
                        <div class="post-item">
                          <a href="javascript:;">
                            <img src="assets/images/post-08.jpg" alt="IMG" />
                          </a>

                          <div class="overlay"></div>

                          <div class="meta-info">
                            <div class="imdb">
                              <span class="value">5</span>IMDb
                            </div>

                            <div
                              class="label"
                              style={{ background: "#ff6c00;" }}
                            >
                              Trend
                            </div>
                          </div>

                          <div class="content">
                            <h4 class="title">
                              <a href="single-video.html">The City Truck</a>
                            </h4>
                          </div>
                        </div>
                      </div>

                      <div class="grid-item ">
                        <div class="post-item">
                          <a href="single-video.html">
                            <img src="assets/images/post-09.jpg" alt="IMG" />
                          </a>

                          <div class="overlay"></div>

                          <div class="meta-info">
                            <div class="imdb">
                              <span class="value">5</span>IMDb
                            </div>

                            <div
                              class="label"
                              style={{ background: "#800080;" }}
                            >
                              Hot
                            </div>
                          </div>

                          <div class="content">
                            <h4 class="title">
                              <a href="single-video.html">The City Truck</a>
                            </h4>
                          </div>
                        </div>
                      </div>

                      <div class="grid-item ">
                        <div class="post-item">
                          <a href="single-video.html">
                            <img src="assets/images/post-10.jpg" alt="IMG" />
                          </a>

                          <div class="overlay"></div>

                          <div class="meta-info">
                            <div class="imdb">
                              <span class="value">5</span>IMDb
                            </div>

                            <div
                              class="label"
                              style={{ background: "#800080;" }}
                            >
                              HD
                            </div>
                          </div>

                          <div class="content">
                            <h4 class="title">
                              <a href="single-video.html">The City Truck</a>
                            </h4>
                          </div>
                        </div>
                      </div>

                      <div class="grid-item ">
                        <div class="post-item">
                          <a href="single-video.html">
                            <img src="assets/images/post-11.jpg" alt="IMG" />
                          </a>

                          <div class="overlay"></div>

                          <div class="meta-info">
                            <div class="imdb">
                              <span class="value">5</span>IMDb
                            </div>

                            <div
                              class="label"
                              style={{ background: "#800080;" }}
                            >
                              Hot
                            </div>
                          </div>

                          <div class="content">
                            <h4 class="title">
                              <a href="single-video.html">The City Truck</a>
                            </h4>
                          </div>
                        </div>
                      </div>

                      <div class="grid-item ">
                        <div class="post-item">
                          <a href="single-video.html">
                            <img src="assets/images/post-12.jpg" alt="IMG" />
                          </a>

                          <div class="overlay"></div>

                          <div class="meta-info">
                            <div class="imdb">
                              <span class="value">5</span>IMDb
                            </div>

                            <div
                              class="label"
                              style={{ background: "#800080;" }}
                            >
                              HD
                            </div>
                          </div>

                          <div class="content">
                            <h4 class="title">
                              <a href="single-video.html">The City Truck</a>
                            </h4>
                          </div>
                        </div>
                      </div>

                      <div class="grid-item ">
                        <div class="post-item">
                          <a href="javascript:;">
                            <img src="assets/images/post-13.jpg" alt="IMG" />
                          </a>

                          <div class="overlay"></div>

                          <div class="meta-info">
                            <div class="imdb">
                              <span class="value">5</span>IMDb
                            </div>

                            <div
                              class="label"
                              style={{ background: "#800080;" }}
                            >
                              Hot
                            </div>
                          </div>

                          <div class="content">
                            <h4 class="title">
                              <a href="single-video.html">The City Truck</a>
                            </h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="thim-ads_home-1">
              <div class="container">
                <div class="bp-element bp-element-call-to-action vblog-layout-2">
                  <div
                    class="wrap-element"
                    style={{ backgroundImage: "url(assets/images/ads-01.jpg)" }}
                  >
                    <div class="overlay"></div>

                    <a href="javascript:;" class="content">
                      <div class="text">
                        GAME SHOW Art line Collection Handmade
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div class="thim-news-feed_home-1">
              <div class="container">
                <div class="bp-element bp-element-posts vblog-layout-slider-3">
                  <div class="wrap-element">
                    <div class="heading-post">
                      <h3 class="title">News Feed</h3>

                      <div class="description">
                        It is a long established fact that a reader
                      </div>
                    </div>

                    <div class="list-posts">
                      <div
                        class="slide-posts js-call-slick-col"
                        data-numofshow="1"
                        data-numofscroll="1"
                        data-loopslide="1"
                        data-autoscroll="0"
                        data-speedauto="6000"
                        data-responsive="[1, 1], [1, 1], [1, 1], [1, 1], [1, 1]"
                      >
                        <div class="wrap-arrow-slick">
                          <div class="arow-slick prev-slick">
                            <i class="ion ion-ios-arrow-left"></i>
                          </div>

                          <div class="arow-slick next-slick">
                            <i class="ion ion-ios-arrow-right"></i>
                          </div>
                        </div>

                        <div class="slide-slick">
                          <div class="item-slick">
                            <div class="post-item">
                              <div class="row">
                                <div class="col-lg-6">
                                  <div class="feature-item">
                                    <a href="single-blog.html">
                                      <img
                                        src="assets/images/bg-featurepost-03.jpg"
                                        alt="IMG"
                                      />
                                    </a>

                                    <div class="overlay"></div>

                                    <div class="content">
                                      <h4 class="title">
                                        <a href="single-blog.html">
                                          6 Products Designed to Make Trend
                                          Ombré Makeup Simple
                                        </a>
                                      </h4>

                                      <div class="info">
                                        <span class="item-info">
                                          BY <a href="javascript:;">POLLY</a>
                                        </span>
                                        <span class="item-info">
                                          MAY 1, 2018
                                        </span>
                                        <span class="item-info">Animation</span>
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                <div class="col-lg-6">
                                  <div class="item">
                                    <div class="pic">
                                      <a href="single-blog.html">
                                        <img
                                          src="assets/images/post-14.jpg"
                                          alt="IMG"
                                        />
                                      </a>
                                    </div>

                                    <div class="text">
                                      <div class="info">MAY 1, 2018</div>

                                      <h4 class="title">
                                        <a href="single-blog.html">
                                          The Dark Tower Trailer
                                        </a>
                                      </h4>

                                      <div class="description">
                                        To start the day in the best way,
                                        enjoythe extraordinary buffetbreakfast
                                        in the our courtyard caressed at auctor.
                                      </div>
                                    </div>
                                  </div>

                                  <div class="item">
                                    <div class="pic">
                                      <a href="single-blog.html">
                                        <img
                                          src="assets/images/post-15.jpg"
                                          alt="IMG"
                                        />
                                      </a>
                                    </div>

                                    <div class="text">
                                      <div class="info">MAY 1, 2018</div>

                                      <h4 class="title">
                                        <a href="single-blog.html">
                                          The Dark Tower Trailer
                                        </a>
                                      </h4>

                                      <div class="description">
                                        To start the day in the best way,
                                        enjoythe extraordinary buffetbreakfast
                                        in the our courtyard caressed at auctor.
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div class="item-slick">
                            <div class="post-item">
                              <div class="row">
                                <div class="col-lg-6">
                                  <div class="feature-item">
                                    <a href="single-blog.html">
                                      <img
                                        src="assets/images/bg-featurepost-03.jpg"
                                        alt="IMG"
                                      />
                                    </a>

                                    <div class="overlay"></div>

                                    <div class="content">
                                      <h4 class="title">
                                        <a href="single-blog.html">
                                          6 Products Designed to Make Trend
                                          Ombré Makeup Simple
                                        </a>
                                      </h4>

                                      <div class="info">
                                        <span class="item-info">
                                          BY <a href="javascript:;">POLLY</a>
                                        </span>
                                        <span class="item-info">
                                          MAY 1, 2018
                                        </span>
                                        <span class="item-info">Animation</span>
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                <div class="col-lg-6">
                                  <div class="item">
                                    <div class="pic">
                                      <a href="single-blog.html">
                                        <img
                                          src="assets/images/post-14.jpg"
                                          alt="IMG"
                                        />
                                      </a>
                                    </div>

                                    <div class="text">
                                      <div class="info">MAY 1, 2018</div>

                                      <h4 class="title">
                                        <a href="single-blog.html">
                                          The Dark Tower Trailer
                                        </a>
                                      </h4>

                                      <div class="description">
                                        To start the day in the best way,
                                        enjoythe extraordinary buffetbreakfast
                                        in the our courtyard caressed at auctor.
                                      </div>
                                    </div>
                                  </div>

                                  <div class="item">
                                    <div class="pic">
                                      <a href="single-blog.html">
                                        <img
                                          src="assets/images/post-15.jpg"
                                          alt="IMG"
                                        />
                                      </a>
                                    </div>

                                    <div class="text">
                                      <div class="info">MAY 1, 2018</div>

                                      <h4 class="title">
                                        <a href="single-blog.html">
                                          The Dark Tower Trailer
                                        </a>
                                      </h4>

                                      <div class="description">
                                        To start the day in the best way,
                                        enjoythe extraordinary buffetbreakfast
                                        in the our courtyard caressed at auctor.
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
              </div>
            </div>
          </div>

          <Footer />
        </div>
      </body>
    </>
  );
};

export default Home;
