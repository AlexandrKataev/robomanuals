import { useQuery } from '@tanstack/react-query';

import { Categories, productService } from '@services';

export const useGetProducts = (category: Categories | 'all') => {
  const { data: products, isFetching } = useQuery(['products', category], () =>
    productService.getProducts(category),
  );

  return { products, isFetching };
};
