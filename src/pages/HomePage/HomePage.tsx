import { ProductCatalog } from '@entities';
import { Categories } from '@services';

import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import {
  selectCategory,
  selectSearchValue,
  setCategory,
  setSearchValue,
} from 'src/app/store/filterSlice';
import { useAppSelector } from 'src/app/store/hooks';
import { useAppDispatch } from 'src/app/store/store';

export const HomePage = () => {
  const dispatch = useAppDispatch();
  const category = useAppSelector(selectCategory);
  const searchValue = useAppSelector(selectSearchValue);

  const onClickCategory = (category: Categories | 'all') => {
    dispatch(setCategory(category));
  };

  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchValue(e.target.value));
  };

  return (
    <Container className="">
      <Row className="my-3">
        <Form className="d-flex ">
          <Col xs={7} sm={6} md={4} lg={3}>
            <Form.Control
              type="search"
              placeholder="Поиск"
              value={searchValue}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChangeSearch(e)}
            />
          </Col>
        </Form>
      </Row>
      <Row>
        <Col className="d-flex gap-2" style={{ opacity: '50%' }}>
          <Button
            variant={category === 'all' ? 'primary' : 'outline-primary'}
            onClick={() => onClickCategory('all')}>
            Все
          </Button>
          <Button
            variant={category === Categories.wedo1 ? 'primary' : 'outline-primary'}
            onClick={() => onClickCategory(Categories.wedo1)}>
            {Categories.wedo1}
          </Button>
          <Button
            variant={category === Categories.wedo2 ? 'primary' : 'outline-primary'}
            onClick={() => onClickCategory(Categories.wedo2)}>
            {Categories.wedo2}
          </Button>
          <Button
            variant={category === Categories.mindstorm ? 'primary' : 'outline-primary'}
            onClick={() => onClickCategory(Categories.mindstorm)}>
            {Categories.mindstorm}
          </Button>
          <Button
            variant={category === Categories.others ? 'primary' : 'outline-primary'}
            onClick={() => onClickCategory(Categories.others)}>
            {Categories.others}
          </Button>
        </Col>
      </Row>
      <Row>
        <ProductCatalog />
      </Row>
    </Container>
  );
};
