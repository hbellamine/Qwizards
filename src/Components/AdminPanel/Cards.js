import React from 'react'
import 'antd/dist/antd.css';
import { Card } from 'antd';

const Cards = props => {
    
    return (
    <Card title={props.title}  style={{ width: 300, margin:"12px", borderRadius:'10px', boxShadow: "12px 13px 14px -13px rgba(148,5,148,1)" }}>
        <p>{props.content1}</p>
        <p>{props.content2}</p>
        <p>{props.content3}</p>
    </Card>
    )
}
export default Cards;