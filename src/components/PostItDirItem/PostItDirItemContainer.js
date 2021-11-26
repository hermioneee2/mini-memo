import PostItDirItemPresenter from "./PostItDirItemPresenter";


const PostItDirItemContainer = ({
  name,
  onChangeDir,
}) => {
  return (
    <div onClick={() => onChangeDir(name)}>
      <PostItDirItemPresenter
        name={name}
      />
    </div>
  );
};

export default PostItDirItemContainer;
