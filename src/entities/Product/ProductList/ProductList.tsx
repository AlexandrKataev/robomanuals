import { Table } from 'react-bootstrap';

import { useGetProducts } from '@hooks';

import { ProductRow } from './ProductRow';

export const ProductList = () => {
  const { products, isFetching } = useGetProducts();

  return (
    <Table striped borderless hover>
      <thead>
        <tr>
          <th>Название</th>
          <th>Цена</th>
          <th>id</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {isFetching ? (
          <h1>Загрузка</h1>
        ) : (
          products?.map((el) => {
            return <ProductRow {...el} />;
          })
        )}
      </tbody>
    </Table>
  );
};
