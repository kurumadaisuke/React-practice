export const MemoList = (props) => {
  const { memoContexts } = props;
  return (
    <>
      <p>一覧</p>
      <ul>
        {memoContexts.map((title, index) => (
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
