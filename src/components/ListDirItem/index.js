import ListDirItemPresenter from "./ListDirItemPresenter";
import { React, useState } from "react";
import dateFormat from "dateformat";
import { observer, inject } from "mobx-react";

const ListDirItem = ({
  storeData,
  name,
  time,
  set,
  uid,
  showCheckbox,
  checkedItemHandler,
}) => {
  const dataManage = storeData;
  let timeString = time != null ? dateFormat(time, "yyyy. m. d  HH:MM") : null;
  const [bChecked, setChecked] = useState(false);

  const checkHandler = ({ target }) => {
    setChecked(!bChecked);
    checkedItemHandler(uid, target.checked); //reflect change on del item list
  };

  const onChange = (name) => {
    if (set === "parent") {
      dataManage.setParentDir(name);
      dataManage.setDirList();
      dataManage.setDataList();
    } else {
      dataManage.setChangeDir(name);
      dataManage.setDirList();
      dataManage.setDataList();
    }
  };
  return (
    <ListDirItemPresenter
      name={name}
      time={timeString}
      showCheckbox={showCheckbox}
      bChecked={bChecked}
      checkHandler={checkHandler}
      changeHandler={onChange}
    />
  );
};

export default inject("storeData")(observer(ListDirItem));
