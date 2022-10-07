import { Col, Divider, Row } from 'antd';
import React, {useState, useEffect} from 'react';
import api from'../services/api';

export default function FeedBackGrid() {

const [feedbacks, setFeedbacks] = useState();

useEffect(() => {
  api
    .get("/feedbacks")
    .then((response) => {
        setFeedbacks(response.data.Items);
        console.log(response.data.Items[0].id.S);
    })
    .catch((err) => {
      console.error("ops! ocorreu um erro" + err);
    });
}, []);

return (
    <>
    </>
    );
}
