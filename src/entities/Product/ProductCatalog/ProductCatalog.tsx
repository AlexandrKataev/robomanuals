import { useAppSelector } from 'src/app/store/hooks';
import { ProductCard } from './ProductCard';
import { useGetProducts } from '@hooks';
import { selectCategory } from 'src/app/store/filterSlice';

export const ProductCatalog = () => {
  const category = useAppSelector(selectCategory);
  const { products } = useGetProducts(category);

  return (
    <>
      {products?.map((el) => {
        return <ProductCard {...el} />;
      })}
    </>
  );
};
