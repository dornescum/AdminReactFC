import {Card, CardBody, CardHeader, Col, Row, Table} from "reactstrap";
import MorrisChart from "../../Charts/Morris";
import React, {useState, useRef, useEffect} from 'react';


const StatissticiMainGraf = () => {
    const years = [

        {name: 2013, id: 2013},
        {name: 2014, id: 2014},
        {name: 2015, id: 2015},
        {name: 2016, id: 2016},
        {name: 2017, id: 2017},
        {name: 2018, id: 2018},
        {name: 2019, id: 2019},
        {name: 2020, id: 2020},
        {name: 2021, id: 2021},
    ]
    const months = [
        {id: 1, name: 'ianuarie'},
        {id: 2, name: 'februarie'},
        {id: 3, name: 'martie'},
        {id: 4, name: 'aprilie'},
        {id: 5, name: 'mai'},
        {id: 6, name: 'iunie'},
        {id: 7, name: 'iulie'},
        {id: 8, name: 'august'},
        {id: 9, name: 'septembrie'},
        {id: 10, name: 'octombrie'},
        {id: 11, name: 'noiembrie'},
        {id: 12, name: 'decembrie'},
    ]
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch('data/info.json')
            // .then(res => res.json())
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result)
                    setIsLoaded(true);
                    setItems(result);
                    console.log(items)
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                    // console.log(error)
                }
            )
    }, [])

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
                            <select className="custom-select" id="monthFilter" value={1} onChange={changeMonth}>
                                <option>Luna</option>
                                {months.map((item) => {
                                    return <option defaultValue="1" key={item.id}>{item.name}</option>
                                })}
                            </select>
                        </div>
                    </Col>
                    <Col lg='4'>
                        <div className='perioada-select'>
                            <select defaultValue="" className="custom-select" value={2021} onChange={changeYear}>
                                <option>Anul</option>
                                {years.map((item) => {
                                    return <option defaultValue="1" key={item.id}>{item.name}</option>
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
                                    <td></td>
                                    <td>{item.luna} {item.an}</td>
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


    const changeMonth = (e) => {
        console.log(e.target.value)
        // setData(data.filter((item)=>{
        //     console.log(item)
        //     return item.month === e.target.value;
        // }))
        console.log(data)
    }
    const changeYear = (e) => {
        // setData(data.filter((item)=>{
        //     console.log(item)
        //     return item.y === e.target.value;
        // }))
    }


}
export default StatissticiMainGraf;
// {
// y: "2015", a: 100, b: 90, id: 1, month: [{
//     ianuarie: [{visitors: 12, pages: 1, id: 100}],
//     februarie: [{visitors: 2, pages: 1, id: 101}]
// }]},
//      {
// y: "2016", a: 100, b: 90, id: 2, month: [{
//     ianuarie: [{visitors: 12, pages: 1, id: 1011}],
//     februarie: [{visitors: 2, pages: 1, id: 1012}]
// }]},

// {y: "2015", a: 100, b: 90, id:1},
// {y: "2016", a: 75, b: 65, id:2},
// {y: "2017", a: 50, b: 40, id:13},
// {y: "2018", a: 75, b: 65, id:4},
// {y: "2019", a: 50, b: 40, id:5},
// {y: "2020", a: 75, b: 65, id:6},
// {y: "2021", a: 40, b: 90, id:7}
