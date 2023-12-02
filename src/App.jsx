import "./App.css";
import { useState } from "react";
import { MemoSelectList } from "./components/list.jsx";
import { NewMemoButton } from "./components/new.jsx";
import { MemoDelete } from "./components/delete.jsx";
import { MemoEdit } from "./components/edit.jsx";

function App() {
  const memoStorage = localStorage.getItem("memoStorage");
  const [memos, setMemos] = useState(
    memoStorage ? JSON.parse(memoStorage) : []
  );
  const [selectedMemoIndex, setSelectedMemoIndex] = useState(null);

  const onClickNew = () => {
    const newMemo = [...memos, "新規メモ"];
    setMemos(newMemo);
    setSelectedMemoIndex(newMemo.length - 1);
    localStorage.setItem("memoStorage", JSON.stringify(newMemo));
  };

  const onClickTitle = (index) => {
    setSelectedMemoIndex(index);
  };

  const editTxetEvent = (event) => {
    const newMemos = [...memos];
    newMemos[selectedMemoIndex] = event.target.value;
    setMemos(newMemos);
  };

  const onClickEdit = () => {
    localStorage.setItem("memoStorage", JSON.stringify(memos));
    setSelectedMemoIndex(null);
  };

  const onClickDelete = (MemoIndex) => {
    const newMemo = [...memos];
    newMemo.splice(MemoIndex, 1);
    setMemos(newMemo);
    setSelectedMemoIndex(null);
    localStorage.setItem("memoStorage", JSON.stringify(newMemo));
  };

  return (
    <div className="container">
      {selectedMemoIndex === null ? <p>一覧</p> : <p>編集</p>}
      <div className="memo-list">
        <MemoSelectList memos={memos} onClickTitle={onClickTitle} selectedMemoIndex={selectedMemoIndex}/>
        <NewMemoButton onClickNew={onClickNew} />
        {selectedMemoIndex !== null && (
          <>
            <MemoEdit
              editTxetEvent={editTxetEvent}
              onClickEdit={onClickEdit}
              MemoText={memos[selectedMemoIndex]}
              selectedMemoIndex={selectedMemoIndex}
            />
            <MemoDelete
              onClickDelete={onClickDelete}
              selectedMemoIndex={selectedMemoIndex}
            />
          </>
        )}
      </div>
    </div>
  );
}

export default App;
