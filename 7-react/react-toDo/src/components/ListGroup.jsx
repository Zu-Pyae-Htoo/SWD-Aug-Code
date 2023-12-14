import React from "react";
import List from "./List";
import EmptyStage from "./EmptyStage";

const ListGroup = () => {
  return (
    <div>
      <EmptyStage />
      <List />
    </div>
  );
};

export default ListGroup;
