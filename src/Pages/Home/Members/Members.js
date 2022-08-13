import React, { useEffect } from 'react';
import { useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const Members = () => {
    const [members, setMembers] = useState([]);
    useEffect(() => {
        fetch("members.json")
            .then(res => res.json())
            .then(data => setMembers(data))
    }, [])

    return (

        <div id='members' className='container '>

            <h4 className='text-white text-center fw-bold mt-5'>Members </h4>
            {
                members.map(member =>
                    <div className="memberDetails">
                        <Row xs={1} md={12} className="g-4 d-flex">
                            {Array.from({ length: 1 }).map((_, idx) => (
                                <Col className='w-50 mx-auto mt-5 mb-5  '>
                                    <Card className='border border-0 bg-dark text-white'>
                                        <Card.Title className='text-center text-danger fw-bold mb-3'>{member.name}</Card.Title>
                                        <h6 className='text-center fw-bold'> {member.position}</h6>
                                        <Card.Img className='w-50 mx-auto' variant="top" src={member.img} />
                                        <Card.Body>

                                            <Card.Text>
                                                {member.description}
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </div>


                )
            }


        </div>
    );
};

export default Members;