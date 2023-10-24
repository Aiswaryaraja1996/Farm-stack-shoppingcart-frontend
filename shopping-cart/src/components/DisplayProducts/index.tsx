import React, { useEffect, useState } from "react";
import { Button, Card, Flex, Rate } from "antd";
import axios from "axios";

import { Typography } from "antd";

const { Title } = Typography;

const { Meta } = Card;

const DisplayProducts: React.FC = () => {
  const [products, setProducts] = useState<any>([]);

  useEffect(() => {
    axios.get("http://localhost:8000/products/").then((response) => {
      setProducts(response.data);
    });
  }, []);

  return (
    <Flex
      gap="large"
      style={{
        padding: "16px",
        justifyContent: "center",
        alignItems: "center",
      }}
      wrap="wrap"
    >
      {products.map((item: any) => (
        <Card
          style={{ width: 300 }}
          hoverable
          cover={
            <img src={item?.img} style={{ width: "300px", height: "300px" }} />
          }
        >
          <Meta title={item?.name} description={item?.description} />
          <Title level={3}>Rs. {item?.price}</Title>
          <Rate value={item?.rating} />
          <Flex gap="small">
            <Button style={{ marginTop: "24px" }}>ADD TO CART</Button>
            <Button style={{ marginTop: "24px" }}>ADD TO WISHLIST</Button>
          </Flex>
        </Card>
      ))}
    </Flex>
  );
};

export default DisplayProducts;
