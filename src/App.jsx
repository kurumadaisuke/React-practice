import "./App.css";
import { useState, useEffect } from "react";
import { MemoList } from "./components/list.jsx";
import { MemoSelectList } from "./components/select_list.jsx";
import { NewMemoButton } from "./components/new.jsx";
import { MemoDelete } from "./components/delete.jsx";
import { MemoEdit } from "./components/edit.jsx";

function App() {
  const memoStorage = localStorage.getItem("memoStorage");
  const [memoContexts, setMemoContexts] = useState(
    memoStorage ? JSON.parse(memoStorage) : [],
  );
  const [editValue, setEditValue] = useState("");
  const [selectedMemoIndex, setSelectedMemoIndex] = useState(null);

  const onClickNew = () => {
    const newMemo = [...memoContexts, "新規メモ"];
    setMemoContexts(newMemo);
    setSelectedMemoIndex(newMemo.length);
  };

  const onClickTitle = (index) => {
    setSelectedMemoIndex(index);
    setEditValue(memoContexts[index]);
  };

  const editTitle = (event) => setEditValue(event.target.value);

  const onClickEdit = () => {
    const newMemos = [...memoContexts];
    newMemos[selectedMemoIndex] = editValue;
    setMemoContexts(newMemos);
    setSelectedMemoIndex(null);
    setEditValue("");
  };

  const onClickDelete = (MemoIndex) => {
    const newMemo = [...memoContexts];
    newMemo.splice(MemoIndex, 1);
    setMemoContexts(newMemo);
    setSelectedMemoIndex(null);
    setEditValue("");
  };

  useEffect(() => {
    const memos = JSON.stringify(memoContexts);
    localStorage.setItem("memoStorage", memos);
  }, [memoContexts]);

  return (
    <div className="container">
      <div className="memo-list">
        <MemoList memoContexts={memoContexts} />
        <NewMemoButton onClickNew={onClickNew} />
      </div>
      <div className="memo-list">
        <MemoSelectList
          memoContexts={memoContexts}
          onClickTitle={onClickTitle}
        />
        <MemoEdit
          editValue={editValue}
          editTitle={editTitle}
          onClickEdit={onClickEdit}
          selectedMemoIndex={selectedMemoIndex}
        />
        <MemoDelete
          onClickDelete={onClickDelete}
          selectedMemoIndex={selectedMemoIndex}
        />
      </div>
    </div>
  );
}

export default App;
