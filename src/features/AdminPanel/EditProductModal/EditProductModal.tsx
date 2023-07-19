import { useAddProduct, useInput } from '@hooks';

import { useState } from 'react';

import { Categories, IProduct } from '@services';
import { Button, ButtonGroup, Form, Modal } from 'react-bootstrap';
import { useUpdateProduct } from 'src/shared/hooks/products/useUpdateProduct';

interface EditProductModalProps {
  product: IProduct;
  show: boolean;
  close: () => void;
}

export const EditProductModal = (props: EditProductModalProps) => {
  const { value: titleValue, onChange: onTitleChange } = useInput(props.product.title);
  const { value: descriptionValue, onChange: onDescriptionChange } = useInput(
    props.product.description,
  );
  const { value: priceValue, onChange: onPriceChange } = useInput(props.product.price + '');
  const [category, setCategory] = useState(props.product.category);

  const onChangeCategory = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(event.target.value as Categories);
  };

  const createProduct = useUpdateProduct({
    title: titleValue,
    description: descriptionValue,
    price: +priceValue,
    category,
  });

  const onClickAddProduct = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    createProduct();
    props.close();
  };

  return (
    <Modal show={props.show} onHide={props.close}>
      <Form
        className="d-flex flex-column align-items-center p-5"
        onSubmit={(e) => onClickAddProduct(e)}>
        <h2 className="mb-5">Изменение продукта</h2>
        <Form.Control
          className="mb-3"
          type="text"
          placeholder="Название продукта"
          value={titleValue}
          onChange={onTitleChange}
          required
        />
        <Form.Control
          className="mb-3"
          type="text"
          placeholder="Описание продукта"
          value={descriptionValue}
          onChange={onDescriptionChange}
          required
        />
        <Form.Control
          className="mb-3"
          type="number"
          placeholder="Цена"
          value={priceValue}
          onChange={onPriceChange}
          required
        />
        <Form.Select className="mb-3" value={category} onChange={onChangeCategory}>
          <option value={Categories.wedo1}>{Categories.wedo1}</option>
          <option value={Categories.wedo2}>{Categories.wedo2}</option>
          <option value={Categories.mindstorm}>{Categories.mindstorm}</option>
          <option value={Categories.others}>{Categories.others}</option>
        </Form.Select>

        <ButtonGroup>
          <Button variant="outline-primary" onClick={props.close}>
            Отмена
          </Button>
          <Button variant="primary" type="submit">
            Добавить товар
          </Button>
        </ButtonGroup>
      </Form>
    </Modal>
  );
};
