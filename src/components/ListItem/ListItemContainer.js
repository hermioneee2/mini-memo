import ListItemPresenter from "./ListItemPresenter";
import {useState} from "react";

const ListItemContainer = ({title, content, uid, click_num, getData, delItems, setTrue, setId}) => {
  // const [checkedItems, setCheckedItems] = useState(new Set());
  const [bChecked, setChecked] = useState(false);

  const checkedItemHandler = (id, isChecked) => {
    if (isChecked) {
      // checkedItems.add(id);
      delItems.add(id);
      // setCheckedItems(checkedItems);
    } 
    else if (!isChecked) {
      // checkedItems.delete(id);
      delItems.delete(id);
      // setCheckedItems(checkedItems);
    }
    getData(delItems);
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
      <div onClick = {() => setId(uid)}>
        <ListItemPresenter title={title} content={content} setTrue={setTrue}/>
      </div>
    </div>
  );
};

export default ListItemContainer;
