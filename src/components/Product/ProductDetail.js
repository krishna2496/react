import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { Header } from "../Layout/Header";
import { Rating } from "react-simple-star-rating";
import { useState } from "react";

export const ProductDetail = () => {
  const productsArray = JSON.parse(localStorage.getItem("product"));
  const products = productsArray.product;
  const { id } = useParams();
  let productDetail = products.filter((data) => data.id == id);
  productDetail = productDetail[0];
  const [rating, setRating] = useState(2);

  function sliderImgClick(data) {
    document.querySelector(".productImg").src = data;
  }

  function getSlider() {
    let slider = productDetail.slider;
    if (slider) {
      return slider.map((data, key) => {
        return (
          <img
            src={data}
            className="sliderImg"
            onClick={() => sliderImgClick(data)}
            key={key}
          />
        );
      });
    }
  }

  function handleRating(rating) {
    setRating(rating);
  }

  return (
    <Container fluid>
      <Header />
      <Container fluid>
        <Row>
          <Col>
            <img src={productDetail.img} className="productImg" />
            <div className="slider">{getSlider()}</div>
          </Col>
          <Col className="slider">
            <h3>{productDetail.product_name}</h3>
            <p>{productDetail.description}</p>
            <div>
              <Rating
                onClick={handleRating}
                ratingValue={rating} /* Rating Props */
              />
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};
