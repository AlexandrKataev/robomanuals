import { Badge, Button, Card, Col } from 'react-bootstrap';

import { IProduct } from '@services';
import { CartIcon2 } from '@icons';
import { useAppDispatch } from 'src/app/store/store';
import {
  addProductInCart,
  deleteProductFromCart,
  selectCartProducts,
} from 'src/app/store/cartSlice';

import { useAppSelector } from 'src/app/store/hooks';

export const ProductCard = (props: IProduct) => {
  const dispatch = useAppDispatch();

  const cartProducts = useAppSelector(selectCartProducts);

  const inCart = cartProducts.some((el) => el.id === props.id);

  const onClickIncrement = () => {
    inCart ? dispatch(deleteProductFromCart(props.id || '')) : dispatch(addProductInCart(props));
  };

  return (
    <Col sm={6} md={4} lg={3} className="px-2 py-4 ">
      <Card style={{ height: '100%', border: '0px' }} className="shadow-sm p-2">
        <Card.Img
          variant="top"
          src="https://static.rapidonline.com/catalogueimages/product/70/65/s70-6536p04wc.jpg"
        />
        <Card.Body className="d-flex flex-column">
          <div className="mb-2">
            <Badge style={{ opacity: '40%' }} bg="primary">
              {props.category}
            </Badge>
          </div>

          <Card.Title className="fs-4">{props.title}</Card.Title>
          <Card.Text>{props.description}</Card.Text>

          <div className="mt-auto d-flex  align-items-center ">
            <span className="fs-5 align-middle fw-bold  ms-auto me-3">{props.price} ₽</span>
            <Button
              className="d-flex "
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
