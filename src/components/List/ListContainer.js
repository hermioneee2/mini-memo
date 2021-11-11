import ListPresenter from "./ListPresenter";

const ListContainer = ({ showCheckbox, checkedItemHandler }) => {
  return (
    <ListPresenter
      showCheckbox={showCheckbox}
      checkedItemHandler={checkedItemHandler}
    />
  );
};

export default ListContainer;
