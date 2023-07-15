import { useEffect, useState } from 'react';
import { Button, Card, Col } from 'react-bootstrap';

import { CartIcon } from '@icons';
import { IProduct, productService } from '@services';

export const ProductCatalog = () => {
  const [products, setProducts] = useState([] as IProduct[]);

  useEffect(() => {
    productService.getProducts().then((data) => {
      setProducts(data);
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
