import { useEffect, useState } from 'react';

import { IProduct, productService } from '@services';
import { Table } from 'react-bootstrap';
import { TrashIcon } from '@icons';

export const ProductList = () => {
  const [products, setProducts] = useState([] as IProduct[]);

  useEffect(() => {
    productService.getProducts().then((data) => {
      setProducts(data);
    });
  }, []);

  const onClickDeleteProduct = (id: string) => {
    productService.deleteProduct(id);
  };

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
        {products.map((el) => {
          return (
            <tr>
              <td>{el.title}</td>
              <td>{el.price}</td>
              <td>{el.id}</td>
              <td className="icon-stroke" onClick={() => onClickDeleteProduct(el.id as string)}>
                <TrashIcon />
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};
