import { useLoggedIn } from "../providers/loggedInProvider";

export const MemoDelete = (props) => {
  const { onClickDelete, selectedMemoIndex } = props;
  const { loggedIn } = useLoggedIn();
  return (
    <>
      {loggedIn && (
        <button onClick={() => onClickDelete(selectedMemoIndex)}>削除</button>
      )}
    </>
  );
};
