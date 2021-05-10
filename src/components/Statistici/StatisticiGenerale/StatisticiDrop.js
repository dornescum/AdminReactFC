import React from "react";
import {Col, Row} from "reactstrap";

const StatisticiDrop = () => {
    return <div className='statistici-perioada'>
        <Row>
            <Col lg='4'>
                <h6 className='cauta-perioada'>Selectati perioada</h6>
            </Col>
            <Col lg='4'>
                <div className='perioada-select'>
                    <select defaultValue="" className="custom-select" multiple="">
                        <option>Luna</option>
                        <option defaultValue="1">Ianuarie</option>
                        <option defaultValue="2">Februarie</option>
                        <option defaultValue="3">Martie</option>
                    </select>
                </div>

            </Col>
            <Col lg='4'>
                <div className='perioada-select'>
                    <select defaultValue="" className="custom-select" multiple="">
                        <option>Anul</option>
                        <option defaultValue="1">2015</option>
                        <option defaultValue="2">2016</option>
                        <option defaultValue="3">2017</option>
                        <option defaultValue="4">2018</option>
                        <option defaultValue="5">2019</option>
                        <option defaultValue="6">2020</option>
                        <option defaultValue="7">2021</option>
                    </select>
                </div>

            </Col>

        </Row>
    </div>
}
export default StatisticiDrop;
