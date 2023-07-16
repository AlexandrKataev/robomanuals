import { useState } from 'react';
import { Button } from 'react-bootstrap';

import { AddProductModal } from './AddProductModal';

export const AdminPanel = () => {
  const [showAddProductModal, setShowAddProductModal] = useState(false);
  const handleShowAddProductModal = () => setShowAddProductModal(true);
  const handleCloseAddProductModal = () => setShowAddProductModal(false);

  return (
    <div className="mb-3">
      <Button onClick={handleShowAddProductModal}>Добавить товар</Button>
      <AddProductModal
        show={showAddProductModal}
        setShow={setShowAddProductModal}
        close={handleCloseAddProductModal}
      />
    </div>
  );
};
