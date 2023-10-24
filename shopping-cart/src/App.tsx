import React, { useState } from "react";
import { Breadcrumb, Button, Flex, Layout, Menu, theme } from "antd";
import DisplayProducts from "./components/DisplayProducts";
import AddNewProduct from "./components/AddNewProduct";

const { Header, Content, Sider } = Layout;

const App: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return (
    <Layout>
      <Header
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: 1,
              label: "Home",
            },
            {
              key: 2,
              label: "Watches",
            },
            {
              key: 3,
              label: "Mobile Phones",
            },
          ]}
        />
        <Button
          style={{ marginTop: "12px", marginBottom: "12px" }}
          onClick={() => setIsModalOpen(true)}
        >
          ADD NEW PRODUCT
        </Button>
      </Header>
      <Layout>
        <Sider width={200} style={{ background: colorBgContainer }}></Sider>
        <Layout style={{ padding: "0 24px 24px" }}>
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              background: colorBgContainer,
            }}
          >
            <div
              className="site-layout-content"
              style={{ background: colorBgContainer }}
            >
              <DisplayProducts />
            </div>
            <AddNewProduct
              isModalOpen={isModalOpen}
              setIsModalOpen={setIsModalOpen}
            />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default App;
