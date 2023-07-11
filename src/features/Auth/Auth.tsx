import { FC, useState } from 'react';

import { SignUp } from './SignUp';
import { SignIn } from './SignIn';
import { ButtonGroup, Form, Modal, ToggleButton } from 'react-bootstrap';
import { userApi } from 'src/shared/api';
import { useInput } from 'src/shared/hooks';

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
      <ButtonGroup className="m-3">
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
    </Modal>
  );
};
