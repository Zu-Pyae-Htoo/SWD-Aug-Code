import React, { useContext } from "react";
import EmptyStage from "./EmptyStage";
import Record from "./Record";
import { GeneralContext } from "../contexts/GeneralContextProvider";

const RecordGroup = () => {
  const { records, removeRecord } = useContext(GeneralContext)
  return (
    <>
      {records.length == 0 && <EmptyStage />}
      {records.map((record, index) => (
        <Record key={record.id} removeRecord={removeRecord} index={index} record={record} />
      ))}
    </>
  );
};

export default RecordGroup;
