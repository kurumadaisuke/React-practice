import { useLoggedIn } from "../providers/loggedInProvider";

export const Login = () => {
  const { loggedIn, setLoggedIn } = useLoggedIn();
  const loginClick = () => {
    setLoggedIn(!loggedIn);
  };

  return (
    <>
      <p className="login-info">{loggedIn ? "ログイン済み" : "未ログイン"}</p>
      <button className="login-button" onClick={loginClick}>
        {loggedIn ? "ログアウト" : "ログイン"}
      </button>
    </>
  );
};
