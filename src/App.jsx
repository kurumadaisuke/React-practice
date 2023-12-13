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
  const MEMO_STORAGE = "memoStorage";

  const saveMemos = (newMemos) => {
    setMemos(newMemos);
    localStorage.setItem(MEMO_STORAGE, JSON.stringify(newMemos));
  };

  const onClickNew = () => {
    const newMemos = [...memos, "新規メモ"];
    setSelectedMemoIndex(newMemos.length - 1);
    saveMemos(newMemos);
  };

  const onClickTitle = (index) => {
    setSelectedMemoIndex(index);
  };

  const onClickEdit = (selectedMemoIndex, editingValue) => {
    const newMemos = [...memos];
    newMemos[selectedMemoIndex] = editingValue;
    setSelectedMemoIndex(null);
    saveMemos(newMemos);
  };

  const onClickDelete = (selectedMemoIndex) => {
    const newMemos = [...memos];
    newMemos.splice(selectedMemoIndex, 1);
    setSelectedMemoIndex(null);
    saveMemos(newMemos);
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
              memoText={memos[selectedMemoIndex]}
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
