import { useContext } from "react";
import { LoggedInContext } from "../providers/loggedInProvider";

export const MemoDelete = (props) => {
  const { onClickDelete, selectedMemoIndex } = props;
  const { loggedIn } = useContext(LoggedInContext);
  return (
    <>
      {loggedIn && (
        <button onClick={() => onClickDelete(selectedMemoIndex)}>削除</button>
      )}
    </>
  );
};
