import "./App.css";
import { useState } from "react";
import { MemoSelectList } from "./components/list.jsx";
import { NewMemoButton } from "./components/new.jsx";
import { MemoDelete } from "./components/delete.jsx";
import { MemoEdit } from "./components/edit.jsx";

function App() {
  const memoStorage = localStorage.getItem("memoStorage");
  const [memos, setMemos] = useState(
    memoStorage ? JSON.parse(memoStorage) : [],
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

  const onClickEdit = (selectedMemoIndex, editingValue) => {
    const newMemos = [...memos];
    newMemos[selectedMemoIndex] = editingValue;
    setMemos(newMemos);
    setSelectedMemoIndex(null);
    localStorage.setItem("memoStorage", JSON.stringify(newMemos));
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
        <MemoSelectList
          memos={memos}
          onClickTitle={onClickTitle}
          selectedMemoIndex={selectedMemoIndex}
        />
        <NewMemoButton onClickNew={onClickNew} />
        {selectedMemoIndex !== null && (
          <>
            <MemoEdit
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
