import { TrashIcon } from '@icons';
import { IProduct } from '@services';
import { useDeleteProduct } from 'src/shared/hooks/products/useDeleteProduct';
import { EditIcon } from 'src/shared/icons/EditIcon';

interface productProps {
  handleShowEditProductModal: any;
  product: IProduct;
}

export const ProductRow = ({ handleShowEditProductModal, product }: productProps) => {
  const deleteProduct = useDeleteProduct(product.id as string);

  return (
    <tr>
      <td>{product.title}</td>
      <td>{product.category}</td>
      <td>{product.price}</td>
      <td>{product.id}</td>
      <td className="icon-stroke" onClick={(product) => handleShowEditProductModal(product)}>
        <EditIcon />
      </td>
      <td className="icon-stroke" onClick={deleteProduct}>
        <TrashIcon />
      </td>
    </tr>
  );
};
