const make_newfile = (filename, content) => {
  return {
    type: "file",
    name: filename,
    content: content,
  };
};
