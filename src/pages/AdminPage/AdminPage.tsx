import { ProductList } from '@entities';
import { AddProduct, AdminPanel } from '@features';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';

export const AdminPage = () => {
  return (
    <Container className="">
      <Row>
        <AdminPanel />
      </Row>
      <Row className="justify-content-md-center">
        <Col md={4}>
          <Outlet />
        </Col>
      </Row>
      <Row>
        <ProductList />
      </Row>
    </Container>
  );
};
