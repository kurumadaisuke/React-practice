export const MemoEdit = (props) => {
  const {
    memoTitles,
    onClickTitle,
    editValue,
    editTitle,
    onClickEdit,
    onClickDelete,
    selectedMemoIndex,
  } = props;
  return (
    <div className="memo-list">
      <p>編集</p>
      <ul>
        {memoTitles.map((title, index) => (
          <div key={index}>
            <span onClick={() => onClickTitle(index)} className="link-line">
              {title.includes("\n")
                ? title.substr(0, title.indexOf("\n"))
                : title}
            </span>
          </div>
        ))}
      </ul>
      <textarea
        value={editValue}
        className="memo-textarea"
        placeholder="メモの内容を編集"
        onChange={editTitle}
      />
      <button onClick={() => onClickEdit(selectedMemoIndex)}>編集</button>
      <button onClick={() => onClickDelete(selectedMemoIndex)}>削除</button>
    </div>
  );
};
