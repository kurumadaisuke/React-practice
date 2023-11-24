export const NewMemoButton = (props) => {
  const { onClickNew } = props;
  return (
    <>
      <span onClick={onClickNew} className="link-line">
        メモ追加
      </span>
    </>
  );
};
