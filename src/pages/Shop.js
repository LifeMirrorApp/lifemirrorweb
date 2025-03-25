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

import img from "./blog.webp";

const Shop = () => {
  return (
    <>
      <div id="main-content">
        <div class="content-area">
          <div class="page-title">
            <div
              class="main-top"
              style={{
                backgroundImage: "url('assets/images/bg-page-title-01.jpg')",
              }}
            >
              <div class="overlay-top-header"></div>

              <div class="content container">
                <h1>Shop</h1>

                <div class="wrap-breadcrumb">
                  <ul class="breadcrumbs">
                    <li>
                      <a href="javascript:;">Home</a>
                    </li>

                    <li>
                      <span class="breadcrum-icon">/</span>
                      Shop
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div class="site-content sidebar-right layout-1">
            <div class="container">
              <div class="row">
                <main class="site-main col-lg-9">
                  <div class="wrap-main-content">
                    <div class="products-list">
                      <div class="wrap-element">
                        <div class="heading-products">
                          <div class="results">Showing all 8 results</div>

                          <div class="sorting-select">
                            <label data-style="vblog-shop-page">
                              <select>
                                <option>Default sorting</option>
                                <option>Sorting by prices</option>
                                <option>Sorting by name</option>
                                <option>Popular</option>
                              </select>
                            </label>
                          </div>
                        </div>

                        <div class="row">
                          <div class="col-sm-6 col-md-4">
                            <div class="item-product">
                              <div class="media-item">
                                <div class="pic">
                                  <a href="single-shop.html">
                                    <img
                                      src="assets/images/product-05.jpg"
                                      alt="IMG"
                                    />
                                  </a>
                                </div>

                                <a href="javascript:;" class="btn-addcart">
                                  <i class="ion ion-android-cart"></i>
                                  Add to cart
                                </a>
                              </div>

                              <div class="text-item">
                                <h4 class="title">
                                  <a href="single-shop.html">Best Song CD</a>
                                </h4>

                                <span class="price">
                                  <del>
                                    <span class="woocommerce-Price-amount">
                                      <span class="woocommerce-Price-currencySymbol">
                                        £
                                      </span>
                                      9.00
                                    </span>
                                  </del>

                                  <ins>
                                    <span class="woocommerce-Price-amount">
                                      <span class="woocommerce-Price-currencySymbol">
                                        £
                                      </span>
                                      7.00
                                    </span>
                                  </ins>
                                </span>
                              </div>
                            </div>
                          </div>

                          <div class="col-sm-6 col-md-4">
                            <div class="item-product">
                              <div class="media-item">
                                <div class="pic">
                                  <a href="single-shop.html">
                                    <img
                                      src="assets/images/product-06.jpg"
                                      alt="IMG"
                                    />
                                  </a>
                                </div>

                                <a href="javascript:;" class="btn-addcart">
                                  <i class="ion ion-android-cart"></i>
                                  Add to cart
                                </a>
                              </div>

                              <div class="text-item">
                                <h4 class="title">
                                  <a href="single-shop.html">Best Song CD</a>
                                </h4>

                                <span class="price">
                                  <del>
                                    <span class="woocommerce-Price-amount">
                                      <span class="woocommerce-Price-currencySymbol">
                                        £
                                      </span>
                                      9.00
                                    </span>
                                  </del>

                                  <ins>
                                    <span class="woocommerce-Price-amount">
                                      <span class="woocommerce-Price-currencySymbol">
                                        £
                                      </span>
                                      7.00
                                    </span>
                                  </ins>
                                </span>
                              </div>
                            </div>
                          </div>

                          <div class="col-sm-6 col-md-4">
                            <div class="item-product">
                              <div class="media-item">
                                <div class="pic">
                                  <a href="single-shop.html">
                                    <img
                                      src="assets/images/product-07.jpg"
                                      alt="IMG"
                                    />
                                  </a>
                                </div>

                                <a href="javascript:;" class="btn-addcart">
                                  <i class="ion ion-android-cart"></i>
                                  Add to cart
                                </a>
                              </div>

                              <div class="text-item">
                                <h4 class="title">
                                  <a href="single-shop.html">Best Song CD</a>
                                </h4>

                                <span class="price">
                                  <span class="woocommerce-Price-amount">
                                    <span class="woocommerce-Price-currencySymbol">
                                      £
                                    </span>
                                    9.00
                                  </span>
                                </span>
                              </div>
                            </div>
                          </div>

                          <div class="col-sm-6 col-md-4">
                            <div class="item-product">
                              <div class="media-item">
                                <div class="pic">
                                  <a href="single-shop.html">
                                    <img
                                      src="assets/images/product-08.jpg"
                                      alt="IMG"
                                    />
                                  </a>
                                </div>

                                <a href="javascript:;" class="btn-addcart">
                                  <i class="ion ion-android-cart"></i>
                                  Add to cart
                                </a>
                              </div>

                              <div class="text-item">
                                <h4 class="title">
                                  <a href="single-shop.html">Best Song CD</a>
                                </h4>

                                <span class="price">
                                  <del>
                                    <span class="woocommerce-Price-amount">
                                      <span class="woocommerce-Price-currencySymbol">
                                        £
                                      </span>
                                      9.00
                                    </span>
                                  </del>

                                  <ins>
                                    <span class="woocommerce-Price-amount">
                                      <span class="woocommerce-Price-currencySymbol">
                                        £
                                      </span>
                                      7.00
                                    </span>
                                  </ins>
                                </span>
                              </div>
                            </div>
                          </div>

                          <div class="col-sm-6 col-md-4">
                            <div class="item-product">
                              <div class="media-item">
                                <div class="pic">
                                  <a href="single-shop.html">
                                    <img
                                      src="assets/images/product-09.jpg"
                                      alt="IMG"
                                    />
                                  </a>
                                </div>

                                <a href="javascript:;" class="btn-addcart">
                                  <i class="ion ion-android-cart"></i>
                                  Add to cart
                                </a>
                              </div>

                              <div class="text-item">
                                <h4 class="title">
                                  <a href="single-shop.html">Best Song CD</a>
                                </h4>

                                <span class="price">
                                  <span class="woocommerce-Price-amount">
                                    <span class="woocommerce-Price-currencySymbol">
                                      £
                                    </span>
                                    9.00
                                  </span>
                                </span>
                              </div>
                            </div>
                          </div>

                          <div class="col-sm-6 col-md-4">
                            <div class="item-product">
                              <div class="media-item">
                                <div class="pic">
                                  <a href="single-shop.html">
                                    <img
                                      src="assets/images/product-10.jpg"
                                      alt="IMG"
                                    />
                                  </a>
                                </div>

                                <a href="javascript:;" class="btn-addcart">
                                  <i class="ion ion-android-cart"></i>
                                  Add to cart
                                </a>
                              </div>

                              <div class="text-item">
                                <h4 class="title">
                                  <a href="single-shop.html">Best Song CD</a>
                                </h4>

                                <span class="price">
                                  <del>
                                    <span class="woocommerce-Price-amount">
                                      <span class="woocommerce-Price-currencySymbol">
                                        £
                                      </span>
                                      9.00
                                    </span>
                                  </del>

                                  <ins>
                                    <span class="woocommerce-Price-amount">
                                      <span class="woocommerce-Price-currencySymbol">
                                        £
                                      </span>
                                      7.00
                                    </span>
                                  </ins>
                                </span>
                              </div>
                            </div>
                          </div>

                          <div class="col-sm-6 col-md-4">
                            <div class="item-product">
                              <div class="media-item">
                                <div class="pic">
                                  <a href="single-shop.html">
                                    <img
                                      src="assets/images/product-11.jpg"
                                      alt="IMG"
                                    />
                                  </a>
                                </div>

                                <a href="javascript:;" class="btn-addcart">
                                  <i class="ion ion-android-cart"></i>
                                  Add to cart
                                </a>
                              </div>

                              <div class="text-item">
                                <h4 class="title">
                                  <a href="single-shop.html">Best Song CD</a>
                                </h4>

                                <span class="price">
                                  <span class="woocommerce-Price-amount">
                                    <span class="woocommerce-Price-currencySymbol">
                                      £
                                    </span>
                                    9.00
                                  </span>
                                </span>
                              </div>
                            </div>
                          </div>

                          <div class="col-sm-6 col-md-4">
                            <div class="item-product">
                              <div class="media-item">
                                <div class="pic">
                                  <a href="single-shop.html">
                                    <img
                                      src="assets/images/product-12.jpg"
                                      alt="IMG"
                                    />
                                  </a>
                                </div>

                                <a href="javascript:;" class="btn-addcart">
                                  <i class="ion ion-android-cart"></i>
                                  Add to cart
                                </a>
                              </div>

                              <div class="text-item">
                                <h4 class="title">
                                  <a href="single-shop.html">Best Song CD</a>
                                </h4>

                                <span class="price">
                                  <span class="woocommerce-Price-amount">
                                    <span class="woocommerce-Price-currencySymbol">
                                      £
                                    </span>
                                    9.00
                                  </span>
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </main>

                <div class="widget-area col-sm-9 col-md-8 col-lg-3 sticky-sidebar">
                  <aside class="widget widget_product_categories">
                    <h3 class="widget-title">Categories</h3>

                    <ul class="product-categories">
                      <li class="cat-item">
                        <a href="javascript:;">Film maker</a>

                        <span class="count">32</span>
                      </li>

                      <li class="cat-item">
                        <a href="javascript:;">Film studio</a>

                        <span class="count">32</span>
                      </li>

                      <li class="cat-item">
                        <a href="javascript:;">Life style</a>

                        <span class="count">16</span>
                      </li>

                      <li class="cat-item">
                        <a href="javascript:;">Fashion</a>

                        <span class="count">08</span>
                      </li>

                      <li class="cat-item">
                        <a href="javascript:;">Film online</a>

                        <span class="count">45</span>
                      </li>

                      <li class="cat-item">
                        <a href="javascript:;">Film studio</a>

                        <span class="count">32</span>
                      </li>
                    </ul>
                  </aside>

                  <aside class="widget widget_thim_layout_builder">
                    <div class="bp-element bp-element-products vblog-layout-list-1">
                      <div class="wrap-element">
                        <div class="heading-products">
                          <h3 class="title">Most Popular</h3>
                        </div>

                        <div class="list-products">
                          <div class="product-item">
                            <a href="single-shop.html" class="pic">
                              <img src="assets/images/post-53.jpg" alt="IMG" />
                            </a>

                            <div class="text">
                              <h4 class="title">
                                <a href="single-shop.html">
                                  Mirum est notare quam littera gothica
                                </a>
                              </h4>

                              <span class="price">
                                <del>
                                  <span class="woocommerce-Price-amount">
                                    <span class="woocommerce-Price-currencySymbol">
                                      £
                                    </span>
                                    9.00
                                  </span>
                                </del>

                                <ins>
                                  <span class="woocommerce-Price-amount">
                                    <span class="woocommerce-Price-currencySymbol">
                                      £
                                    </span>
                                    7.00
                                  </span>
                                </ins>
                              </span>
                            </div>
                          </div>

                          <div class="product-item">
                            <a href="single-shop.html" class="pic">
                              <img src="assets/images/post-54.jpg" alt="IMG" />
                            </a>

                            <div class="text">
                              <h4 class="title">
                                <a href="single-shop.html">
                                  What make you beautiful with us
                                </a>
                              </h4>

                              <span class="price">
                                <span class="woocommerce-Price-amount">
                                  <span class="woocommerce-Price-currencySymbol">
                                    £
                                  </span>
                                  7.00
                                </span>
                              </span>
                            </div>
                          </div>

                          <div class="product-item">
                            <a href="single-shop.html" class="pic">
                              <img src="assets/images/post-55.jpg" alt="IMG" />
                            </a>

                            <div class="text">
                              <h4 class="title">
                                <a href="single-shop.html">
                                  Watch the Sony a9 Livestream Event Online
                                </a>
                              </h4>

                              <span class="price">
                                <span class="woocommerce-Price-amount">
                                  <span class="woocommerce-Price-currencySymbol">
                                    £
                                  </span>
                                  7.00
                                </span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </aside>

                  <aside class="widget widget_tag_cloud">
                    <h3 class="widget-title">Tags Cloud</h3>

                    <div class="tagcloud">
                      <a href="javascript:;" class="tag-cloud-link">
                        Film oline
                      </a>

                      <a href="javascript:;" class="tag-cloud-link">
                        Creative
                      </a>

                      <a href="javascript:;" class="tag-cloud-link">
                        Design
                      </a>

                      <a href="javascript:;" class="tag-cloud-link">
                        Landing
                      </a>

                      <a href="javascript:;" class="tag-cloud-link">
                        Skill
                      </a>
                    </div>
                  </aside>

                  <aside class="widget widget_text">
                    <div class="textwidget">
                      <a href="javascript:;">
                        <img src="assets/images/ads-04.jpg" alt="IMG" />
                      </a>
                    </div>
                  </aside>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Shop;
