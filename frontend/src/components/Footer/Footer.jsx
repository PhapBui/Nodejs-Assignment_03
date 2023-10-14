import React from "react";
import Container from "react-bootstrap/Container";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import "./Footer.scss";

const fakeData = [
  {
    order: 1,
    title: "Customer Services",
    items: [
      { text: "Help & Contact Us", link: "/" },
      { text: "Return & Refunds", link: "/" },
      { text: "Online Stores", link: "/" },
      { text: "Terms & Conditions", link: "/" },
    ],
  },
  {
    order: 2,
    title: "Company",
    items: [
      { text: "What We Do", link: "/" },
      { text: "Available Services", link: "/" },
      { text: "Lastest Posts", link: "/" },
      { text: "FAQs", link: "/" },
    ],
  },
  {
    order: 3,
    title: "Social Media",
    items: [
      { text: "Twitter", link: "/" },
      { text: "Instagram", link: "/" },
      { text: "Facebook", link: "/" },
      { text: "Pinterest", link: "/" },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          {fakeData.map((data) => (
            <Col className="footer__items" key={data.order}>
              <Card.Title className="footer__title">{data.title}</Card.Title>

              {data.items.map((item) => (
                <Link
                  className="footer__item"
                  to={item.link}
                  key={Math.random()}
                >
                  {item.text}
                </Link>
              ))}
            </Col>
          ))}
        </Row>
      </Container>
    </footer>
  );
};

export default React.memo(Footer);
