import { CartIcon } from '@icons';
import { DocumentData } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { productApi } from 'src/shared/api';

export const HomePage = () => {
  const [products, setProducts] = useState([] as DocumentData[]);

  useEffect(() => {
    productApi.getProducts().then((data) => {
      const fetchedProducts = data.map((doc) => {
        return doc.data();
      });
      setProducts(fetchedProducts);
    });
  }, []);

  return (
    <Container className="d-flex flex-column">
      <h1>HomePage</h1>
      <Row>
        {products.map((el) => {
          return (
            <Col sm={3}>
              <Card style={{ height: '600px' }}>
                <Card.Img
                  variant="top"
                  src="https://i.pinimg.com/originals/93/43/76/9343764527e53a481b5be200bdb3cff8.jpg"
                />
                <Card.Body>
                  <Card.Title>{el.title}</Card.Title>
                  <Card.Text>{el.description}</Card.Text>
                  <Card.Text>{el.price} р</Card.Text>
                  <Button variant="primary">
                    <CartIcon />
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};
