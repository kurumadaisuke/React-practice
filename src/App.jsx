import "./App.css";
import { useState, useEffect } from "react";
import { MemoSelectList } from "./components/list.jsx";
import { NewMemoButton } from "./components/new.jsx";
import { MemoDelete } from "./components/delete.jsx";
import { MemoEdit } from "./components/edit.jsx";

function App() {
  const memoStorage = localStorage.getItem("memoStorage");
  const [memos, setMemos] = useState(
    memoStorage ? JSON.parse(memoStorage) : []
  );

  const [editingMemoText, setEditingMemoText] = useState("");
  const [selectedMemoIndex, setSelectedMemoIndex] = useState(null);

  const onClickNew = () => {
    const newMemo = [...memos, "新規メモ"];
    setMemos(newMemo);
    setSelectedMemoIndex(newMemo.length - 1);
  };

  const onClickTitle = (index) => {
    setSelectedMemoIndex(index);
    setEditingMemoText(memos[index]);
  };

  const editTitle = (event) => setEditingMemoText(event.target.value);

  const onClickEdit = () => {
    const newMemos = [...memos];
    newMemos[selectedMemoIndex] = editingMemoText;
    setMemos(newMemos);
    setSelectedMemoIndex(null);
    setEditingMemoText("");
  };

  const onClickDelete = (MemoIndex) => {
    const newMemo = [...memos];
    newMemo.splice(MemoIndex, 1);
    setMemos(newMemo);
    setSelectedMemoIndex(null);
    setEditingMemoText("");
  };

  useEffect(() => {
    localStorage.setItem("memoStorage", JSON.stringify(memos));
  }, [memos]);

  return (
    <div className="container">
      {selectedMemoIndex === null ? <p>一覧</p> : <p>編集</p>}
      <div className="memo-list">
        <MemoSelectList memos={memos} onClickTitle={onClickTitle} />
        <NewMemoButton onClickNew={onClickNew} />
        {selectedMemoIndex !== null && (
          <>
            <MemoEdit
              editingMemoText={editingMemoText}
              editTitle={editTitle}
              onClickEdit={onClickEdit}
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
