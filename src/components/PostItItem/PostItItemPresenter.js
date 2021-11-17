import React from "react";
// import { FileOutlined } from "@ant-design/icons";
import { Card } from "antd";

const PostItItemPresenter = ({
  title,
  content,
  showCheckbox,
  bchecked,
  checkHandler,
  setTrue
}) => {
  return (
    <div>
      {showCheckbox && (
          <input type="checkbox" checked={bchecked} onChange={checkHandler} />
        )}
      <Card title={title} style={cardStyle} onClick = {setTrue}>
        {content}
      </Card>
    </div>
  );
};

const cardStyle = {
  width: "310px",
  margin: "10px",
  cursor: "pointer",
};

export default PostItItemPresenter;
