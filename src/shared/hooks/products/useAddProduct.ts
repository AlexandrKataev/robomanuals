import { IProduct, productService } from '@services';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const useAddProduct = ({ title, description, price, category }: IProduct) => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: productService.addProduct,

    onSuccess: async () => {
      await queryClient.invalidateQueries(['products']);
    },
  });

  const addProduct = async () => {
    mutation.mutate({ title, description, price, category } as IProduct);
  };

  return addProduct;
};
