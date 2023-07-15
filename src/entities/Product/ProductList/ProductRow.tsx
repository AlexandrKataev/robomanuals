import { TrashIcon } from '@icons';
import { IProduct } from '@services';
import { useDeleteProduct } from 'src/shared/hooks/products/useDeleteProduct';

export const ProductRow = ({ title, price, id }: IProduct) => {
  const deleteProduct = useDeleteProduct(id as string);
  return (
    <tr>
      <td>{title}</td>
      <td>{price}</td>
      <td>{id}</td>
      <td className="icon-stroke" onClick={deleteProduct}>
        <TrashIcon />
      </td>
    </tr>
  );
};
