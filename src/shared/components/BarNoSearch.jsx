import Search from "antd/es/transfer/search";
import React, { useState } from "react";
import { UserOutlined, InboxOutlined } from "@ant-design/icons";
import { Menu } from "antd";

// import LOGO from "./BulkBuyz/src/images/LOGO.PNG";
const BarNoSearch = () => {
 //const onSearch = (value = "") => console.log(value);

  //cambiar las keys

  const items = [
    {
      key: "SubAccount",
      icon: <UserOutlined />,
      children: [
        {
          type: "group",
          label: "Item 1",
          children: [
            {
              label: "Option 1",
              key: "setting:1",
            },
            {
              label: "Option 2",
              key: "setting:2",
            },
          ],
        },
        {
          type: "group",
          label: "Item 2",
          children: [
            {
              label: "Option 3",
              key: "setting:3",
            },
            {
              label: "Option 4",
              key: "setting:4",
            },
          ],
        },
      ],
    },
    {
      key: "SubMenu",
      icon: <InboxOutlined />,
      children: [
        {
          type: "group",
          label: "Item 1",
          children: [
            {
              label: "Option 1",
              key: "setting:1",
            },
            {
              label: "Option 2",
              key: "setting:2",
            },
          ],
        },
        {
          type: "group",
          label: "Item 2",
          children: [
            {
              label: "Option 3",
              key: "setting:3",
            },
            {
              label: "Option 4",
              key: "setting:4",
            },
          ],
        },
      ],
    },
  ];

  const [current, setCurrent] = useState("mail");
  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  return (
    <>
      <div className="toro">
        {/* mira si puedes hacer los div aca o en el principal */}
        <img className="logo" alt="logo" src={"#"}></img>
        
          
          
        
        <Menu
          onClick={onClick}
          selectedKeys={[current]}
          mode="horizontal"
          items={items}
        />
      </div>
    </>
  );
};

export default BarNoSearch;
