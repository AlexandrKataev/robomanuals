import { useState } from 'react';
import { Button, ButtonGroup, Form, Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import { Categories } from '@services';
import { useInput } from '@hooks';
import { useAddProduct } from '@hooks';

export const AddProductModal = (props: any) => {
  const { value: titleValue, onChange: onTitleChange } = useInput();
  const { value: descriptionValue, onChange: onDescriptionChange } = useInput();
  const { value: priceValue, onChange: onPriceChange } = useInput();
  const [category, setCategory] = useState(Categories.wedo1);

  const navigate = useNavigate();

  const onChangeCategory = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(event.target.value as Categories);
  };

  const createProduct = useAddProduct({
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
        <h2 className="mb-5">Добавление продукта</h2>
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
