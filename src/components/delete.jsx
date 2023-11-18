export const MemoDelete = (props) => {
  const { onClickDelete, selectedMemoIndex } = props;
  return (
    <>
      <button onClick={() => onClickDelete(selectedMemoIndex)}>削除</button>
    </>
  );
};
