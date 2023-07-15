import { ProductCatalog } from '@entities';
import { Categories } from '@services';
import { useState } from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';

export const HomePage = () => {
  const [category, setCategory] = useState(Categories.wedo1);
  const onChangeCategory = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(event.target.value as Categories);
  };
  return (
    <Container className="d-flex flex-column">
      <Row>
        <Form className="d-flex">
          <Col xs={4} sm={4} md={3} lg={2} className="pe-3">
            <Form.Select className="mb-3" value={category} onChange={onChangeCategory}>
              <option value={Categories.wedo1}>Lego WeDo</option>
              <option value={Categories.wedo2}>Lego WeDo 2</option>
              <option value={Categories.mindstorm}>Lego WeDo 3</option>
              <option value={Categories.others}>Lego WeDo 3</option>
            </Form.Select>
          </Col>
          <Col xs={7} sm={6} md={4} lg={3}>
            <Form.Control type="search" placeholder="Поиск" />
          </Col>
        </Form>
      </Row>
      <Row>
        <ProductCatalog />
      </Row>
    </Container>
  );
};
