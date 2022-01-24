import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { EditTask, Get } from "../action/Actions";
import Delete from "@material-ui/icons/Delete";
import { DeleteTask } from "../action/Actions";
import "./Style/update.css";

export default function Update() {
  let { id } = useParams();
  const [Title, setTitle] = useState("");
  const [Desc, setDesc] = useState("");
  const dispatch = useDispatch();
  const Store = useSelector((store) => store.todo.task);
  const navigate = useNavigate();

  useEffect(() => {
    if (Store != null) {
      setTitle(Store.title);
      setDesc(Store.description);
    }
    dispatch(Get(id));
  }, [Store, id]);


  const onUpdateTask = (e) => {
    e.preventDefault();

    // const updatedTask = Object.assign(task, {
    //   // id: id,
    //   title: Title,
    //   description: Desc,
    // });

    
  };

  return (
    <>
      <span
        onClick={() => {
          dispatch(DeleteTask(id));
          navigate("/");
        }}
      >
        <Delete />
      </span>
      <h2>Edit Task</h2>
      <div className="update">
        <form
          onSubmit={(e) => {
            onUpdateTask(e);
            console.log(e);
          }}
        >
          <h2>{`ID : ${id}`}</h2>
          <br />
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
          <span
            itemType="button"
            onClick={(e) => {
              let updatedTask = {
                id: id,
                title: Title,
                description: Desc
              }
          
              dispatch(EditTask(updatedTask));
            }}
          >
            {" "}
            Submit
          </span>
        </form>
      </div>
    </>
  );
}
