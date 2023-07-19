import { useState } from 'react';
import { Button } from 'react-bootstrap';

import { AddProductModal } from './AddProductModal';
import { EditProductModal } from './EditProductModal';

export const AdminPanel = (props: any) => {
  return (
    <div className="mb-3">
      <Button onClick={props.handleShowAddProductModal}>Добавить товар</Button>
    </div>
  );
};
