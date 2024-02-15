import React from "react";
import "./problem.scss";
import problemData from "./problemData";

export default function Problem() {
  return (
    <div className="problemWrapper">
      <div className="problem">
        <h2>
          How Do I <span>Resolve Problem ?</span>
        </h2>
        <div className="problemImgBox">
          <img src="/problemImgs/DDModel-Paint.PNG" alt="DDModel" />
        </div>
        <div className="problemContent">
          {problemData.map((problemItem) => (
            <div className="problemItem" key={problemItem.id}>
              <h3>{problemItem.name}</h3>
              <ul>
                {problemItem.list.map((list, i) => (
                  <li key={i}>{list}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
