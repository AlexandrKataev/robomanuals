import { useState } from 'react';
import { Button, ButtonGroup, Form, Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { productApi } from 'src/shared/api';
import { useInput } from 'src/shared/hooks';

type category = 'wedo1' | 'wedo2' | 'wedo3';

export const AddProduct = () => {
  const { value: titleValue, onChange: onTitleChange } = useInput();
  const { value: descriptionValue, onChange: onDescriptionChange } = useInput();
  const { value: priceValue, onChange: onPriceChange } = useInput();
  const [category, setCategory] = useState('wedo1' as category);

  const navigate = useNavigate();

  const onChangeCategory = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(event.target.value as category);
  };

  const onClickAddProduct = (e: React.FormEvent<HTMLButtonElement>) => {
    productApi.addProduct({
      title: titleValue,
      description: descriptionValue,
      price: +priceValue,
      category,
    });
  };

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
        <option value="wedo1">Lego WeDo</option>
        <option value="wedo2">Lego WeDo 2</option>
        <option value="wedo3">Lego WeDo 3</option>
      </Form.Select>

      <ButtonGroup>
        <Button variant="outline-primary" onClick={() => navigate('/admin')}>
          Отмена
        </Button>
        <Button variant="primary" onClick={onClickAddProduct}>
          Добавить товар
        </Button>
      </ButtonGroup>
    </Form>
  );
};
