import { useSelector } from "react-redux";
import Edit from "@material-ui/icons/Edit";
import { Link } from "react-router-dom";

import "../Style/card.css";

import React from "react";
import { EditTask } from "../../action/Actions";
import { useDispatch } from "react-redux";

export default function Card() {
  const Store = useSelector((store) => store.todo.todo);
  const dispatch = useDispatch();
  return (
    <>
      {Store.map((item) => {
        return (
          <>
            {item.completed ? (
              <tr style={{ backgroundColor: "green" }} className="card">
                <td key={item.id} id="sno">
                  <span>{item.id}</span>
                  <Link to={`/${item.id}`}>
                    <Edit />
                  </Link>
                </td>
                <td key={item.id} id="title">
                  {item.title}
                </td>
                <td key={item.id} id="desc">
                  {item.description}
                </td>
                <td key={item.id} id="status">
                  <input
                    defaultValue={item.completed}
                    type="checkbox"
                    onClick={() =>
                      dispatch(
                        EditTask({
                          title: item.title,
                          description: item.description,
                          id: item.id,
                          completed: !item.completed,
                        })
                      )
                    }
                  />
                </td>
              </tr>
            ) : (
              <tr style={{ backgroundColor: "red" }} className="card">
                <td key={item.id} id="sno">
                  <span>{item.id}</span>
                  <Link to={`/${item.id}`}>
                    <Edit />
                  </Link>
                </td>
                <td key={item.id} id="title">
                  {item.title}
                </td>
                <td key={item.id} id="desc">
                  {item.description}
                </td>
                <td key={item.id} id="status">
                  <input
                    defaultValue={item.completed}
                    type="checkbox"
                    onClick={() =>
                      dispatch(
                        EditTask({
                          title: item.title,
                          description: item.description,
                          id: item.id,
                          completed: !item.completed,
                        })
                      )
                    }
                  />
                </td>
              </tr>
            )}
          </>
        );
      })}
    </>
  );
}
