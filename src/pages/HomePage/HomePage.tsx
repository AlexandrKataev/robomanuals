import { ProductCatalog } from '@entities';
import { Container, Row } from 'react-bootstrap';

export const HomePage = () => {
  return (
    <Container className="d-flex flex-column">
      <h1>HomePage</h1>
      <Row>
        <ProductCatalog />
      </Row>
    </Container>
  );
};
