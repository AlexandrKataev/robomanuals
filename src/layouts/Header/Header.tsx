import { Container, Dropdown, Nav, Navbar } from 'react-bootstrap';

import { CartIcon, UserIcon, LogoIcon } from '@icons';
import { Link, useNavigate } from 'react-router-dom';
import { FC, useState } from 'react';
import { Auth } from '@features';
import { userService } from '@services';
import { useAppSelector } from 'src/app/store/hooks';
import { selectCartProductsCount } from 'src/app/store/cartSlice';

interface IHeader {
  isAuth: boolean;
  isAdmin: boolean;
  userName: string;
}

export const Header: FC<IHeader> = ({ isAuth, isAdmin, userName }) => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const count = useAppSelector(selectCartProductsCount);

  const handleShow = () => setShow(true);

  const onClickLogOut = () => {
    userService.signOut();
    navigate('/');
  };

  return (
    <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand>
          <Link to="/" className="d-flex align-items-center">
            <LogoIcon />
            <span className="ms-2 d-none d-sm-block">Robomanuals</span>
          </Link>
        </Navbar.Brand>

        <Nav className="d-flex align-items-center">
          {isAuth ? (
            <Dropdown>
              <Dropdown.Toggle
                variant="white"
                className="d-flex flex-column align-items-center me-3 icon-stroke">
                <UserIcon />
                <span>{userName}</span>
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item>
                  <Link to="/user">Профиль</Link>
                </Dropdown.Item>
                {isAdmin && (
                  <Dropdown.Item>
                    <Link to="/admin">Админ-панель</Link>
                  </Dropdown.Item>
                )}
                <Dropdown.Item onClick={onClickLogOut}>Выйти</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          ) : (
            <Nav.Link
              className="d-flex flex-column align-items-center me-3 icon-stroke"
              onClick={handleShow}>
              <UserIcon />
              <span>Войти</span>
            </Nav.Link>
          )}
          <Auth show={show} setShow={setShow} />
          <Nav.Link>
            <Link
              to="/cart"
              className="d-flex flex-column align-items-center cart-icon position-relative">
              <CartIcon count={count} />
              <span>Корзина</span>
            </Link>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};
