import React from "react";
import "./Style/index.css";
import Card from "./Card";

export default function Read() {

  return (
    <div className="read">
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
