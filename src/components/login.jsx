import { useContext } from "react";
import { LoginContext } from "../providers/LoginProvider";

export const Login = () => {
  const { login, setLogin } = useContext(LoginContext);
  const loginClick = () => {
    setLogin(!login);
  };

  return (
    <>
      <p className="login-info">{login ? "ログイン済み" : "未ログイン"}</p>
      <button className="login-button" onClick={loginClick}>
        {login ? "ログアウト" : "ログイン"}
      </button>
    </>
  );
};
