import React, { useState } from "react";
import { Button, Layout, Menu, Radio, Space, theme, Typography } from "antd";
import DisplayProducts from "./components/DisplayProducts";
import AddNewProduct from "./components/AddNewProduct";

const { Header, Content, Sider } = Layout;
const { Title, Text } = Typography;

const App: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [value, setValue] = useState();

  const onChange = (e: any) => {
    setValue(e.target.value);
  };

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
        <Sider
          width={200}
          style={{ background: colorBgContainer, paddingLeft: "12px" }}
        >
          <Title level={5}>Sort By</Title>
          <Radio.Group onChange={onChange} value={value}>
            <Space direction="vertical">
              <Radio value={1}>Price Low to High</Radio>
              <Radio value={2}>Price High to Low</Radio>
            </Space>
          </Radio.Group>
        </Sider>
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
