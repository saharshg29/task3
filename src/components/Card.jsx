import { useSelector } from "react-redux";

import React from "react";

export default function Card() {
  const Store = useSelector((store) => store.todo.todo);
  return (
    <>
      {console.log(Store)}
      {Store.map((item) => {
        return (
          <tr className="card">
            <td>{item.id}</td>
            <td>{item.title}</td>
            <td id="status">
              <input type="checkbox" onClick={(e) => console.log(e)} />
            </td>
          </tr>
        );
      })}
    </>
  );
}
