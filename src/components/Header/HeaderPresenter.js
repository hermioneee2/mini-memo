import { Affix } from "antd";
import React from "react";
import styled from "styled-components";

const HeaderPresenter = () => {
    return (
    <Affix offsetTop={0}>
        <Header>
            <span
                style={{
                color: "#F0BF39",
                fontFamily: "Open Sans",
                fontSize: 30,
                fontWeight: 800,
                marginLeft: 20,
                }}
            >
                Mini Memo
            </span>
        </Header>
    </Affix>
    );
};

const Header = styled.div`
  background-color: #f0f0f0;
  width: 100%;
  height: 80px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export default HeaderPresenter;