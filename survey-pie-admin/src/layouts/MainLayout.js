import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";

// import {
//   DesktopOutlined,
//   FileOutlined,
//   PieChartOutlined,
//   TeamOutlined,
//   UserOutlined,
// } from "@ant-design/icons";
//import { Breadcrumb, Layout, Menu, theme } from "antd";
//import SubMenu from "antd/es/menu/SubMenu";

//const { Header, Content, Footer, Sider } = Layout;
const { Header, Content, Sider } = Layout;

function MainLayout({ selectedKeys, children }) {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider>
        <div
          className="logo"
          style={{
            height: 32,
            margin: 16,
            background: "rgba(255, 255,255, 0.3)",
          }}
        />
        <Menu theme="dark" selectedKeys={selectedKeys} mode="inline" items="">
          <Menu.Item key="list">
            <Link to="/list">Survey Management</Link>
          </Menu.Item>
          <Menu.Item key="builder">
            <Link to="/builder">Builder</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header />
        <Content>{children}</Content>
      </Layout>
    </Layout>
    // <Layout style={{ minHeight: "100vh" }}>
    //   <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
    //     <div className="logo" />
    //     <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
    //       <Menu.Item key="1" icon={<PieChartOutlined />}>
    //         Option 1
    //       </Menu.Item>
    //       <Menu.Item key="2" icon={<PieChartOutlined />}>
    //         Option 1
    //       </Menu.Item>
    //       <SubMenu key="sub1" icon={<UserOutlined />} title="User">
    //         <Menu.Item key="3">Tom</Menu.Item>
    //         <Menu.Item key="4">Bill</Menu.Item>
    //         <Menu.Item key="5">Alex</Menu.Item>
    //       </SubMenu>
    //       <SubMenu key="sub2" icon={<UserOutlined />} title="User">
    //         <Menu.Item key="6">Team1</Menu.Item>
    //         <Menu.Item key="7">Team2</Menu.Item>
    //         <Menu.Item key="8">Team3</Menu.Item>
    //       </SubMenu>
    //       <Menu.Item key="9" icon={<FileOutlined />}>
    //         Option 1
    //       </Menu.Item>
    //     </Menu>
    //   </Sider>
    //   <Layout className="site-layout">
    //     <Header className="site-layout-backgorund" style={{ padding: 0 }} />
    //     <Content style={{ margin: "0 16px" }}>
    //       <Breadcrumb style={{ margin: "0 16px" }}>
    //         <Breadcrumb.Item>User</Breadcrumb.Item>
    //         <Breadcrumb.Item>Bill</Breadcrumb.Item>
    //       </Breadcrumb>
    //       <div
    //         className="site-layout-background"
    //         style={{ padding: 24, minHeight: 360 }}
    //       >
    //         Bill is a cat.
    //       </div>
    //     </Content>
    //     <Footer style={{ textAlign: "center" }}>
    //       Ant Design ©{new Date().getFullYear()} Created by Ant UED
    //     </Footer>
    //   </Layout>
    // </Layout>
  );
}

export default MainLayout;
