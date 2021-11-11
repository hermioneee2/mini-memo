import ListItemPresenter from "./ListItemPresenter";
import { useState } from "react";

const ListItemContainer = ({
  title,
  content,
  uid,
  showCheckbox,
  checkedItemHandler,
}) => {
  const [bChecked, setChecked] = useState(false);

  const checkHandler = ({ target }) => {
    setChecked(!bChecked);
    checkedItemHandler(uid, target.checked); //reflect change on del item list
  };

  return (
    <div>
      <ListItemPresenter
        title={title}
        content={content}
        uid={uid}
        showCheckbox={showCheckbox}
        bChecked={bChecked}
        checkHandler={checkHandler}
      />
    </div>
  );
};

export default ListItemContainer;
