export const MemoList = (props) => {
  const { memoTitles, onClickAdd } = props;
  return (
    <div className="memo-list">
      <p>一覧</p>
      <ul>
        {memoTitles.map((title, index) => (
          <div key={index}>
            <li>
              {title.includes("\n")
                ? title.substr(0, title.indexOf("\n"))
                : title}
            </li>
          </div>
        ))}
      </ul>
      <span onClick={onClickAdd} className="link-line">
        メモ追加
      </span>
    </div>
  );
};
