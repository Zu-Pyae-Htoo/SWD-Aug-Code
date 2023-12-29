import React from "react";
import EmptyStage from "./EmptyStage";
import Record from "./Record";

const RecordGroup = ({ records }) => {
  return (
    <>
      {records.length == 0 && <EmptyStage />}
      {records.map((record,index) => (
        <Record key={record.id} index={index} record={record} />
      ))}
    </>
  );
};

export default RecordGroup;
