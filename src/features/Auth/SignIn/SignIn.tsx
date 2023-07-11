import { Button, Form, Modal } from 'react-bootstrap';

import { FC } from 'react';

interface IModal {
  onClickSignIn: () => void;

  email: string;
  password: string;

  onChangeEmail: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const SignIn: FC<IModal> = ({
  onClickSignIn,
  email,
  password,
  onChangeEmail,
  onChangePassword,
}) => {
  return (
    <>
      <Modal.Body>
        <Form>
          <Form.Control
            className="mb-3"
            type="email"
            placeholder="Почта"
            autoFocus
            value={email}
            onChange={onChangeEmail}
          />

          <Form.Control
            className="mb-3"
            type="password"
            placeholder="Пароль"
            value={password}
            onChange={onChangePassword}
          />
        </Form>
        <Modal.Footer className="d-flex justify-content-center">
          <Button variant="primary" onClick={onClickSignIn}>
            Войти
          </Button>
        </Modal.Footer>
      </Modal.Body>
    </>
  );
};
