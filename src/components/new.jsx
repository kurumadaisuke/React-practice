import { useContext } from "react";
import { LoggedInContext } from "../providers/loggedInProvider";

export const NewMemoButton = (props) => {
  const { onClickNew } = props;
  const { loggedIn } = useContext(LoggedInContext);
  return (
    <>
      {loggedIn && (
        <span onClick={onClickNew} className="link-line">
          メモ追加
        </span>
      )}
    </>
  );
};
