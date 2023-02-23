import React, { useState } from "react";
import CommonSection from "../components/UI/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import "../styles/shop.css";
import products from "../assets/data/products";
import { Container, Row, Col } from "reactstrap";
import ProductsList from "../components/UI/ProductsList";

const Shop = () => {
  const [productsData, setProductsData] = useState(products);

  const handleFilter = (e) => {
    const filterValue = e.target.value;
    if (filterValue === "Bots") {
      const filteredProducts = products.filter(
        (item) => item.category === "bot"
      );

      setProductsData(filteredProducts);
    }
    if (filterValue === "Scripts") {
      const filteredProducts = products.filter(
        (item) => item.category === "scripts-web"
      );

      setProductsData(filteredProducts);
    }
    if (filterValue === "websites") {
      const filteredProducts = products.filter(
        (item) => item.category === "websites"
      );

      setProductsData(filteredProducts);
    }
    if (filterValue === "domínios") {
      const filteredProducts = products.filter(
        (item) => item.category === "domínios"
      );

      setProductsData(filteredProducts);
    }
    
  };

  const handlerSearch = e => {
    const searchTerm = e.target.value

    const searchedProducts = products.filter(item=> item.productName.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()))

    setProductsData(searchedProducts)
  }
  return (
    <Helmet title="Loja">
      <CommonSection title="Produtos" />
      <section>
        <Container>
          <Row>
            <Col lg="3" md="6">
              <div className="filter_widget mb-3">
                <select onChange={handleFilter}>
                  <option>Classe De Produtos</option>
                  <option value="Bots">Bots</option>
                  <option value="Scripts">Scripts</option>
                  <option value="WebSites">WebSites</option>
                  <option value="Domínios">Domínios</option>
                </select>
              </div>
            </Col>
            <Col lg="3" md="6">
              <div className="filter_widget">
                {/*<select>
                  <option>Produtos</option>
                  <option value="ascending">Crescente</option>
                  <option value="descending">Descendente</option>
  </select>*/}
              </div>
            </Col>
            <Col lg="6" md="12" className="text-end">
              <div className="search_box">
                <input type="text" placeholder="Pesquise Seu Produto Aqui..." onChange={handlerSearch}/>
                <span>
                  <i className="ri-search-line"></i>
                </span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            {productsData.length === 0? 
              <h1 className="text-center fs-4">Nao Existe Nenhum Produto</h1> :
              <ProductsList data={productsData} />
            }
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Shop;
