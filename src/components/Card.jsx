import { useSelector } from "react-redux";
import Delete from "@material-ui/icons/Delete";
import "./Style/card.css";

import React from "react";

export default function Card() {
  const Store = useSelector((store) => store.todo.todo);
  return (
    <>
      {Store.map((item) => {
        return (
          <tr className="card">
            <td id="sno">
              <span>{item.id}</span>
              <Delete />
            </td>
            <td id="title">{item.title}</td>
            <td id="desc">{item.description}</td>
            <td id="status">
              <input
                type="checkbox"
                checked={item.completed}
                onClick={(e) => console.log(e.checked)}
              />
            </td>
          </tr>
        );
      })}
    </>
  );
}
