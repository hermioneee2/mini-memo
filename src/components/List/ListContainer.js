import ListPresenter from "./ListPresenter";

const ListContainer = ({ checkbox, delItems, setDelItems }) => {
  return (
    <ListPresenter
      checkbox={checkbox}
      delItems={delItems}
      setDelItems={setDelItems}
    />
  );
};

export default ListContainer;
