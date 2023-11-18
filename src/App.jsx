import { useState, useEffect } from "react";
import "./App.css";
import { MemoList } from "./components/list.jsx";
import { MemoEdit } from "./components/edit.jsx";
import { MemoAdd } from "./components/add.jsx";

function App() {
  const memoStorage = localStorage.getItem("memoStorage");
  const [memoContexts, setMemoContexts] = useState(
    memoStorage ? JSON.parse(memoStorage) : []
  );
  const [editValue, setEditValue] = useState("");
  const [selectedMemoIndex, setSelectedMemoIndex] = useState(null);

  const onClickAdd = () => {
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
        <MemoList memoTitles={memoContexts} />
        <MemoAdd onClickAdd={onClickAdd} />
      </div>
      <MemoEdit
        memoTitles={memoContexts}
        onClickTitle={onClickTitle}
        editValue={editValue}
        editTitle={editTitle}
        onClickEdit={onClickEdit}
        onClickDelete={onClickDelete}
        selectedMemoIndex={selectedMemoIndex}
      />
    </div>
  );
}

export default App;
