import React, { useState } from "react";
import {
  Button,
  Modal,
  Form,
  Input,
  InputNumber,
  message,
  Space,
  Flex,
} from "antd";
import axios from "axios";

interface Props {
  isModalOpen: boolean;
  setIsModalOpen: any;
}

const AddNewProduct: React.FC<Props> = ({ isModalOpen, setIsModalOpen }) => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    axios
      .post("http://localhost:8000/products/add_product", values)
      .then((response) => {
        message.success("Submit success!");
        setIsModalOpen(false);
      });
  };

  const onFinishFailed = () => {
    message.error("Submit failed!");
  };

  return (
    <>
      <Modal
        title="ADD NEW PRODUCT"
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        footer=""
      >
        <Form
          form={form}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          layout="vertical"
          style={{ marginTop: "24px" }}
        >
          <Form.Item
            label="Product Name"
            name="name"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Product Description"
            name="desc"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Product Image"
            name="img"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Product Category"
            name="category"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Product Rating"
            name="rating"
            rules={[{ required: true }]}
          >
            <InputNumber />
          </Form.Item>
          <Form.Item
            label="Product Price"
            name="price"
            rules={[{ required: true }]}
          >
            <InputNumber />
          </Form.Item>
          <Form.Item>
            <Flex justify="flex-end" gap="small">
              <Button htmlType="button" onClick={() => setIsModalOpen(false)}>
                Cancel
              </Button>
              <Button type="primary" htmlType="submit">
                Add Product
              </Button>
            </Flex>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default AddNewProduct;
