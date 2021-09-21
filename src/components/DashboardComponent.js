import React from "react";

function DashboardComponent(props) {
  console.log("value", props.list);
  return (
    props.list ||
    (props.list !== [] &&
      props.list.map((item) => {
        return (
          <div>
            email = {item.email}
            <br />
            password = {item.password}
            <br />
          </div>
        );
      }))
  );
}

export default DashboardComponent;
