/**
 * icon:菜单项图标
 * roles:标明当前菜单项在何种角色下可以显示，如果不写此选项，表示该菜单项完全公开，在任何角色下都显示
 */
const menuList = [
  {
    title: "首页",
    path: "/dashboard",
    icon: "home",
    roles:["admin","editor","guest"]
  },
  {
    title: "表格",
    path: "/table",
    icon: "table",
    roles:["admin","editor"]
  },
  {
    title: "表格2",
    path: "/table2",
    icon: "table",
    roles:["admin","editor"]
  },
  {
    title: "表格3",
    path: "/table3",
    icon: "table",
    roles:["admin","editor"]
  },
];
export default menuList;
