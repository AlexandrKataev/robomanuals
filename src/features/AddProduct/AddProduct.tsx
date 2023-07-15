import { useState } from 'react';
import { Button, ButtonGroup, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import { Categories } from '@services';
import { useInput } from '@hooks';
import { useAddProduct } from '@hooks';

export const AddProduct = () => {
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

  return (
    <Form className="d-flex flex-column align-items-center">
      <h2 className="mb-3">Добавление продукта</h2>
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
        <option value={Categories.wedo1}>Lego WeDo</option>
        <option value={Categories.wedo2}>Lego WeDo 2</option>
        <option value={Categories.mindstorm}>Lego WeDo 3</option>
        <option value={Categories.others}>Lego WeDo 3</option>
      </Form.Select>

      <ButtonGroup>
        <Button variant="outline-primary" onClick={() => navigate('/admin')}>
          Отмена
        </Button>
        <Button variant="primary" onClick={createProduct}>
          Добавить товар
        </Button>
      </ButtonGroup>
    </Form>
  );
};
