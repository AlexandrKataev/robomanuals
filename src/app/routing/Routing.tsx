import { AdminPage, CartPage, HomePage, ItemPage, UserPage } from '@pages';
import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';

interface IRoutingProps {
  isAdmin: boolean;
}

export const Routing: FC<IRoutingProps> = ({ isAdmin }) => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/user" element={<UserPage />} />
      {isAdmin && <Route path="/admin" element={<AdminPage />} />}
      <Route path="/item/:itemId" element={<ItemPage />} />
    </Routes>
  );
};
