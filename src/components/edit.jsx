export const MemoEdit = (props) => {
  const { MemoText, editTxetEvent, onClickEdit, selectedMemoIndex } = props;
  return (
    <>
      <textarea
        value={MemoText}
        autoFocus={true}
        className="memo-textarea"
        placeholder="メモの内容を編集"
        onChange={editTxetEvent}
      />
      <button onClick={() => onClickEdit(selectedMemoIndex)}>編集</button>
    </>
  );
};
