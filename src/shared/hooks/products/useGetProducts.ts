import { useQuery } from '@tanstack/react-query';

import { productService } from '@services';

export const useGetProducts = () => {
  const { data: products, isFetching } = useQuery(['products'], () => productService.getProducts());
  return { products, isFetching };
};
