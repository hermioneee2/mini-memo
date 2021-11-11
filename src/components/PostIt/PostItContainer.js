import PostItPresenter from "./PostItPresenter";

const PostItContainer = ({ showCheckbox, checkedItemHandler }) => {
  return (
    <PostItPresenter
      showCheckbox={showCheckbox}
      checkedItemHandler={checkedItemHandler}
    />
  );
};

export default PostItContainer;
