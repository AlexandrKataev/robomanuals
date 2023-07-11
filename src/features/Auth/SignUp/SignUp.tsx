import { Button, Form, Modal } from 'react-bootstrap';

import { userApi } from 'src/shared/api';
import { FC } from 'react';
import { useInput } from 'src/shared/hooks';

interface IModal {
  onClickSignUp: () => void;
  userName: string;
  email: string;
  password: string;
  onChangeUserName: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeEmail: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const SignUp: FC<IModal> = ({
  onClickSignUp,
  userName,
  onChangeUserName,
  email,
  onChangeEmail,
  password,
  onChangePassword,
}) => {
  return (
    <>
      <Modal.Body>
        <Form>
          <Form.Control
            className="mb-3"
            type="name"
            placeholder="Имя"
            autoFocus
            value={userName}
            onChange={onChangeUserName}
          />
          <Form.Control
            className="mb-3"
            type="email"
            placeholder="Почта"
            autoFocus
            value={email}
            onChange={onChangeEmail}
          />

          <Form.Control
            type="password"
            placeholder="Пароль"
            autoFocus
            value={password}
            onChange={onChangePassword}
          />
        </Form>
      </Modal.Body>
      <Modal.Footer className="d-flex justify-content-center">
        <Button variant="primary" onClick={onClickSignUp}>
          Готово
        </Button>
      </Modal.Footer>
    </>
  );
};
