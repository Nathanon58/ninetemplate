import {
  AppstoreAddOutlined,
  HomeOutlined,
  UserOutlined,
  DownOutlined,
} from "@ant-design/icons";

import {
  Avatar,
  Layout,
  Menu,
  message,
  ConfigProvider,
  Dropdown,
  Space,
} from "antd";
import { authUser } from "../constants";
import { useNavigate, useLocation } from "react-router-dom";
import { LoginPage } from "../pages/Login";

const { Content, Footer, Sider } = Layout;

export const AppLayout = (props) => {
  const location = useLocation();
  const navigate = useNavigate();

  if (!authUser) {
    message.destroy();
    message.warning("กรุณาเข้าสู่ระบบ");
    return <LoginPage />;
  }
  const onClick = ({ key }) => {
    message.info(`Click on item ${key}`);
    window.location.assign("/logout");
  };
  const items = [
    {
      label: "ออกจากระบบ",
      key: "/logout",
    },
  ];
  return (
    // <ConfigProvider
    //   theme={{
    //     token: {
    //       // fontFamily: "CPAC_MODERN_MEDIUM",
    //       lightSiderBg: "#013366",
    //     },
    //   }}
    // >
    <Layout style={{ height: "100%", width: "100%" }}>
      <Sider
        theme="dark"
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
        style={{ maxHeight: "100%" }}
      >
        <div style={{ padding: "20px" }}>
          <Avatar style={{ alignItems: "center" }} icon={<UserOutlined />} />
          <span style={{ fontSize: "16px", color: "white" }}>สวัสดี</span>
          <Dropdown
            menu={{
              items,
              onClick,
            }}
          >
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                <span style={{ fontSize: "16px", color: "white" }}>
                  {/* {authUser.user.fname} {authUser.user.lname} */}
                  name
                </span>
                <DownOutlined />
              </Space>
            </a>
          </Dropdown>
        </div>

        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={location.pathname}
          onClick={({ key }) => {
            navigate(key);
          }}
        >
          <Menu.Divider />
          <Menu.Item key="/" icon={<HomeOutlined />}>
            <span style={{ fontWeight: "bold" }}>ภาพรวม</span>
          </Menu.Item>
          {/* <Menu.Item key="/rock" icon={<AppstoreAddOutlined />}>
            <span style={{ fontWeight: "bold" }}>เพิ่มข้อมูลหิน</span>
          </Menu.Item>
          <Menu.Item key="/sand" icon={<AppstoreAddOutlined />}>
            <span style={{ fontWeight: "bold" }}>เพิ่มข้อมูลทราย</span>
          </Menu.Item> */}
        </Menu>
      </Sider>
      <Layout>
        <Content
          style={{
            margin: "24px 16px 0",
          }}
        >
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: "white",
              fontFamily: "CPAC_MODERN_MEDIUM",
            }}
          >
            {props.children}
          </div>
        </Content>
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          Template ©2023 Nathanon
        </Footer>
      </Layout>
    </Layout>
    // </ConfigProvider>
  );
};
