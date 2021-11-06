// fsarray: array of file objects

// initial fsarray with a root directory
export const make_new_fsarray = () => {
  let root = {
    type: "dir",
    name: ".",
    children: [],
    files: [],
  };

  return [root];
};

const get_length = (fsarray) => fsarray.length;

const get_item = (fsarray) => (index) => fsarray[index];

const set_item = (fsarray) => (index, value) => {
  fsarray[index] = value;
  return fsarray;
};

const new_item = (fsarray) => (value) => {
  fsarray.push(value);
  return fsarray;
};
