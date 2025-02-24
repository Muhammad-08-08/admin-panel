import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { Link } from "react-router";

function Navbar({ collapsed, setCollapsed }) {
  return (
    <div className="w-full h-20 bg-slate-900 text-white flex justify-between items-center px-10">
      <div className="flex gap-2 items-center">
        <Button
          type="primary"
          onClick={() => {
            setCollapsed(!collapsed);
          }}
        >
          {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </Button>
        <Link to={"/"}>
          <h1 className="text-3xl font-mono select-none cursor-pointer">
            Logo
          </h1>
        </Link>
      </div>
      <h2 className="text-3xl font-mono">Avatar</h2>
    </div>
  );
}

export default Navbar;
