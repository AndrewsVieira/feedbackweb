import React, { useState } from 'react';
import {
  Form,
  Input,
  Button,
  Select,
} from 'antd';
import api from '../services/api';
const { TextArea } = Input;

const FeedBackForm = () => {

  const saveFeedback = () => {
    if(id == null || description == null || type == null || user_name == null) {
      alert('Todos os campos são obrigatórios')
      return
    }
    
    let body = {
      'id': id,
      'description': description,
      'type': type,
      'user_name': user_name
    }

    console.log(JSON.stringify(body))
    
    api
      .post("/feedback", {
        id: id,
        description: description,
        type: type,
        user_name: user_name
      })
      .then((response) => {
        console.log(response)
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }

  const [id, setId] = useState('teste');
  const [description, setDescription] = useState('teste description');
  const [type, setType] = useState("1");
  const [user_name, setUserName] = useState('Chapolin Colorado');

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
          <Input onChange={e => setId(e.target.value)} value={id} />
        </Form.Item>
        <Form.Item label="Feedback">
          <TextArea rows={4} onChange={e => setDescription(e.target.value)} value={description}/>
        </Form.Item>
        <Form.Item label="Tipo de feedback">
          <Select onChange={e => setType(e)} >
            <Select.Option value="1">Normal</Select.Option>
            <Select.Option value="2">Contexto - Situação - Melhoria</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="Quem receberá o feedback">
          <Input onChange={e => setUserName(e.target.value)} value={user_name}/>
        </Form.Item>
        <Form.Item>
          <Button onClick = {() => saveFeedback()} >Enviar</Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default () => <FeedBackForm />;