import React from "react";
import {Col, Row} from "reactstrap";

const StatisticiDrop = () => {
    return <div className='statistici-perioada'>
        <Row>
            <Col lg='4'>
                <h6 className='cauta-perioada'>Selectati perioada</h6>
            </Col>
            <Col lg='4'>

                <select defaultValue="" className="custom-select" multiple="">
                    <option>Luna</option>
                    <option defaultValue="1">Ianuarie</option>
                    <option defaultValue="2">Februarie</option>
                    <option defaultValue="3">Martie</option>
                </select>
            </Col>
            <Col lg='4'>
                <select defaultValue="" className="custom-select" multiple="">
                    <option>Anul</option>
                    <option defaultValue="1">2001</option>
                    <option defaultValue="2">2002</option>
                    <option defaultValue="3">2003</option>
                </select>
            </Col>

        </Row>


    </div>
}
export default StatisticiDrop;
