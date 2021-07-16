import React from "react";
import "./styles.css";

export default function ListData(props) {
  var arr = [];
  var values = props.output;
  // initialized new array: arr []
  // got output from app.js and assigned to values

  for (var i = 0; i < values.length; i++) {
    let object = values[i];
    for (var key in object) {
      // object[key] returns the value of that key:value pair
      arr.push(object[key].toString());
    }
  }
  //iterates over initial array, grabs key value pairs and converts to string
  //push back into arr

  return (
    <div className="ListData">
      <select>
        {arr.map((value, index) => {
          const component = <option key={index}>{value}</option>;
          return component;
        })}
      </select>
    </div>
  );
}
