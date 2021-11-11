import ListItemPresenter from "./ListItemPresenter";
import { useState } from "react";

const ListItemContainer = ({
  title,
  content,
  uid,
  checkbox,
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

  const showCheckbox = () => {
    if (checkbox)
      return (
        <input
          type="checkbox"
          id={uid}
          checked={bChecked}
          onChange={(e) => checkHandler(e)}
        />
      );
  };

  return (
    <div>
      {showCheckbox()}
      <ListItemPresenter title={title} content={content} uid={uid} />
    </div>
  );
};

export default ListItemContainer;
