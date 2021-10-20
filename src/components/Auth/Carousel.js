import { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import { useSelector } from "react-redux";

class Slider extends Component {
  constructor(props) {
    super(props);
    this.getCourselItem = this.getCourselItem.bind(this);
  }

  getCourselItem() {
    const langCode = this.props.langCode;
    if (this.props.slider && Object.keys(this.props.slider.data).length !== 0) {
      const slider = this.props.slider.data;

      const carousolItems = slider.map((data, key) => {
        return (
          <Carousel.Item key={key}>
            <img
              className="d-block w-100 vh-100"
              src={data.img}
              alt={data.title}
            />
            <Carousel.Caption>
              <h3>{data.title}</h3>
              <p>{data.description[langCode]}</p>
            </Carousel.Caption>
          </Carousel.Item>
        );
      });
      return carousolItems;
    }
  }

  render() {
    return <Carousel>{this.getCourselItem()}</Carousel>;
  }
}

export default Slider;
