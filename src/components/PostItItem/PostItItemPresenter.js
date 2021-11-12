import React from "react";
// import { FileOutlined } from "@ant-design/icons";
import { Card } from "antd";

const PostItItemPresenter = ({
  title,
  content,
  showCheckbox,
  bchecked,
  checkHandler,
}) => {
  return (
    <div>
      <Card title={title} style={cardStyle}>
        {content}
        {showCheckbox && (
          <input type="checkbox" checked={bchecked} onChange={checkHandler} />
        )}
      </Card>
    </div>
  );
};

const cardStyle = {
  width: "310px",
  margin: "10px",
};

export default PostItItemPresenter;
