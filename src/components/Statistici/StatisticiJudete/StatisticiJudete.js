import ContentWrapper from "../../Layout/ContentWrapper";
import Chartist from 'chartist';
import StatisticiJudetGrapf from "./StatisticiJudetGrapf";
import {Card, CardBody, CardHeader, Col, Row, Table} from "reactstrap";
// import ChartistGraph from "react-chartist";
// import {Line} from "../../Charts/ChartChartist.setup";
// import data from '../../../../public/data/info.json'
import React, {useState, useEffect} from 'react'

// Chartist
import 'matchmedia/index.js';
import 'chartist/dist/chartist.min.css';
import ChartistGraph from 'react-chartist';


const StatisticiJudete = () => {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch('data/info_2018.json')
            // .then(res => res.json())
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result)
                    setIsLoaded(true);
                    setItems(result);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])


    const filterMonth = (e) => {
        console.log(e.target.value)
        console.log(items)
        console.log('click')
        let month = e.target.value;
        alert(e.target.value)
        // setItems(month)
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return <>
            <div className='statistici-perioada'>
                <Row>
                    <Col lg='4'>
                        <h6 className='cauta-perioada'>Selectati perioada</h6>
                    </Col>
                    <Col lg='4'>
                        <div className='perioada-select'>
                            <select className="custom-select" id="monthFilter"
                                    onChange={filterMonth}
                                    multiple={false}
                                    // onChange={(e) => setItems(e.target.value)}
                                    // value={items}

                            >
                                {items.map((item) => {
                                    const {id, luna} = item
                                    return <option defaultValue={id} key={id}>{luna}</option>
                                })}
                            </select>
                        </div>
                    </Col>
                    <Col lg='4'>
                        <div className='perioada-select'>
                            <select defaultValue="" className="custom-select" value={2021}>
                                <option>Anul</option>
                                {items.map((item) => {
                                    return <option defaultValue="1" key={item.id}>{item.an}</option>
                                })}
                            </select>
                        </div>
                    </Col>
                </Row>
            </div>
            {/*grapf*/}
            <div style={{padding: '1rem 0'}}>
                <Card className="card-default">
                    <CardHeader>Area</CardHeader>
                    {/*<CardBody>*/}
                    {/*    <MorrisChart type={'Area'} id="morris-area" data={data} options={options}/>*/}
                    {/*</CardBody>*/}
                    <CardBody>
                        <Table striped responsive className='table-subscription'>
                            <thead>
                            <tr>
                                <th>Nr Crt</th>
                                <th>Luna</th>
                                <th>Nr. vizitatori</th>
                                <th>Nr. pagini accesate</th>
                                <th>Pagini per vizitator</th>
                            </tr>
                            </thead>
                            <tbody>
                            {items.map((item) => {
                                return <tr key={item.id}>
                                    <td>{item.luna}</td>
                                    <td> {item.an}</td>
                                    <td>{item.nr_vizitatori}</td>
                                    <td>{item.nr_pagini}</td>
                                    <td>{item.nr_pagini}/{item.nr_vizitatori}</td>
                                </tr>
                            })
                            }
                            <tr>
                                <td></td>
                                <td>Total</td>
                                <td>dsa</td>
                                <td>dsadas</td>
                                <td>eee</td>
                            </tr>
                            </tbody>
                        </Table>
                    </CardBody>
                </Card>

            </div>

        </>

    }


    const changeYear = (e) => {
        console.log(data)
    }


}
export default StatisticiJudete;
