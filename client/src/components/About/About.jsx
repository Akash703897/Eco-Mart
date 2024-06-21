import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
import withRouter from "../../helpers/withRouter";
import "./About.css";
class About extends Component {
  render() {
    return (
      <div>
        <section className="carousel carousel-product">
          <div className="container-fluid carousel-main">
            <div className="carousel-bg">
              <div className="carousel-pro-cap">
                <h1>About</h1>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">Home</li>
                    <li className="breadcrumb-item active" aria-current="page" style={{color:"#fd8f5f"}}>
                      About
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </section>
        <section className="products container pd-section">
          <div className="container-custom1">
            <div className="row justify-content-center">
              <div className="col-md-9">
                <div className="heading-custom-pro">
                  <h2>Our Story</h2>
                  <p className="story-paragraph"style={{textAlign:"justify"}}>
                  Our story began with a passion for spices that runs deep in our roots. We believe that spices are not just ingredients; they are the essence of flavor, culture, and tradition. Our journey started with a vision to bring the finest, most authentic spices from around the world to your table.
                 <br/><br/>
                 Driven by a commitment to quality and authenticity, we embarked on a quest to source the best spices, directly from the regions where they are grown. We forged strong relationships with local farmers and suppliers, ensuring that every spice we offer is of the highest quality, sustainably sourced, and ethically produced.

                  </p>
                </div>
              </div>
            </div>
            <Carousel>
              <Carousel.Item style={{ position: "relative" }}>
                <img
                  className="d-block"
                  style={{ minHeight: "250px" ,width:"100%"}}
                  src="https://w0.peakpx.com/wallpaper/218/321/HD-wallpaper-food-still-life-spices-herbs-and-spices.jpg"
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item style={{ position: "relative" }}>
                <img
                  className="d-block"
                  style={{ minHeight: "250px" ,width:"100%"}}
                  src="https://png.pngtree.com/background/20230611/original/pngtree-several-bowls-of-fresh-spiced-herbs-and-spices-picture-image_3143893.jpg"
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item style={{ position: "relative" }}>
                <img
                  className="d-block"
                  style={{ minHeight: "250px" ,width:"100%"}}
                  src="../../../product13.jpg"
                  alt="Third slide"
                />
              </Carousel.Item>
            </Carousel>
            <div className="row justify-content-center pt-5">
              <div className="col-md-9">
                <div className="heading-custom-pro">
                  <h2>2023</h2>
                  <p className="story-paragraph"style={{textAlign:"justify"}}>
                  But our story is not just about spices; it's about people. It's about the farmers who work tirelessly to cultivate the finest ingredients, the communities that rely on the spice trade for their livelihoods, and the customers who trust us to deliver exceptional quality every time.
                  </p>
                </div>
              </div>
            </div>
            <Carousel>
              <Carousel.Item style={{ position: "relative" }}>
                <img
                  className="d-block"
                  style={{ minHeight: "250px" ,width:"100%"}}
                  src="https://st4.depositphotos.com/4590583/28668/i/450/depositphotos_286686612-stock-photo-colorful-herbs-spices-cooking-indian.jpg"
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item style={{ position: "relative" }}>
                <img
                  className="d-block"
                  style={{ minHeight: "250px" ,width:"100%"}}
                  src="https://w0.peakpx.com/wallpaper/516/715/HD-wallpaper-food-still-life-cinnamon-herbs-spices-herbs-and-spices.jpg"
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item style={{ position: "relative" }}>
                <img
                  className="d-block"
                  style={{ minHeight: "250px" ,width:"100%"}}
                  src="https://w0.peakpx.com/wallpaper/794/126/HD-wallpaper-food-herbs-and-spices.jpg"
                  alt="Third slide"
                />
              </Carousel.Item>
            </Carousel>
            <br/><br/>
            <p className="story-paragraph"style={{textAlign:"justify"}}>
            Today, we are proud to offer a wide range of spices, each telling its own unique story of origin and flavor. We invite you to join us on our journey, as we continue to explore the rich and diverse world of spices, bringing you the best of nature's bounty, one spice at a time.
</p>
          </div>
          
        </section>
      </div>
    );
  }
}
export default withRouter(About);
