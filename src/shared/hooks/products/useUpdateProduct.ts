import { IProduct, productService } from '@services';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const useUpdateProduct = ({ id, title, description, price, category }: IProduct) => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: productService.updateProduct,

    onSuccess: async () => {
      await queryClient.invalidateQueries(['products']);
    },
  });

  const updateProduct = async () => {
    mutation.mutate({ id, title, description, price, category } as IProduct);
  };

  return updateProduct;
};
