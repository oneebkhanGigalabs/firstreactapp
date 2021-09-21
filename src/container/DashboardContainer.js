import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import DashboardComponent from "../components/DashboardComponent";

function DashboardContainer() {
  const [list, setList] = useState([]);

  useEffect(() => {
    console.log("on dahasboard running set effect");
    var values = [],
      keys = Object.keys(localStorage),
      i = keys.length;
    while (i--) {
      values.push(JSON.parse(localStorage.getItem(keys[i])));
    }
    setList(values);
  }, []);

  return <DashboardComponent list={list}></DashboardComponent>;
}

export default DashboardContainer;
