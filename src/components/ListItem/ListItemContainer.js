import ListItemPresenter from "./ListItemPresenter";
import { useState } from "react";

const ListItemContainer = ({
  title,
  content,
  uid,
  showCheckbox,
  checkedItemHandler,
  setTrue, 
  setId
}) => {
  const [bChecked, setChecked] = useState(false);

  const checkHandler = ({ target }) => {
    setChecked(!bChecked);
    checkedItemHandler(uid, target.checked); //reflect change on del item list
  };

  return (
    <div onClick = {() => setId(uid)}>
      <ListItemPresenter
        title={title}
        content={content}
        showCheckbox={showCheckbox}
        bChecked={bChecked}
        checkHandler={checkHandler}
        setTrue={setTrue}
      />
    </div>
  );
};

export default ListItemContainer;
