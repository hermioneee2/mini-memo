import ListItemPresenter from "./ListItemPresenter";
import { React, useState } from "react";
import dateFormat, { masks } from "dateformat";
import Clock from 'react-clock';


const ListItemContainer = ({
  title,
  content,
  uid,
  time,
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
  
  const setTime = () => {
    let t = time;
    let a = dateFormat(t, "yyyy. m. d  HH:MM");
    return a;
  }
  return (
    <div onClick = {() => setId(uid)}>
      <ListItemPresenter
        title={title}
        content={content}
        time = {setTime}
        showCheckbox={showCheckbox}
        bChecked={bChecked}
        checkHandler={checkHandler}
        setTrue={setTrue}
      />
    </div>
  );
};

export default ListItemContainer;
