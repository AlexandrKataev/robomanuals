import { useEffect, useState } from 'react';
import styles from './ProductList.module.scss';
import { DocumentData } from 'firebase/firestore';
import { productApi } from 'src/shared/api';
import { Table } from 'react-bootstrap';
import { TrashIcon, UserIcon } from '@icons';

export const ProductList = () => {
  const [products, setProducts] = useState([] as DocumentData[]);

  useEffect(() => {
    productApi.getProducts().then((data) => {
      const fetchedProducts = data.map((doc) => {
        return { ...doc.data(), id: doc.id };
      });
      setProducts(fetchedProducts);
    });
  }, []);

  const onClickDeleteProduct = (id: string) => {
    productApi.deleteProduct(id);
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
              <td className="icon-stroke" onClick={() => onClickDeleteProduct(el.id)}>
                <TrashIcon />
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};
