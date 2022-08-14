import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useNavigate } from "react-router-dom";



const Album = ({ album }) => {
    const { id, price, description, img, name } = album;

    const navigation = useNavigate();

    const handleBuy = () => {
        navigation("/checkout")

    }

    return (
        <div className='container '>
            <Row sm={12} md={12}>
                <Col  >
                    <Card className='mt-5 w-75 ' >
                        <Card.Img variant="top" src={img} />
                        <Card.Body>
                            <Card.Title className='fw-bold'>{name}</Card.Title>
                            <Card.Text>
                                {description}
                            </Card.Text>
                            <Card.Footer className='fw-bold'> Price : {price} BDT</Card.Footer>
                            <Button onClick={() => handleBuy()} className='w-50 fw-bold bg-opacity-75' variant="danger">Buy</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>


        </div>
    );
};

export default Album;
