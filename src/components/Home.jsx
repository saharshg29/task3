import React from "react";
import Create from "./Create";
import Read from "./View/Read";
import Update from "./Update";
import "./Style/index.css";
import { Route, Routes } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div className="main">
        <div className="upper">
          <Read className="read" />
        </div>
        <div className="lower">
          <Create className="create" />
          <span className="update">
            <Routes>
              <Route path="/:id" element={<Update />} />
            </Routes>
          </span>
        </div>
      </div>
    </>
  );
}
