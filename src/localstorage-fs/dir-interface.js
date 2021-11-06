const make_newdir = (dirname, parent_dir) => {
  return {
    type: "dir",
    name: dirname,
    parent: parent_dir,
    children: [],
  };
};
