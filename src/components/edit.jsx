export const MemoEdit = (props) => {
  const { editValue, editTitle, onClickEdit, selectedMemoIndex } = props;
  return (
    <>
      <textarea
        value={editValue}
        className="memo-textarea"
        placeholder="メモの内容を編集"
        onChange={editTitle}
      />
      <button onClick={() => onClickEdit(selectedMemoIndex)}>編集</button>
    </>
  );
};
