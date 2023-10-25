import React, { useEffect, useState } from "react";
import { Button, Card, Flex, Rate } from "antd";
import { useSelector, useDispatch } from "react-redux";
import {
  products,
  isLoading,
  getAllProducts,
} from "../../store/reducers/productSlice";

import { Typography } from "antd";

const { Title } = Typography;

const { Meta } = Card;

const DisplayProducts: React.FC = () => {
  const dispatch = useDispatch<any>();
  const productsList: any = useSelector(products);

  useEffect(() => {
    dispatch(getAllProducts());
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
      {productsList.map((item: any) => (
        <Card
          style={{ width: 300 }}
          hoverable
          cover={
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src={item?.img}
                style={{ width: "200px", height: "200px" }}
              />
            </div>
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
