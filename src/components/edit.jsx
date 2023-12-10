export const MemoEdit = (props) => {
  const { MemoText, onClickEdit, selectedMemoIndex } = props;
  let editingTxet = MemoText;

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
      <button onClick={() => onClickEdit(selectedMemoIndex, editingTxet)}>
        編集
      </button>
    </>
  );
};
