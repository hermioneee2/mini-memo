import ListPresenter from "./ListPresenter";

const ListContainer = ({ showCheckbox, delItems, setDelItems }) => {
  return (
    <ListPresenter
      showCheckbox={showCheckbox}
      delItems={delItems}
      setDelItems={setDelItems}
    />
  );
};

export default ListContainer;
