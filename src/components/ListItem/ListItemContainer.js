import ListItemPresenter from "./ListItemPresenter";
import {useState} from "react";

const ListItemContainer = ({title, content, uid, click_num, delItems, getData}) => {
  const [checkedItems, setCheckedItems] = useState(new Set());
  const [bChecked, setChecked] = useState(false);

  const checkedItemHandler = (id, isChecked) => {
    if (isChecked) {
      checkedItems.add(id);
      delItems.add(id);
      setCheckedItems(checkedItems);
    } 
    else if (!isChecked && checkedItems.has(id)) {
      checkedItems.delete(id);
      delItems.delete(id);
      setCheckedItems(checkedItems);
    }
    getData(delItems);
    // console.log(checkedItems);
    // console.log(delItems);
  };

  const checkHandler = ({ target }) => {
    setChecked(!bChecked);
    checkedItemHandler(uid, target.checked);
  };

  const showCheckbox = () =>{
    if(click_num === 1)
      return <input type="checkbox" id = {uid} checked={bChecked} onChange={(e) => checkHandler(e)}/>
  };
  return (
    <div>
      {showCheckbox()}
      <ListItemPresenter title={title} content={content} uid = {uid} />
    </div>
  );
};

export default ListItemContainer;
