import PostItDirItemPresenter from "./PostItDirItemPresenter";
import { observer, inject } from "mobx-react"

const PostItDirItem = ({
  storeData,
  name,
  set
}) => {
  const dataManage = storeData;
  const onChange = (name) => {
    if(set === "parent"){
      dataManage.setParentDir(name);
    } else{
      dataManage.setChangeDir(name);
    }
    dataManage.setDirList();
    dataManage.setDataList();
  }
  return (
    <div onClick={() => onChange(name)}>
      <PostItDirItemPresenter
        name={name}
      />
    </div>
  );
};

export default inject("storeData")(observer(PostItDirItem));
