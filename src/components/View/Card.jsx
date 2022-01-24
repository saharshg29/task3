import { useSelector } from "react-redux";
import Edit from "@material-ui/icons/Edit";
import { Link } from "react-router-dom";
import { Edit } from "../../action/Actions";

import "../Style/card.css";

import React from "react";
import { useDispatch } from "react-redux";

export default function Card() {
  const Store = useSelector((store) => store.todo.todo);
  const dispatch = useDispatch()

  return (
    <>
      {Store.map((item) => {
        return (
          <tr className="card">
            <td id="sno">
              <span>{item.id}</span>
              <Link to={`/${item.id}`}>
                <Edit />
              </Link>
            </td>
            <td id="title">{item.title}</td>
            <td id="desc">{item.description}</td>
            <td id="status">
              <input
                defaultValue={item.completed}
                type="checkbox"
                onClick={(e) => dispatch(Edit())}
              />
            </td>
          </tr>
        );
      })}
    </>
  );
}
