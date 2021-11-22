import React from "react";
import { FolderOutlined } from "@ant-design/icons";
import { Card } from "antd";

const PostItDirItemPresenter = ({
  name,
}) => {
  return (
    <div>
      <Card style={cardStyle}>
        <FolderOutlined /> {name}
      </Card>
    </div>
  );
};

const cardStyle = {
  width: "310px",
  margin: "10px",
  cursor: "pointer",
};

export default PostItDirItemPresenter;
