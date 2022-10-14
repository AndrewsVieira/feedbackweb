import React, { useState } from 'react';
import {
  Form,
  Input,
  Button,
  Select,
} from 'antd';
const { TextArea } = Input;

const FeedBackForm = () => {

  const [id, setId] = useState(null);
  const [description, setDescription] = useState(null);
  const [type, setType] = useState(null);
  const [user_name, setUserName] = useState(null);

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
        <Form.Item label="Id">
          <Input onChange={e => setId(e.target.value)} />
        </Form.Item>
        <Form.Item label="Feedback">
          <TextArea rows={4} onChange={e => setDescription(e.target.value)}/>
        </Form.Item>
        <Form.Item label="Tipo de feedback">
          <Select onChange={e => setType(e)}>
            <Select.Option value="1">Normal</Select.Option>
            <Select.Option value="2">Contexto - Situação - Melhoria</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="Quem receberá o feedback">
          <Input onChange={e => setUserName(e.target.value)} />
        </Form.Item>
        <Form.Item>
          <Button onSubmit = {console.log(id, description, type, user_name)}>Enviar</Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default () => <FeedBackForm />;