import React from "react";
import "./Style/index.css";
import { useSelector } from "react-redux";
import Card from "./Card";

export default function Read() {
  const Store = useSelector((store) => store.todo.todo);

  return (
    <div className="read">
      {console.log(Store)}
      <h2>Read</h2>
      <table>
        <tr>
          <th id="sno">S.No</th>
          <th>Title</th>
          <th>Status</th>
        </tr>
        <Card />
      </table>
      
    </div>
  );
}
