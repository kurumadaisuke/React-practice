export const MemoList = (props) => {
  const { memoTitles } = props;
  return (
    <>
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
    </>
  );
};
