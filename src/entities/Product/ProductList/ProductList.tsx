import { Table } from 'react-bootstrap';

import { useGetProducts } from '@hooks';

import { ProductRow } from './ProductRow';
import { useAppSelector } from 'src/app/store/hooks';
import { selectCategory } from 'src/app/store/filterSlice';

export const ProductList = (props: any) => {
  const category = useAppSelector(selectCategory);
  const { products, isFetching } = useGetProducts(category);

  return (
    <Table striped borderless hover>
      <thead>
        <tr>
          <th>Название</th>
          <th>Категория</th>
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
            return <ProductRow product={el} {...props} />;
          })
        )}
      </tbody>
    </Table>
  );
};
