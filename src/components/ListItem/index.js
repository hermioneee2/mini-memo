import ListItemPresenter from "./ListItemPresenter";
import { React, useState } from "react";
import dateFormat, { masks } from "dateformat";
import { observer, inject } from "mobx-react";

const ListItem = ({
  storeEditor,
  title,
  content,
  uid,
  time,
  showCheckbox,
  checkedItemHandler,
}) => {
  const [bChecked, setChecked] = useState(false);
  const controlEditor = storeEditor;

  const checkHandler = ({ target }) => {
    setChecked(!bChecked);
    checkedItemHandler(uid, target.checked); //reflect change on del item list
  };

  const setTime = () => {
    let t = time;
    let a = dateFormat(t, "yyyy. m. d  HH:MM");
    return a;
  };
  return (
    <div onClick={() => controlEditor.setId(uid)}>
      <ListItemPresenter
        title={title}
        content={content}
        time={setTime}
        showCheckbox={showCheckbox}
        bChecked={bChecked}
        checkHandler={checkHandler}
      />
    </div>
  );
};

export default inject("storeEditor")(observer(ListItem));
