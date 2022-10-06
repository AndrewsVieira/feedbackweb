import React, { useState } from 'react';
import {
  Form,
  Input,
  Button,
  Select,
} from 'antd';
const { TextArea } = Input;

const onSave = (value) => console.log(value);

const FeedBackForm = () => {
  return (
    <>
      <Form
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="vertical"
      >
        <Form.Item label="Tipo de feedback">
          <Select>
            <Select.Option value="1">Normal</Select.Option>
            <Select.Option value="2">Contexto - Situação - Melhoria</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="Feedback">
          <TextArea rows={4} />
        </Form.Item>
        <Form.Item>
          <Button onSave = {onSave(this)}>Enviar</Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default () => <FeedBackForm />;