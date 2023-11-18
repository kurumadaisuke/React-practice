export const MemoAdd = (props) => {
  const { onClickAdd } = props;
  return (
    <>
      <span onClick={onClickAdd} className="link-line">
        メモ追加
      </span>
    </>
  );
};
