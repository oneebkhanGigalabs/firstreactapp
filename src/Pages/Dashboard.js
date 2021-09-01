import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function Dashboard() {
  const [list, setList] = useState([]);

  useEffect(() => {
    console.log("on dahasboard running set effect");

    var values = [],
      keys = Object.keys(localStorage),
      i = keys.length;

    while (i--) {
      values.push(JSON.parse(localStorage.getItem(keys[i])));
      console.log(localStorage.getItem(keys[i]));
    }

    setList(values);
    console.log(values);
  }, []);

  console.log("value", list);
  return list.map((item) => {
    return (
      <div>
        email = {item.email}
        <br />
        password = {item.password}
        <br />
      </div>
    );
  });
}

export default Dashboard;
