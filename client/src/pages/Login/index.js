import React from "react";
import { Form, Input, Button, Radio } from "antd";
import { Link } from "react-router-dom";

function Login() {
  const [type, setType] = React.useState("donor");
  const onFinish = (values) => {
    console.log(values);
  };

  return (
    <div className="flex h-screen items-center justify-center bg-primary">
      <Form
        layout="vertical"
        className="bg-white rounded shadow grid grid-cols-2 p-5 gap-5 w-1/3"
        onFinish={onFinish}
      >
        <h1 className="col-span-2">
          <span className="text-primary">Login</span>
        </h1>

        <Radio.Group
          onChange={(e) => setType(e.target.value)}
          value={type}
          className="col-span-2"
        >
          <Radio value="donor">Donor</Radio>
          <Radio value="hospital">Hospital</Radio>
          <Radio value="organization">Organization</Radio>
        </Radio.Group>

        <Form.Item label="Email" name="email">
          <Input />
        </Form.Item>
        <Form.Item label="Password" name="password">
          <Input type="password" />
        </Form.Item>

        <Button
          type="primary"
          className="text-xl col-span-2"
          block
          htmlType="submit"
        >
          Sign In
        </Button>
        <Link
          to="/register"
          className="col-span-2 text-center text-gray-700 underline"
        >
          Don't have an account? Register
        </Link>
      </Form>
    </div>
  );
}

export default Login;
