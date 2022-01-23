import React from "react";
import Create from "./Create";
import Read from "./Read";
import Update from "./Update";
import "./Style/index.css";
import { useSelector } from "react-redux";


export default function Home() {
  const Store = useSelector(store => store.todo.todo)
  return (
    <div className="main">
      <div className="upper">
        <Read className="read" />
      </div>
      <div className="lower">
        <Create className="create" />
        <Update className="update" />
      </div>
    </div>
  );
}
