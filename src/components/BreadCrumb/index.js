import BreadCrumbPresenter from "./BreadCrumbPresenter";
import React from "react";
const BreadCrumb = (cwd) => {
  return <BreadCrumbPresenter cwd={cwd}></BreadCrumbPresenter>;
};

export default BreadCrumb;
