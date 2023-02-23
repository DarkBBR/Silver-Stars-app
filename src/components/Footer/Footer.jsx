import React from "react";
import "./footer.css";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";

const Footer = () => {

  const year = new Date().getFullYear
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="4" className="mb-4" md="6">
            <div className="logo">
              <h1 className="text-white">Silver Stars</h1>
              <div>
                <h1>Silver Stars</h1>
              </div>
            </div>
            <p className="footer_text mt-4">
              Nós somos uma empresa dedicada ao "Desenvolvimento" da automatização. Trabalhamos desde 2020 com total empenho e dedicação ao futuro! <br /> Contato: silverstarsofc@gmail.com
            </p>
          </Col>
          <Col lg="3" md="3" className="mb-4">
            <div className="footer_quick-links">
              <h4 className="quick_links-title">Tipos De Bots</h4>
              <ListGroup className="mb-3">
                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2" >
                  <Link to="#">Bots</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                  <Link to="#">Produtos</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                  <Link to="#">Mais Vendidos</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                  <Link to="#">Populares</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg="2" md="3" className="mb-4">
            <div className="footer_quick-links">
              <h4 className="quick_links-title">Links Úteis</h4>
              <ListGroup className="mb-3">
                <ListGroupItem className="ps-0 border-0">
                  <Link to="/shop">Loja</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="/cart">Carrinho</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="/login">Login</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Politica</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg="3" md="3">
            <div className="footer_quick-links">
              <h4 className="quick_links-title">Contato</h4>
              <ListGroup className="footer_contact">
                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                  <span>
                    <i className="ri-phone-line"></i>
                  </span>
                  <Link to="">
                    <p>Whatsapp</p>
                  </Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                  <span>
                    <i className="ri-facebook-line"></i>
                  </span>
                  <Link to="">
                    <p>Facebook</p>
                  </Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                  <span>
                    <i className="ri-telegram-line"></i>
                  </span>
                  <Link to="">
                    <p>Telegram</p>
                  </Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                  <span>
                    <i className="ri-mail-line"></i>
                  </span>
                  <Link to="">
                    <p>E-mail</p>
                  </Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg="12" md="4" className="mb-4">
            <p className="footer_copyright"><span><i className="ri-copyright-line"></i></span>Copyright {year} Desenvolvido Pela Equipe Da Silver Stars. Todos Os Direitos Foram Reservados.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
