import React from "react";
import { Form, Input, Button, Radio } from "antd";
import { Link } from "react-router-dom";
import TextArea from "antd/es/input/TextArea";

function HospitalForm({ type }) {
  return (
    <>
      <Form.Item
        label={type === "hospital" ? "Hospital Name" : "Organization Name"}
        name={type === "hospital" ? "Hospital Name" : "Organization Name"}
      >
        <Input />
      </Form.Item>
      <Form.Item label="Primary Contact" name="prim_contact">
        <Input />
      </Form.Item>
      <Form.Item label="Contact Number" name="phone">
        <Input />
      </Form.Item>
      <Form.Item label="Website" name="website">
        <Input />
      </Form.Item>
      <Form.Item label="Email" name="email">
        <Input />
      </Form.Item>
      <Form.Item label="Password" name="password">
        <Input type="password" />
      </Form.Item>
      <Form.Item label="Address" name="address" className="col-span-2">
        <TextArea />
      </Form.Item>
    </>
  );
}

export default HospitalForm;
