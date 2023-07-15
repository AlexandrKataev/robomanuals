import { Button, Card, Col } from 'react-bootstrap';

import { IProduct } from '@services';
import { CartIcon, CartIcon2 } from '@icons';
import { useAppDispatch } from 'src/app/store/store';
import {
  addProductInCart,
  deleteProductFromCart,
  selectCartProducts,
} from 'src/app/store/cartSlice';
import { useState } from 'react';
import { useAppSelector } from 'src/app/store/hooks';

export const ProductCard = (props: IProduct) => {
  const dispatch = useAppDispatch();

  const cartProducts = useAppSelector(selectCartProducts);

  const inCart = cartProducts.some((el) => el.id === props.id);

  const onClickIncrement = () => {
    inCart ? dispatch(deleteProductFromCart(props.id || '')) : dispatch(addProductInCart(props));
  };

  return (
    <Col sm={6} md={4} lg={3} className="px-3 py-4">
      <Card style={{ height: '100%' }}>
        <Card.Img
          variant="top"
          src="https://i.pinimg.com/originals/93/43/76/9343764527e53a481b5be200bdb3cff8.jpg"
        />
        <Card.Body className="d-flex flex-column">
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>{props.description}</Card.Text>
          <div className="ms-auto mt-auto">
            <Card.Text className="fs-5">{props.price} р</Card.Text>
            <Button
              className=""
              variant={inCart ? 'primary' : 'outline-primary'}
              onClick={onClickIncrement}>
              <CartIcon2 color={inCart ? '#ffffff' : '#28ace0'} />
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};
