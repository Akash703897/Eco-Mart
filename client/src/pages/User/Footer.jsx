import React, { Component } from "react";
import { Link } from 'react-router-dom';
import withRouter from "../../helpers/withRouter";
import "./Footer.css";

class Footer extends Component {
  render() {
    return (
      <>
        <section className="categories pd_section" style={{ padding: "50px 0" }}>
          <div className="container_custom1">
            <div className="categories_list row">
              <div id="cate_ani1" className="col-lg-3 col-md-6 col-12">
                <div className="categories_service mb-50">
                  <div className="categories_icon">
                    <img src="../../../services1.svg" alt="services1" />
                  </div>
                  <div className="categories_caption">
                    <h5>Fast &amp; Free Delivery</h5>
                    <span>Quick and Cost-Free Shipping</span>
                  </div>
                </div>
              </div>
              <div id="cate_ani2" className="col-lg-3 col-md-6 col-12">
                <div className="categories_service mb-50">
                  <div className="categories_icon">
                    <img src="../../../services2.svg" alt="services1" />
                  </div>
                  <div className="categories_caption">
                    <h5>100% Payment Secured</h5>
                    <span>Shop with Confidence</span>
                  </div>
                </div>
              </div>
              <div id="cate_ani3" className="col-lg-3 col-md-6 col-12">
                <div className="categories_service mb-50">
                  <div className="categories_icon">
                    <img src="../../../services3.svg" alt="services1" />
                  </div>
                  <div className="categories_caption">
                    <h5>Support allPayment Modes</h5>
                    <span>Convenient Payment Options</span>
                  </div>
                </div>
              </div>
              <div id="cate_ani4" className="col-lg-3 col-md-6 col-12">
                <div className="categories_service mb-50">
                  <div className="categories_icon">
                    <img src="../../../services4.svg" alt="services1" />
                  </div>
                  <div className="categories_caption">
                    <h5>365 days Support</h5>
                    <span>Always Here for You</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        <footer>
          <div className="container_fluid footer_wrapper">
            <div className="footer_contact pd_section">
              <div className="container_custom1">
                <div className="row justify-content-between">
                  <div className="col-lg-4 col-md-8 col-12 row justify-content-start my-5">
                    <div className="footer_contact_info">
                      <div className="contact_logo">
                        <a href="index.html">
                          <img
                            src="../../../public/logo.png"
                            alt="logo"
                            className="img-fluid"
                            style={{ height: "100px" }}
                          />
                        </a>
                      </div>
                      <div className="contact_intro">
                        <p>
                          Discover the rich flavors and aromatic essences of our spices. From enhancing your culinary creations to adding a touch of tradition to your dishes, our spices are carefully selected to bring the best out of your cooking.


                        </p>
                      </div>
                      <div className="contact_socials">
                        <a href="#">
                          <i className="fa-brands fa-twitter"></i>
                        </a>
                        <a href="#">
                          <i className="fa-brands fa-facebook-f"></i>
                        </a>
                        <a href="#">
                          <i className="fa-brands fa-pinterest-p"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-4 col-12 row my-5 justify-content-start">
                    <div className="footer_contact_link">
                      <h4>Quick links</h4>
                      <ul>
                        <li>
                          <Link to="/">Home</Link>
                        </li>
                        <li>
                          <Link to="/about">About</Link>
                        </li>
                        <li>
                          <Link to="/product">Product</Link>
                        </li>
                        <li>
                          <Link to="/contact">Contact</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-4 col-12 my-5 row justify-content-start">
                    <div className="footer_contact_link">
                      <h4>Shop Category</h4>
                      <ul>
                        <li>
                          <a href="#">Hot spices</a>
                        </li>
                        <li>
                          <a href="#">Mild spices</a>
                        </li>
                        <li>
                          <a href="#">Aromatic spices</a>
                        </li>
                        <li>
                          <a href="#">Herbs</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-4 col-12 my-5 row justify-content-start">
                    <div className="footer_contact_link">
                      <h4>TOP PICK</h4>
                      <ul>
                        <li>
                          <a href="#">KASTURIRANGAN PURE TURMERIC POWDER</a>
                        </li>
                        <li>
                          <a href="#">KERALA CARDAMOM ELAICHI</a>
                        </li>
                        <li>
                          <a href="#">CATCH SPICE KASHMIRI CHILLI POWDER</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer_bot">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-12 text-center px-5">
                    <p>
                      @ Copyright 2024 Inc. All rights reserved
                      {/* <i className="fa-solid fa-heart"></i> */}
                      <a href="#"></a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </>
    );
  }
}

export default withRouter(Footer);
