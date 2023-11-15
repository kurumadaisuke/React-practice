import { useState, useEffect } from "react";
import "./App.css";
import { MemoList } from "./components/list.jsx";
import { MemoEdit } from "./components/edit.jsx";

function App() {
  const value = localStorage.getItem("mymemo");
  const [memoTitles, setMemoTitles] = useState(value ? JSON.parse(value) : []);
  const [editValue, setEditValue] = useState("");
  const [selectedMemoIndex, setSelectedMemoIndex] = useState(null);

  const onClickAdd = () => {
    const newMemo = [...memoTitles, "新規メモ"];
    setMemoTitles(newMemo);
    setSelectedMemoIndex(newMemo.length);
  };

  const onClickTitle = (index) => {
    setSelectedMemoIndex(index);
    setEditValue(memoTitles[index]);
  };

  const editTitle = (event) => setEditValue(event.target.value);

  const onClickEdit = () => {
    const newMemos = [...memoTitles];
    newMemos[selectedMemoIndex] = editValue;
    setMemoTitles(newMemos);
    setSelectedMemoIndex(null);
    setEditValue("");
  };

  const onClickDelete = (MemoIndex) => {
    const newMemo = [...memoTitles];
    newMemo.splice(MemoIndex, 1);
    setMemoTitles(newMemo);
    setSelectedMemoIndex(null);
    setEditValue("");
  };

  useEffect(() => {
    const memos = JSON.stringify(memoTitles);
    localStorage.setItem("mymemo", memos);
  }, [memoTitles]);

  return (
    <div className="container">
      <>
        <MemoList memoTitles={memoTitles} onClickAdd={onClickAdd} />
        <MemoEdit
          memoTitles={memoTitles}
          onClickTitle={onClickTitle}
          editValue={editValue}
          editTitle={editTitle}
          onClickEdit={onClickEdit}
          onClickDelete={onClickDelete}
          selectedMemoIndex={selectedMemoIndex}
        />
      </>
    </div>
  );
}

export default App;
