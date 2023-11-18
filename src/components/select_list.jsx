export const MemoSelectList = (props) => {
  const { memoContexts, onClickTitle } = props;
  return (
    <>
      <p>編集</p>
      <ul>
        {memoContexts.map((title, index) => (
          <div key={index}>
            <span onClick={() => onClickTitle(index)} className="link-line">
              {title.includes("\n")
                ? title.substr(0, title.indexOf("\n"))
                : title}
            </span>
          </div>
        ))}
      </ul>
    </>
  );
};
