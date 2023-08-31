import React from "react";
import { Button, Dropdown, Space } from "antd";
import { ShopOutlined } from "@ant-design/icons";
const items = [
  {
    key: "1",
    label: <span>Pintalabios</span>,
  },
  {
    key: "2",
    label: <span>Mascarillas</span>,
  },
  {
    key: "3",
    label: <span>Cremas</span>,
  },
];
const Drop = () => (
  <Space direction="vertical">
    <Space wrap>
      <Dropdown
        menu={{
          items,
        }}
        placement="bottomLeft"
      >
        <Button className="icon">
          <ShopOutlined></ShopOutlined>
        </Button>
      </Dropdown>
    </Space>
  </Space>
);
export default Drop;
