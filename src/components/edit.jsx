import { useContext } from "react";
import { LoginContext } from "../providers/LoginProvider";

export const MemoEdit = (props) => {
  const { memoText, onClickEdit, selectedMemoIndex } = props;
  const { login } = useContext(LoginContext);
  let editingTxet = memoText;

  return (
    <>
      <textarea
        key={editingTxet}
        defaultValue={editingTxet}
        readOnly={false}
        autoFocus={true}
        className="memo-textarea"
        placeholder="メモの内容を編集"
        onChange={(event) => {
          editingTxet = event.target.value;
        }}
      />
      {login && (
        <button onClick={() => onClickEdit(selectedMemoIndex, editingTxet)}>
          編集
        </button>
      )}
    </>
  );
};
