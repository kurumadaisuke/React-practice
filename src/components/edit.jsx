export const MemoEdit = (props) => {
  const { editingMemoText, editTitle, onClickEdit, selectedMemoIndex } = props;
  return (
    <>
      <textarea
        value={editingMemoText}
        autoFocus={true}
        className="memo-textarea"
        placeholder="メモの内容を編集"
        onChange={editTitle}
      />
      <button onClick={() => onClickEdit(selectedMemoIndex)}>編集</button>
    </>
  );
};
