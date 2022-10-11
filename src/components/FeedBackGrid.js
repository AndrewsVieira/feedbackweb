import { Col, Divider, Row, Table, Empty } from 'antd';
import React, { useState, useEffect } from 'react';
import api from '../services/api';

export default function FeedBackGrid() {

  const [feedbacks, setFeedbacks] = useState();

  useEffect(() => {
    api
      .get("/feedbacks")
      .then((response) => {
        let data = response.data.Items;
        setFeedbacks(data);
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);

  return (
    <>
      <Row >
        <Col span={8} order={1}>Id</Col>
        <Col span={8} order={2}>Descrição</Col>
        <Col span={2} order={3}>Tipo</Col>
        <Col span={6} order={4}>Quem recebeu</Col>
      </Row>
      <Divider />
      {feedbacks != null && feedbacks != undefined ? feedbacks.map((res) => {
        return (
          <Row >
            <Col span={8}>{res.id.S}</Col>
            <Col span={8}>{res.description.S}</Col>
            <Col span={2}>{res.type.N}</Col>
            <Col span={6}>{res.user_name.S}</Col>
          </Row>
        );
      }) : Empty}
    </>
  );
}
