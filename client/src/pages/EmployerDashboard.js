import { Layout, Menu, Avatar } from "antd";
import React from "react";
import img from "../assets/abs.png";

import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PlusSquareOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  DashboardOutlined,
  QuestionOutlined,
  HomeOutlined,
  UserOutlined,
  PlusOutlined,
  CheckOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import Filter from "../components/Filter";

const { Header, Sider, Content } = Layout;

class DefaultLayout extends React.Component {
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
    localStorage.removeItem("user");
    window.location.reload();
    // window.location.href = "/login";
  };

  render() {
    const user = JSON.parse(localStorage.getItem("user"));
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
            <Menu.Item key="/employer" icon={<DashboardOutlined />}>
              <Link to="/employer">Dashboard</Link>
            </Menu.Item>

            <Menu.Item key="/postjob" icon={<PlusOutlined />}>
              <Link to="/postjob">Post Job</Link>
            </Menu.Item>

            <Menu.Item key="/posted" icon={<CheckOutlined />}>
              <Link to="/posted">Posted</Link>
            </Menu.Item>
            <Menu.Item key="/query" icon={<QuestionOutlined />}>
              <Link to="/query">Query</Link>
            </Menu.Item>
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
                  {user.username}
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
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default DefaultLayout;
