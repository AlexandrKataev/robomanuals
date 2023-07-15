import { ProductCard } from './ProductCard';
import { useGetProducts } from '@hooks';

export const ProductCatalog = () => {
  const { products } = useGetProducts();

  return (
    <>
      {products?.map((el) => {
        return <ProductCard {...el} />;
      })}
    </>
  );
};
