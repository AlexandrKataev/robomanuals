import { Button, Col, Container, Row } from 'react-bootstrap';
import styles from './AdminPanel.module.scss';
import { Link } from 'react-router-dom';

export const AdminPanel = () => {
  return (
    <Link to="/admin/addProduct">
      <Button>Добавить товар</Button>
    </Link>
  );
};
