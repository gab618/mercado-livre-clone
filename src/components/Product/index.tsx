import React from "react";
import tshirtImage from "../../assets/tshirt.png";
import SellerInfo from "../SellerInfo";
import ProductAction from "../ProductAction";

import {
  Container,
  Row,
  Panel,
  Column,
  Gallery,
  Section,
  Description,
} from "./styles";

const Product: React.FC = () => {
  return (
    <Container>
      <Row>
        <a href="#">Compartilhar</a>
        <a href="#">Vender um igual</a>
      </Row>

      <Panel>
        <Column>
          <Gallery>
            <img src={tshirtImage} alt="T-Shirth" />
          </Gallery>
          <Info />
        </Column>

        <Column>
          <ProductAction />
          <SellerInfo />
          <WarrantySection />
          <WarrantySection />
          <WarrantySection />
        </Column>
      </Panel>
    </Container>
  );
};

const WarrantySection = () => (
  <Section>
    <h4>Garantia</h4>

    <div>
      <span>
        <p className="title">Compra garantida com o Lorem Ipsum</p>
        <p className="description">
          Receba o produto que você está esperando ou devolvemos o seu dinheiro
        </p>
      </span>
      <span>
        <p className="title">Garantia do vendedor</p>
        <p className="description">sem garantia</p>
      </span>
    </div>

    <a href="#">Saiba mais sobre garantia</a>
  </Section>
);

const Info = () => (
  <Description>
    <h2>Descrição</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer placerat
      neque eu enim commodo interdum. Sed risus libero, fermentum nec neque id,
      tincidunt efficitur leo. Cras laoreet tempor rutrum. Cras quis sem dolor.
      In luctus mi at consequat mattis. Praesent tempor dictum tellus, nec
      tincidunt ligula dapibus at. Curabitur viverra arcu et eros hendrerit
      rhoncus nec sit amet enim.
      <br />
      <br />
      Itens inclusos: <br />
      - 1x LED <br />
      - 1x LED <br />
      - 1x LED <br />
      - 1x LED <br />
      - 1x LED <br />
      <br />
      Donec gravida elit nisl, vel lacinia purus porttitor vel. Donec accumsan,
      magna ut dapibus placerat, lacus ante consequat erat, nec placerat mi est
      et purus. Aenean mattis neque et erat egestas auctor. Nam sit amet eros
      sem. In consectetur purus id ex molestie ultrices. Phasellus arcu nulla,
      rutrum bibendum scelerisque sit amet, feugiat sit amet sem. Pellentesque
      eu nisl neque.
    </p>
  </Description>
);

export default Product;
