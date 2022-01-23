import React from "react";
import Card from "./Card";
import './Style/read.css'

export default function Read() {
  return (
    <div className="read">
      <h2>Read</h2>
      <table>
        <tr className="header">
          <th id="sno">S.No</th>
          <th>Title</th>
          <th>Description</th>
          <th>Status</th>
        </tr>
        <Card />
      </table>
    </div>
  );
}
