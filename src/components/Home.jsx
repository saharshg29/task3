import React from "react";
import Create from "./Create";
import Read from "./View/Read";
import Update from "./Update";
import "./Style/index.css";


export default function Home() {
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
