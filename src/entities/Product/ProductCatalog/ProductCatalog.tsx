import { useEffect, useState } from 'react';

import { DocumentData } from 'firebase/firestore';
import { productApi } from 'src/shared/api';
import { Button, Card, Col } from 'react-bootstrap';
import { CartIcon } from '@icons';

export const ProductCatalog = () => {
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
    <>
      {products.map((el) => {
        return (
          <Col sm={6} md={4} lg={3}>
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
    </>
  );
};
