import { PlusCircleFilled } from "@ant-design/icons";
import React from "react";
import { Affix } from "antd";

const AddMemoPresenter = () => {
  return (
    <Affix offsetBottom={30}>
      <PlusCircleFilled
        style={{
          fontSize: 60,
          color: "#F0BF39",
          cursor: "pointer",
          position: "absolute",
          bottom: "55px",
          right: "55px",
        }}
      />
    </Affix>
  );
};

export default AddMemoPresenter;
