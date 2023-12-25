import { useLoggedIn } from "../providers/loggedInProvider";

export const NewMemoButton = (props) => {
  const { onClickNew } = props;
  const { loggedIn } = useLoggedIn();
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
