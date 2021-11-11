import ListItemPresenter from "./ListItemPresenter";
import { useState } from "react";

const ListItemContainer = ({
  title,
  content,
  uid,
  showCheckbox,
  delItems,
  setDelItems,
}) => {
  const [bChecked, setChecked] = useState(false);

  const checkedItemHandler = (id, isChecked) => {
    if (isChecked) {
      delItems.add(id);
    } else if (!isChecked) {
      delItems.delete(id);
    }
    setDelItems(delItems);
    // console.log(delItems);
  };

  const checkHandler = ({ target }) => {
    setChecked(!bChecked);
    checkedItemHandler(uid, target.checked);
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
