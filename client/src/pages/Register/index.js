import React from "react";
import { Form, Input, Button, Radio } from "antd";
import { Link } from "react-router-dom";
import HospitalForm from "./hospitalform";

function Register() {
  const [type, setType] = React.useState("donor");
  const onFinish = (values) => {
    console.log(values);
  };

  return (
    <div className="flex h-screen items-center justify-center bg-primary">
      <Form
        layout="vertical"
        className="bg-white rounded shadow grid grid-cols-2 p-5 gap-5 w-1/2"
        onFinish={onFinish}
      >
        <h1 className="col-span-2">
          <span className="text-primary">Create Account</span>
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

        {type === "donor" && (
          <>
            {" "}
            <Form.Item label="Name" name="name">
              <Input />
            </Form.Item>
            <Form.Item label="Email" name="email">
              <Input />
            </Form.Item>
            <Form.Item label="Mobile Number" name="mobile number">
              <Input />
            </Form.Item>
            <Form.Item label="Password" name="password">
              <Input type="password" />
            </Form.Item>
          </>
        )}

        {type !== "donor" && <HospitalForm type={type} />}

        <Button
          type="primary"
          className="text-xl col-span-2"
          block
          htmlType="submit"
        >
          Register
        </Button>
        <Link
          to="/login"
          className="col-span-2 text-center text-gray-700 underline"
        >
          Already have an account? Login
        </Link>
      </Form>
    </div>
  );
}

export default Register;
