import {
  forwardRef,
  useState,
  useRef,
  useImperativeHandle,
  useEffect,
} from "react";
import {
  Badge,
  Button,
  Container,
  Modal,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { cartAction } from "../../actions/cartAction";
export const Header = forwardRef((props, ref) => {
  const cart = useSelector((state) => state.cartReducer.data);
  const dispatch = useDispatch();
  useImperativeHandle(ref, () => ({
    addToCart(id, product) {
      dispatch(cartAction.addToCart(product));
    },
  }));

  const [cartProduct, setCartProduct] = useState(cart);
  const [cartModal, setCartModal] = useState(false);

  let countCart = useSelector((state) => state.cartReducer.data.length);
  const [cartCount, setCartCount] = useState(countCart);

  useEffect(() => {
    if (cart) {
      setCartCount(cart.length);
    }
  }, [cart]);

  return (
    <div>
      <div className="offers">offers</div>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar collapseOnSelect expand="lg">
            <Navbar.Brand href="/" className="logo">
              <img src="../NykaaLogo.png" className="w-50 h-100"></img>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <div>
                  <Link to="/category">Category</Link>
                </div>
                <div>
                  <Link to="/product">Product</Link>
                </div>
                <NavDropdown title="Brand" id="collasible-nav-dropdown">
                  <NavDropdown.Item>
                    <div>
                      <Link to="/product">Brand 1</Link>
                    </div>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <div>
                      <Link to="/product">Brand 2</Link>{" "}
                    </div>
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Nav className="navbar-nav-side">
                <Link to="/account">Account</Link>
                <Link className="pd-50">
                  <Button side="lg" onClick={() => setCartModal(true)}>
                    Cart
                    {cartCount > 0 && (
                      <Badge
                        style={{
                          background: "white",
                          color: "black",
                          marginLeft: "5px",
                        }}
                        bg="secondary"
                      >
                        {cartCount}
                      </Badge>
                    )}
                  </Button>
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Container>
      </Navbar>
      <Modal show={cartModal} onHide={() => setCartModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setCartModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
});
