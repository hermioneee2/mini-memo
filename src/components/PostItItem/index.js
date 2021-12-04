import PostItItemPresenter from "./PostItItemPresenter";
import { useState } from "react";
import { observer, inject } from "mobx-react";

const PostItItem = ({
  storeEditor,
  storeData,
  title,
  content,
  uid,
  showCheckbox,
  checkedItemHandler,
}) => {
  const [bChecked, setChecked] = useState(false);
  const controlEditor = storeEditor;
  const dataManage = storeData;

  const checkHandler = ({ target }) => {
    setChecked(!bChecked);
    checkedItemHandler(uid, target.checked); //reflect change on del item list
  };

  return (
    <div
      onClick={() => {
        controlEditor.setId(uid);
        dataManage.setExistingMemoObj(dataManage.cwd, uid);
      }}
    >
      <PostItItemPresenter
        title={title}
        content={content}
        showCheckbox={showCheckbox}
        bChecked={bChecked}
        checkHandler={checkHandler}
      />
    </div>
  );
};

export default inject("storeEditor", "storeData")(observer(PostItItem));
