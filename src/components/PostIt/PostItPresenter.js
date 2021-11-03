import React from "react";
import { Card } from "antd";

import styled from "styled-components";

const PostItPresenter = ({ title, content }) => {
  const style = {
    width: "400px",
    margin: "10px",
  };

  return (
    <div style={style}>
      <Card title={title} style={style}>
        {content}
      </Card>
    </div>
  );
};

export default PostItPresenter;
