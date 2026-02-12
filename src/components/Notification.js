import React from "react";

export default function Notification(props) {

  return (
    props.notification &&
    <div className="alert">
      {props.notification.text}
    </div>
  );
}
