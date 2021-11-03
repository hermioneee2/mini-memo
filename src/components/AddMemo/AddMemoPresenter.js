import { PlusCircleFilled } from "@ant-design/icons";
import React from "react";
import { Affix } from "antd";
import styled from "styled-components";

const AddMemoPresenter = () => {
  return (
    <Affix offsetBottom={30}>
      <PlusCircleFilled
        style={{ fontSize: 60, color: "#F0BF39", cursor: "pointer" }}
      />
    </Affix>
  );
};

export default AddMemoPresenter;