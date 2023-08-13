import { Layout, Menu, Avatar } from "antd";
import React from "react";
import AllUsers from "./AllUsers";
import img from "../assets/abs.png";

import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  TeamOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import Filter from "../components/Filter";
import AllEmployers from "./AllEmployers";

const { Header, Sider, Content } = Layout;

class Adminview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
    };
  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  logout = () => {
    localStorage.removeItem("admin");
    // window.location.reload();
    window.location.href = "/login";
  };

  render() {
    const admin = JSON.parse(localStorage.getItem("admin"));

    return (
      <Layout>
        <Sider
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
          style={{
            position: "sticky",
            overflow: "auto",
            height: "100%",
            top: 0,
          }}
        >
          <div className="logo">
            {this.state.collapsed ? (
              <img style={{ width: "60px" }} src={img}></img>
            ) : (
              <img style={{ width: "100px" }} src={img}></img>
            )}
          </div>
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={[window.location.pathname]}
          >
            <Menu.Item key="/adminview" icon={<TeamOutlined />}>
              <Link to="/adminview">Users</Link>
            </Menu.Item>
            {/* <Menu.Item key="/AllEmployers" icon={<TeamOutlined />}>
              <Link to="/AllEmployers">Employers</Link>
            </Menu.Item> */}
            {/* <Menu.Item key="/AllEmployers" icon={<UserOutlined />}>
              <Link to="/AllEmployers">employers</Link>
            </Menu.Item> */}

            <Menu.Item key="/logout" icon={<LogoutOutlined />}>
              <Link onClick={this.logout}>Logout</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header
            className="site-layout-background"
            style={{
              padding: 0,
              position: "sticky",
              overflow: "auto",
              top: 0,
              zIndex: 9999,
            }}
          >
            <div className="flex justify-content-between">
              <div>
                {React.createElement(
                  this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
                  {
                    className: "trigger",
                    onClick: this.toggle,
                  }
                )}
              </div>

              <div>
                <Filter />
              </div>

              <div
                style={{ display: this.state.collapsed ? "none" : "inline" }}
              >
                <Avatar
                  style={{ margin: "10px", backgroundColor: "black" }}
                  size={50}
                >
                  {admin.username}
                </Avatar>
              </div>
            </div>
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280,
            }}
          >
            {this.props.children}
            <AllUsers />
            {/* <AllEmployers /> */}
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default Adminview;
