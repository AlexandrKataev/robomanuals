import { Container } from 'react-bootstrap';
import { selectCartProducts } from 'src/app/store/cartSlice';
import { useAppSelector } from 'src/app/store/hooks';

export const CartPage = () => {
  const products = useAppSelector(selectCartProducts);
  return (
    <Container className="d-flex flex-column align-items-center">
      <h1>Корзина</h1>
      {products.length ? (
        products.map((el) => {
          return (
            <>
              <div>{el.title}</div>
              <div>{el.price}</div>
            </>
          );
        })
      ) : (
        <h2 className="mt-5">Корзина пустая</h2>
      )}
    </Container>
  );
};
