import { useQuery } from '@tanstack/react-query';

import { productService } from '@services';

export const useGetTasks = (searchValue: string) => {
  const { data: products, isFetching } = useQuery(['products'], () => productService.getProducts());
  return { products, isFetching };
};
