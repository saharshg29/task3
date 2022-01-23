import React, { useState } from "react";
import "./Style/index.css";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Add } from "../action/Actions";
import uniqid from "uniqid";

export default function Create() {
  const [Title, setTitle] = useState("");
  const [Desc, setDesc] = useState("");
  const dispatch = useDispatch();
  const Store = useSelector((store) => store.todo);
  const createTask = (e) => {
    e.preventDefault();
    const newTask = {
      id: uniqid(),
      title: Title,
      description: Desc,
    };
    dispatch(Add(newTask));
  };

  return (
    <div className="create">
      <h2>Create View</h2>
      <form onSubmit={(e) => createTask(e)}>
        <h4>TITLE</h4>
        <input type="text" onChange={(e) => setTitle(e.target.value)} />
        <h4>Description</h4>
        <input type="text" onChange={(e) => setDesc(e.target.value)} />
        <br />
        <button onClick={() => {}}>Submit</button>
      </form>
    </div>
  );
}
