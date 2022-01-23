import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Edit, Get } from "../action/Actions";
import uniqid from "uniqid";
import "./Style/index.css";

export default function Update(task) {
  let { id } = useParams();
  const [Title, setTitle] = useState("");
  const [Desc, setDesc] = useState("");
  const dispatch = useDispatch();
  const Store = useSelector((store) => store.todo.task);

  useEffect(() => {
    if (Store != null) {
      setTitle(Store.title);
      setDesc(Store.description);
    }
    dispatch(Get(id));
  }, [Store]);

  const onUpdateTask = (e) => {
    e.prevent.default();

    const updatedTask = Object.assign(task, {
      id: uniqid(),
      title: Title,
      description: Desc,
    });

    dispatch(Edit(updatedTask));
  };

  return (
    <>
      {task ? (
        <>
          <div className="update">
            <form onSubmit={(e) => onUpdateTask(e)}>
              <h4>TITLE</h4>
              <input
                type="text"
                value={Title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <h4>Description</h4>
              <input
                type="text"
                value={Desc}
                onChange={(e) => setDesc(e.target.value)}
              />
              <br />
              <button onClick={() => {}}>Submit</button>
            </form>
          </div>
        </>
      ) : (
        <>
          <div className="update">
            <h2>This is Update view</h2>
            <p>
              Click the edit icon for the task which you you want to{" "}
              <b>update</b> or <b>delete</b>
            </p>
            {console.log(task)}
            {task}
          </div>
        </>
      )}
    </>
  );
}
