import React from "react";
import {  Layout } from "antd";
import Hamburger from "@/components/Hamburger";
import BreadCrumb from "@/components/BreadCrumb";
import { Input } from 'antd';
import "./index.less";

const { Header } = Layout;

const LayoutHeader = (props) => {
  const { Search } = Input;
  const {
    sidebarCollapsed,
    fixedHeader,
  } = props;
  // token && getUserInfo(token);
  // const handleLogout = (token) => {
  //   Modal.confirm({
  //     title: "注销",
  //     content: "确定要退出系统吗?",
  //     okText: "确定",
  //     cancelText: "取消",
  //     onOk: () => {
  //       logout(token);
  //     },
  //   });
  // };
  // const onClick = ({ key }) => {
  //   switch (key) {
  //     case "logout":
  //       handleLogout(token);
  //       break;
  //     default:
  //       break;
  //   }
  // };
  // const menu = (
  //   <Menu onClick={onClick}>
  //     <Menu.Divider />
  //     <Menu.Item key="logout">注销</Menu.Item>
  //   </Menu>
  // );
  const computedStyle = () => {
    let styles;
    if (fixedHeader) {
      if (sidebarCollapsed) {
        styles = {
          width: "calc(100% - 80px)",
        };
      } else {
        styles = {
          width: "calc(100% - 200px)",
        };
      }
    } else {
      styles = {
        width: "100%",
      };
    }
    return styles;
  };

  const onSearch = (value, _e, info) => console.log(info?.source, value);



  return (
    <>
      {/* 这里是仿照antd pro的做法,如果固定header，
      则header的定位变为fixed，此时需要一个定位为relative的header把原来的header位置撑起来 */}
      {fixedHeader ? <Header /> : null}
      <Header
        style={computedStyle()}
        className={fixedHeader ? "fix-header" : ""}
      >
        <Hamburger />
        <BreadCrumb />
        <div className="right-menu">
        <Search placeholder="请输入关键字" onSearch={onSearch} />
        </div>
      </Header>
    </>
  );
};


export default LayoutHeader
