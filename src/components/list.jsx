export const MemoSelectList = (props) => {
  const { memos, onClickTitle } = props;
  return (
    <>
      <ul>
        {memos.map((title, index) => (
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
