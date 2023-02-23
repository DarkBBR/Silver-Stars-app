import React, { useState, useEffect } from "react";

import Helmet from "../components/Helmet/Helmet";
import Services from "../services/Services";
import ProductsList from "../components/UI/ProductsList";
import products from "../assets/data/products";

import heroImg from "../assets/images/Hero/logo.png";

import "../styles/home.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

const Home = () => {
  const [trendingProducts, setTrendingProducts] = useState([]);
  const [bestSalesProducts, setBestSalesProducts] = useState([]);
  const [mobileProducts, setMobileProducts] = useState([]);
  const [wirelessProducts, setWirelessProducts] = useState([]);
  const [popularProducts, setPopularProducts] = useState([]);

  const year = new Date().getFullYear();

  useEffect(() => {
    const filteredTrendingProducts = products.filter(
      (item) => item.category === "bot"
    );

    const filteredBestSalesProducts = products.filter(
      (item) => item.category === "scripts-web"
    );

    const filteredMobileProducts = products.filter(
      (item) => item.category === "website"
    );

    const filteredWirelessProducts = products.filter(
      (item) => item.category === "wireless"
    );

    const filteredPopularProducts = products.filter(
      (item) => item.category === "watch"
    );

    setTrendingProducts(filteredTrendingProducts);
    setBestSalesProducts(filteredBestSalesProducts);
    setWirelessProducts(filteredWirelessProducts);
    setMobileProducts(filteredMobileProducts);
    setPopularProducts(filteredPopularProducts);
  }, []);
  return (
    <Helmet title={"Home"}>
      <section className="hero_section">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero_content">
                <p className="hero_subtitle">Protos Novos em: {year}</p>
                <h2>
                  Automatize Suas Vendas & Projetos Com Os Bots Da Silver Stars
                </h2>
                <p>
                  Temos variáveis tipos de Bots & Apis & WebSites & Scripts.{" "}
                  <br /> Ganhe 30% De Desconto Na Primeira Compra!
                </p>
                <motion.button whileTap={{ scale: 1.2 }} className="buy_btn">
                  <Link to="">API GRÁTIS</Link>
                </motion.button>
              </div>
            </Col>
            <Col lg="6" md="6">
              <div className="hero_img">
                <img src={heroImg} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Services />

      <section className="trending_products">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section_title">Bots</h2>
            </Col>
            <ProductsList data={trendingProducts} />
          </Row>
        </Container>
      </section>

      <section className="best_sales">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section_title">Scripts Web</h2>
            </Col>
            <ProductsList data={bestSalesProducts} />
          </Row>
        </Container>
      </section>

      {/*<section className="timer_count">
        <Container>
          <Row>
            <Col lg="6" md="12" className="count_down-col">
              <div className="clock_top-content">
                <h4 className="text-white fs-4 mb-5">Visite o nosso Canal No Youtube, La postamos Scripts, cideos de atualização e tutoriais.</h4>
                <h3 className="text-white fs-1 mb-3">- Silver Stars</h3>
            
              </div>   
              <motion.button whileTap={{scale: 1.2}} className="buy_btn store_btn">
                <Link to="/">Canal No Youtube</Link>
              </motion.button>
              
            </Col>
            <Col lg="6" md="12" className="text-end counter_img">
              <img src={counterImg} alt="" />
            </Col>
            
          </Row>
        </Container>
  </section>*/}

      <section className="new_arrivals">
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5">
              <h2 className="section_title">Produtos Mais Vendidos</h2>
            </Col>
            <ProductsList data={mobileProducts} />
            <ProductsList data={wirelessProducts} />
          </Row>
        </Container>
      </section>

      <section className="popular_category">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section_title">Popular Na Comunidade</h2>
            </Col>
            <ProductsList data={popularProducts} />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
