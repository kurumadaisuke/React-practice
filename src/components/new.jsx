import { useContext } from "react";
import { LoginContext } from "../providers/LoginProvider";

export const NewMemoButton = (props) => {
  const { onClickNew } = props;
  const { login } = useContext(LoginContext);
  return (
    <>
      {login && (
        <span onClick={onClickNew} className="link-line">
          メモ追加
        </span>
      )}
    </>
  );
};
