import { productService } from '@services';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const useDeleteProduct = (id: string) => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: productService.deleteProduct,
    onSuccess: async () => {
      await queryClient.invalidateQueries(['products']);
    },
  });

  const deleteProduct = async () => {
    mutation.mutate(id);
  };

  return deleteProduct;
};
