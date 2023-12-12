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
  const storage = "memoStorage";

  const saveMemos = ({ newMemo, selectedMemoIndex, editingValue }) => {
    const newMemos = [...memos];
    if (newMemo) {
      newMemos.push(newMemo);
      setSelectedMemoIndex(newMemos.length - 1);
    } else if (editingValue !== undefined) {
      newMemos[selectedMemoIndex] = editingValue;
      setSelectedMemoIndex(null);
    } else if (selectedMemoIndex !== undefined) {
      newMemos.splice(selectedMemoIndex, 1);
      setSelectedMemoIndex(null);
    }
    setMemos(newMemos);
    localStorage.setItem(storage, JSON.stringify(newMemos));
  };

  const onClickNew = () => {
    saveMemos({ newMemo: "新規メモ" });
  };

  const onClickTitle = (index) => {
    setSelectedMemoIndex(index);
  };

  const onClickEdit = (selectedMemoIndex, editingValue) => {
    saveMemos({
      selectedMemoIndex: selectedMemoIndex,
      editingValue: editingValue,
    });
  };

  const onClickDelete = (selectedMemoIndex) => {
    saveMemos({ selectedMemoIndex: selectedMemoIndex });
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
