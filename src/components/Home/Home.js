import { Component, useEffect, useRef, useState } from "react";
import { Button, Card, CardGroup, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { productAtion } from "../../actions/productAction";
import { Header } from "../Layout/Header";
import ReactPaginate from "react-paginate";
import Loader from "../Loader";
import { Link } from "react-router-dom";

function Home() {
  const dispatch = useDispatch();
  const perPage = 3;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lastIndex, setLastIndex] = useState(perPage * currentIndex + perPage);
  const headerRef = useRef();

  useEffect(() => {
    dispatch(productAtion.getProduct());
  }, [dispatch]);
  const productData = useSelector((state) => state.productReducer);
  function truncate(str, no) {
    return str.length > no ? str.substring(0, no) + "..." : str;
  }

  function handlePageClick(page) {
    const selected = page.selected;
    setCurrentIndex(selected * perPage);
    setLastIndex(selected * perPage + perPage);
  }

  function addToCart(id) {
    console.log("id--", id);
    const currProduct = productData.data.filter((data) => data.id == id);

    headerRef.current.addToCart(id, currProduct[0]);
  }

  function displayProduct() {
    let product = productData.data.map((data, key) => {
      if (key < lastIndex && key >= currentIndex) {
        return (
          <Col>
            <Card style={{ width: "400px", minHeight: "655px" }}>
              <Card.Img
                variant="top"
                src={data.img}
                style={{ height: "398px" }}
              />
              <Card.Body>
                <Card.Title>
                  <Link to={`product/${data.id}`}>
                    {truncate(data.product_name, 72)}
                  </Link>
                </Card.Title>
                <Card.Text>{truncate(data.description, 120)}</Card.Text>
                <Button variant="primary" onClick={() => addToCart(data.id)}>
                  ADD TO CART
                </Button>
              </Card.Body>
            </Card>
          </Col>
        );
      }
    });
    return product;
  }
  return (
    <Container fluid className="pr-0 pl-0">
      <Header ref={headerRef} />
      <Container fluid>
        {productData.loading && <Loader />}
        {!productData.loading && (
          <div>
            {productData.total > 0 && (
              <Row className="pd-115">{displayProduct()}</Row>
            )}
            {productData.total > 0 && (
              <div
                style={{
                  marginLeft: "42%",
                  marginBottom: "50px",
                  marginTop: "-60px",
                }}
              >
                <ReactPaginate
                  previousLabel="previous"
                  nextLabel="next"
                  breakLabel={"..."}
                  breakClassName={"break-me"}
                  pageCount={4}
                  marginPagesDisplayed={2}
                  pageRangeDisplayed={5}
                  onPageChange={handlePageClick}
                  containerClassName={"pagination"}
                  activeClassName={"active"}
                />
              </div>
            )}

            {productData.total <= 0 && <h5>No data</h5>}
          </div>
        )}
      </Container>
    </Container>
  );
}

export default Home;
