import React from 'react'
import { Container, Row, Col, Form, FormGroup } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection"; 
import "../styles/checkout.css"
import { useSelector } from "react-redux";

const Checkout = () => {

  const totalQty = useSelector(state=>state.cart.totalQuantity)
  const totalAmount = useSelector(state=>state.cart.totalAmount)

  return (
    <Helmet title="Finalizar Compra">
      <CommonSection title="checkout"/>
      <section>
        <Container>
          <Row>
            <Col lg="8">
              <h6 className='mb-4 fw-bold' >Informações Do Pagamento</h6>
              <Form className='billing_form'>
                <FormGroup className='form_group'>
                  <input type="text" placeholder='Nome...' />
                </FormGroup>

                <FormGroup className='form_group'>
                  <input type="email" placeholder='E-mail...' />
                </FormGroup>

                <FormGroup className='form_group'>
                  <input type="number" placeholder='Telefone...' />
                </FormGroup>

                <FormGroup className='form_group'>
                  <input type="text" placeholder='CPF...' />
                </FormGroup>  

                <FormGroup className='form_group'>
                  <input type="text" placeholder='Cidade...' />
                </FormGroup>
              </Form>
            </Col>
            <Col lg="4">
              <div className="chekout_cart">
                <h6>Total de itens: <span>{totalQty}</span></h6>
                <h4>Preço Total: <span>R${totalAmount}</span></h4>
              </div>
              <button className="buy_btn w-100">Finalizar</button>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default Checkout