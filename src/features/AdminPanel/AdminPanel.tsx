import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const AdminPanel = () => {
  return (
    <Link to="/admin/addProduct">
      <Button>Добавить товар</Button>
    </Link>
  );
};
