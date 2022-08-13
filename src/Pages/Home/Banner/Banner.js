import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import banner_1 from "../../../images/artcell.jpg"
import banner_2 from "../../../images/live_1.jpg"
import banner_3 from "../../../images/live_3.jpg"


const Banner = () => {
    return (
        <div>
            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        width="1556"
                        height="700"
                        src={banner_1}
                        alt="First slide"
                    />
                    {/* <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption> */}
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        width="1556"
                        height="700"
                        src={banner_2}
                        alt="Second slide"
                    />

                    {/* <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption> */}
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        width="1556"
                        height="700"
                        src={banner_3}
                        alt="Third slide"
                    />

                    {/* <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption> */}
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;
