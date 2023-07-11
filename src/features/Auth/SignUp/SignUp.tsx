import { Button, Form, Modal } from 'react-bootstrap';

import { FC } from 'react';

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
          <Button variant="primary" onClick={onClickSignUp}>
            Готово
          </Button>
        </Modal.Footer>
      </Modal.Body>
    </>
  );
};
