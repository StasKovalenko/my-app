import React from "react";

const CreateElement = () => {
  const title = React.createElement(
    'h1',
    { className: "title" },
    'Hello React!'
  )
  return title;
};

export default CreateElement;