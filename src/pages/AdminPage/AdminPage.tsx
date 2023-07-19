import { ProductList } from '@entities';
import { AdminPanel } from '@features';
import { IProduct } from '@services';
import { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { AddProductModal } from 'src/features/AdminPanel/AddProductModal';
import { EditProductModal } from 'src/features/AdminPanel/EditProductModal';

export const AdminPage = () => {
  const [showAddProductModal, setShowAddProductModal] = useState(false);
  const handleShowAddProductModal = () => setShowAddProductModal(true);
  const handleCloseAddProductModal = () => setShowAddProductModal(false);

  const [showEditProductModal, setShowEditProductModal] = useState(false);
  const [productForEdit, setProductForEdit] = useState({} as IProduct);
  const handleShowEditProductModal = (product: IProduct) => {
    setProductForEdit(product);
    setShowEditProductModal(true);
  };
  const handleCloseEditProductModal = () => setShowEditProductModal(false);
  return (
    <Container>
      <AdminPanel handleShowAddProductModal={handleShowAddProductModal} />
      <ProductList handleShowEditProductModal={handleShowEditProductModal} />
      <AddProductModal
        show={showAddProductModal}
        setShow={setShowAddProductModal}
        close={handleCloseAddProductModal}
      />
      <EditProductModal
        show={showEditProductModal}
        close={handleCloseEditProductModal}
        product={productForEdit}
      />
    </Container>
  );
};
