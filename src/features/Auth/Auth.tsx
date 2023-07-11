import { FC, useState } from 'react';

import { SignUp } from './SignUp';
import { SignIn } from './SignIn';
import { ButtonGroup, Form, Modal, ToggleButton } from 'react-bootstrap';
import { userApi } from 'src/shared/api';
import { useInput } from 'src/shared/hooks';
import { LogoIcon } from '@icons';

interface IModal {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Auth: FC<IModal> = ({ show, setShow }) => {
  const [userHasAccount, setUserHasAccount] = useState(true);
  const { value: password, onChange: onChangePassword, clearValue: clearPassword } = useInput();
  const { value: email, onChange: onChangeEmail, clearValue: clearEmail } = useInput();
  const { value: userName, onChange: onChangeUserName, clearValue: clearUserName } = useInput();

  const handleClose = () => setShow(false);

  const onClickSignUp = () => {
    userApi.signUp(email, password, userName);
    setShow(false);
    clearPassword();
    clearEmail();
    clearUserName();
  };

  const onClickSignIn = () => {
    userApi.signIn(email, password);
    setShow(false);
    clearPassword();
    clearEmail();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header className="m-2" closeButton></Modal.Header>
      <div className="d-flex flex-column align-items-center">
        <LogoIcon width="150px" height="150px" />
        <h2 className="mb-5">Добро пожаловать!</h2>
        <ButtonGroup className="mt-1">
          <ToggleButton
            value={'true'}
            type="radio"
            variant="outline-primary"
            name="radio"
            checked={userHasAccount}
            onClick={(e) => setUserHasAccount(true)}>
            Войти в аккаунт
          </ToggleButton>
          <ToggleButton
            value={'true'}
            type="radio"
            variant="outline-primary"
            name="radio"
            checked={!userHasAccount}
            onClick={(e) => setUserHasAccount(false)}>
            Создать аккаунт
          </ToggleButton>
        </ButtonGroup>
        {userHasAccount ? (
          <SignIn
            onClickSignIn={onClickSignIn}
            password={password}
            email={email}
            onChangePassword={onChangePassword}
            onChangeEmail={onChangeEmail}
          />
        ) : (
          <SignUp
            onClickSignUp={onClickSignUp}
            password={password}
            email={email}
            userName={userName}
            onChangePassword={onChangePassword}
            onChangeEmail={onChangeEmail}
            onChangeUserName={onChangeUserName}
          />
        )}
      </div>
    </Modal>
  );
};
