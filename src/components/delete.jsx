import { useContext } from "react";
import { LoginContext } from "../providers/LoginProvider";

export const MemoDelete = (props) => {
  const { onClickDelete, selectedMemoIndex } = props;
  const { login } = useContext(LoginContext);
  return (
    <>
      {login && (
        <button onClick={() => onClickDelete(selectedMemoIndex)}>削除</button>
      )}
    </>
  );
};
