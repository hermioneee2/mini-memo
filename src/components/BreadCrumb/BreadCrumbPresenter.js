import React from "react";
import { Breadcrumb } from "antd";
import BreadcrumbItem from "antd/lib/breadcrumb/BreadcrumbItem";
import {get_root_pointer} from "@systemop/localstorage-fs"

const BreadCrumbPresenter = (cwd) => {
  const root_pointer = get_root_pointer() ;
  let hierarchy = [];
  let folder_title = "";
  const real_cwd = cwd.cwd.cwd;

  const setHierarchy = (real_cwd) => {
    if (real_cwd.name != "/") {
      hierarchy.unshift(real_cwd.name);
      return setHierarchy(real_cwd.parent());
    } else {
      hierarchy.unshift("Home");
      return;
    }
  };

  setHierarchy(real_cwd);

  if (real_cwd.name === "/") {
    folder_title = "Home";
  } else {
    folder_title = real_cwd.name;
  }

  const hierarchy_render = hierarchy.map((pt) => (
    <Breadcrumb.Item>{pt}</Breadcrumb.Item>
  ));
  return (
    <div style={BreadcrumbBox_style}>
      <Breadcrumb style={Breadcrumb_style}>{hierarchy_render}</Breadcrumb>
      <div
        style={{
          padding: "6px 0px 6px",
          fontSize: 18,
          fontFamily: "Open Sans",
          fontWeight: "700",
        }}
      >
        {folder_title}
      </div>
    </div>
  );
};

const BreadcrumbBox_style = {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  padding: "16px 24px",
  margin: "auto",
  position: "relative",
  width: "80vw",
  height: "90px",
  top: "30px",
  bottom: "30px",
  backgroundColor: "#FAFAFA",
  borderRadius: "10px",
};
const Breadcrumb_style = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  padding: "0px",
  fontFamily: "Open Sans",
  fontSize: "13px",
};

export default BreadCrumbPresenter;
