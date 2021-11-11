import React from "react";
// import { FileOutlined } from "@ant-design/icons";
import { Card } from "antd";

const style = {
  width: "400px",
  margin: "10px",
};

const PostItItemPresenter = ({
  title,
  content,
  showCheckbox,
  bchecked,
  checkHandler,
}) => {
  return (
    <div>
      <Card title={title} style={style}>
        {content}
        {showCheckbox && (
          <input type="checkbox" checked={bchecked} onChange={checkHandler} />
        )}
      </Card>
    </div>
  );
};

export default PostItItemPresenter;
