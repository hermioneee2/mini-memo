const getMemoUidCounter = () => {
  let counter = localStorage.getItem('memoUidCounter');
  if (counter === null) {
      localStorage.setItem('memoUidCounter', '0');
      counter = localStorage.getItem('memoUidCounter');
  }
  return counter;
};

const setMemoUidCounter = (n) => {
  localStorage.setItem("memoUidCounter", n);
};

export const getNextMemoUid = () => {
  const memoUidCount = getMemoUidCounter();
  localStorage.setItem("memoUidCounter", parseInt(memoUidCount) + 1);
  return memoUidCount;
};

export const resetMemoUid = () => {
    localStorage.setItem("memoUidCounter", '0');
}