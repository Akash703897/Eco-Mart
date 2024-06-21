import React, { Component } from "react";

import { Carousel } from "react-bootstrap";
import withRouter from "../../helpers/withRouter";
import "./HomeBody.css";
class HomeBody extends Component {
  render() {
    return (
      <div style={{ width: "100%" }} >
        <Carousel className="carousel">
          <Carousel.Item style={{ position: "relative" }}>
            <div className="carousel_caption">
              <span className="pulse">70% sale off</span>
              <h1 style={{ fontSize: "55px" }}>Spices at Cost
              </h1>
              <p>
                Discover the rich flavors and aromatic essences of our spices. From enhancing your culinary creations to adding a touch of tradition to your dishes, our spices are carefully selected to bring the best out of your cooking.


              </p>
              <button
                className="custom-button"
                onClick={() => {
                  this.props.toggleShowBody(false);
                  const { navigate } = this.props.router;
                  navigate("/product");
                }}
              >
                Discover more
              </button>
            </div>
            <img
              className="d-block"
              style={{ minHeight: "250px" }}
              src="../../../public/product15.jpg"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item style={{ position: "relative" }}>
            <div className="carousel_caption">
              <span className="pulse">70% sale off</span>
              <h1 style={{ fontSize: "55px" }}>Spices at Cost</h1>

              <p>
                Discover the rich flavors and aromatic essences of our spices. From enhancing your culinary creations to adding a touch of tradition to your dishes, our spices are carefully selected to bring the best out of your cooking.


              </p>
              <button
                className="custom-button"
                onClick={() => {
                  this.props.toggleShowBody(false);
                  const { navigate } = this.props.router;
                  navigate("/product");
                }}
              >
                Discover more
              </button>
            </div>
            <img
              className="d-block"
              style={{ minHeight: "250px" }}
              src="../../../product13.jpg"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item style={{ position: "relative" }}>
            <div className="carousel_caption">
              <span className="pulse">70% sale off</span>
              <h1 style={{ fontSize: "55px" }}>Spices at Cost</h1>

              <p>
                Discover the rich flavors and aromatic essences of our spices. From enhancing your culinary creations to adding a touch of tradition to your dishes, our spices are carefully selected to bring the best out of your cooking.


              </p>
              <button
                className="custom-button"
                onClick={() => {
                  this.props.toggleShowBody(false);
                  const { navigate } = this.props.router;
                  navigate("/product");
                }}
              >
                Discover more
              </button>
            </div>
            <img
              className="d-block"
              style={{ minHeight: "250px" }}
              src="../../../public/product14.jpg"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
        <div className="section">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h2>TOP PICK</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <div className="product card">
                  <img
                    src="https://a.media-amazon.com/images/I/71GQyhbekxS._SY879_.jpg"
                    alt="Product 1"
                    className="product-image"
                  />
                  <h3>KasturiRangan Pure Turmeric Powder</h3>
                  <p>{/* Description */}</p>
                  <a href="https://rzp.io/l/4Mhhmu2Pm">
                  <button
                    className="custom-button"
                    // onClick={() => {
                    //   this.props.toggleShowBody(false);
                    //   const { navigate } = this.props.router;
                    //   navigate("https://rzp.io/l/4Mhhmu2Pm");
                    // }}
                                      >
                    Buy now
                  </button>
                  </a>
                </div>
              </div>
              <div className="col-md-4">
                <div className="product card">
                  <img
                    src="https://a.media-amazon.com/images/I/71xLtExw0ZL._SX569_.jpg"
                    alt="Product 2"
                    className="product-image"
                  />
                  <h3>Kerala Cardamom Elaichi</h3>
                  <p>{/* Description */}</p>
                  <a href="https://rzp.io/l/lSCyZWb">
                  <button
                    className="custom-button"
                    // onClick={() => {
                    //   this.props.toggleShowBody(false);
                    //   const { navigate } = this.props.router;
                    //   navigate("/product");
                    // }}
                  >
                    Buy now
                  </button>
                  </a>
                </div>
              </div>
              <div className="col-md-4">
                <div className="product card">
                  <img
                    src="https://a.media-amazon.com/images/I/61b2RbzXVUL._SX679_.jpg"
                    alt="Product 3"
                    className="product-image"
                  />
                  <h3>Catch Spice Kashmiri Chilli Powder</h3>
                  <p>{/* Description */}</p>
                  <a href="https://rzp.io/l/NQoYD8n6u">
                  <button
                    className="custom-button"
                    // onClick={() => {
                    //   this.props.toggleShowBody(false);
                    //   const { navigate } = this.props.router;
                    //   navigate("/product");
                    // }}
                  >
                    Buy now
                  </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="section-about-us">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h2>About Us</h2>
              </div>
            </div>

          </div>
          <div className="row" style={{ maxWidth: "100%" }}>
            <div className="col-md-6 my-3 col-12">
              <div className="about-us-image-wrapper">
              </div>
            </div>
            <div className="col-md-6">
              <div className="about-us-text-wrapper my-3">
                <h3 className="about-us-title"
                  onClick={() => {
                    this.props.toggleShowBody(false);
                    const { navigate } = this.props.router;
                    navigate("/about");
                  }} >Our Story</h3>
                <p className="about-us-description wave-paragraph">
                  Our story began with a passion for spices that runs deep in our roots. We believe that spices are not just ingredients; they are the essence of flavor, culture, and tradition. Our journey started with a vision to bring the finest, most authentic spices from around the world to your table.
                  <br />
                  Driven by a commitment to quality and authenticity, we embarked on a quest to source the best spices, directly from the regions where they are grown. We forged strong relationships with local farmers and suppliers, ensuring that every spice we offer is of the highest quality, sustainably sourced, and ethically produced.


                </p>
              </div>
            </div>
          </div>
        </div>
        {/* <section className="instagram_area container-fluid">
        <div className="container-fluid">
          <div className="row justify-content-end">
            <div className="instagram_caption col-lg-3 col-12 row align-items-center my-2">
              <div className="row justify-content-start">
                <div className="instagram_logo px-0">
                  <img src="../../../insta.png.webp" alt="instagramLogo" />
                </div>
                <div className="heading_custom2">
                  <h2 style={{textTransform:"uppercase"}}>GET INSPIRED WITH INSTAGRAm</h2>
                  <p>
                    Suspendisse varius enim in eros elementum tristique. Duis
                    cursus, mi quis viverra ornare, eros dolor interdum nulla.
                  </p>
                </div>
                <button
                className="custom-button"
                onClick={() => {
                  this.props.toggleShowBody(false);
                  const { navigate } = this.props.router;
                  navigate("/product");
                }}
                style={{maxWidth:"250px"}}
              >
                Discover more
              </button>
              </div>
            </div>
            <div className="instagram_banners col-lg-9 col-12 my-2" style={{padding:"80px 0 80px"}}>
              <div className="row">
                <div className="instagram_banner col-md-6 col-12 p-0">
                  <div className="instagram_img w-100">
                    <img
                      src="../../../instra1.png.webp"
                      alt="banner_instagram"
                    />
                  </div>
                  <div className="instagram_link">
                    <a onClick={() => {
                  this.props.toggleShowBody(false);
                  const { navigate } = this.props.router;
                  navigate("/product");
                }} style={{cursor:"pointer"}}><i className="fa-brands fa-instagram"></i></a>
                  </div>
                </div>
                <div className="instagram_banner col-md-6 col-12 p-0">
                  <div className="instagram_img w-100">
                    <img
                      src="../../../instra2.png.webp"
                      alt="banner_instagram"
                    />
                  </div>
                  <div className="instagram_link">
                    <a onClick={() => {
                  this.props.toggleShowBody(false);
                  const { navigate } = this.props.router;
                  navigate("/product");
                }} style={{cursor:"pointer"}}><i className="fa-brands fa-instagram"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      </div>
    );
  }
}
export default withRouter(HomeBody);
