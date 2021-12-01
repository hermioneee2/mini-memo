import PostItDirItemPresenter from "./PostItDirItemPresenter";
import { observer, inject } from "mobx-react";
import { useState } from "react";
const PostItDirItem = ({
  storeData,
  name,
  set,
  uid,
  showCheckbox,
  checkedItemHandler,
}) => {
  const dataManage = storeData;
  const [bChecked, setChecked] = useState(false);
  const checkHandler = ({ target }) => {
    setChecked(!bChecked);
    checkedItemHandler(uid, target.checked); //reflect change on del item list
  };

  const onChange = (name) => {
    if (set === "parent") {
      dataManage.setParentDir(name);
    } else {
      dataManage.setChangeDir(name);
    }
    dataManage.setDirList();
    dataManage.setDataList();
  };
  return (
    <div>
      <PostItDirItemPresenter
        name={name}
        showCheckbox={showCheckbox}
        bChecked={bChecked}
        checkHandler={checkHandler}
        changeHandler={onChange}
      />
    </div>
  );
};

export default inject("storeData")(observer(PostItDirItem));
