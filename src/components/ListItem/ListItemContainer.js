import ListItemPresenter from "./ListItemPresenter";
import {useState} from "react";

const ListItemContainer = ({title, content, uid, click_num, getData, delItems, setTrue, setId}) => {
  const [bChecked, setChecked] = useState(false);

  const checkedItemHandler = (id, isChecked) => {
    if (isChecked) {
      delItems.add(id);
    } 
    else if (!isChecked) {
      delItems.delete(id);
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
