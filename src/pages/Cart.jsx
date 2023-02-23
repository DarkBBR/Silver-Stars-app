import React from "react";
import "../styles/cart.css";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import { Container, Row, Col } from "reactstrap";
import { motion } from "framer-motion";
import { cartActions } from "../redux/slices/cartSlice";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector(state=> state.cart.totalAmount);

  return (
    <Helmet title="Carrinho">
      <CommonSection title="Carrinho" />
      <section>
        <Container>
          <Row>
            <Col lg="9">
              {cartItems.lenght === 0 ? (
                <h2 className="fs-4 text-center">
                  {" "}
                  Nenhum Item Foi Adicionado Ao Carrinho
                </h2>
              ) : (
                <table className="table bordered">
                  <thead>
                    <tr>
                      <th>Imagem</th>
                      <th>Nome</th>
                      <th>Preço</th>
                      <th>Quantidade</th>
                      <th>Deletar</th>
                    </tr>
                  </thead>

                  <tbody>
                    {cartItems.map((item, index) => (
                      <Tr item={item} key={index} />
                    ))}
                  </tbody>
                </table>
              )}
            </Col>
            <Col lg="3">
              <div>
                <h6 className="d-flex align-items-center justify-content-between">
                  Preço Total:
                  <span className="fs-4 fw-bold">R${totalAmount}</span>  
                </h6>
              </div>
              <p className="fs-6 mt-4">Taxas não serão conbradas na finalização da compra.</p>
              <button className="buy_btn w-100">
                <Link to="/checkout">Finalizar Compra</Link>
              </button>
              <button className="buy_btn w-100 mt-3">
                <Link to="/shop">Continuar Para Loja</Link>
              </button>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

const Tr = ({ item }) => {

  const dispatch = useDispatch()
  
  const deleteProduct = ()=>{
    dispatch(cartActions.deleteItem(item.id))
  }
  return (
    <tr>
      <td>
        <img src={item.imgUrl} alt="" />
      </td>
      <td>{item.productName}</td>
      <td>R${item.price},00</td>
      <td>{item.quantity}</td>
      <td>
        <motion.i
          onClick={deleteProduct}
          whileTap={{ scale: 1.2 }}
          className="ri-delete-bin-line"
        ></motion.i>
      </td>
    </tr>
  );
};

export default Cart;
