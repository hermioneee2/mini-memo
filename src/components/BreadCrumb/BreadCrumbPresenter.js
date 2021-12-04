import React from "react";
import { Breadcrumb } from "antd";
import styled from "styled-components";
const BreadCrumbPresenter = (cwd) => {
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
    <WrapperBreadcrumbItem>{pt}</WrapperBreadcrumbItem>
  ));
  return (
    <BreadcrumbBox>
      <WrapperBreadcrumb>{hierarchy_render}</WrapperBreadcrumb>
      <WrapperFolderTitle>{folder_title}</WrapperFolderTitle>
    </BreadcrumbBox>
  );
};

const BreadcrumbBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 16px 24px;
  margin: auto;
  position: relative;
  width: 80vw;
  height: 90px;
  top: 30px;
  bottom: 30px;
  background-color: ${({ theme }) => theme.colors.items};
  border-radius: 10px;
`;
const WrapperBreadcrumb = styled(Breadcrumb)`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  font-family: Open Sans;
  font-size: 13px;
`;

const WrapperBreadcrumbItem = styled(Breadcrumb.Item)`
  color: ${({ theme }) => theme.colors.text};
`;

const WrapperFolderTitle = styled.div`
  color: ${({ theme }) => theme.colors.text};
  padding: 6px 0px 6px;
  font-size: 18;
  font-family: Open Sans;
  font-weight: 700;
`;

export default BreadCrumbPresenter;
