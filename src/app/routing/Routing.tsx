import { AddProduct } from '@features';
import { AdminPage, CartPage, HomePage, ProductPage, UserPage } from '@pages';
import { FC } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

interface IRoutingProps {
  isAdmin: boolean;
}

export const Routing: FC<IRoutingProps> = ({ isAdmin }) => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="cart" element={<CartPage />} />
      <Route path="user" element={<UserPage />} />
      <Route path="product/:productId" element={<ProductPage />} />
      {isAdmin && (
        <Route path="admin" element={<AdminPage />}>
          <Route path="addProduct" element={<AddProduct />} />
        </Route>
      )}

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};
