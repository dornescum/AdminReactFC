import ContentWrapper from "../../Layout/ContentWrapper";
import Chartist from 'chartist';
import StatisticiJudetGrapf from "./StatisticiJudetGrapf";
import {Card, CardBody, CardHeader, Col, Row, Table} from "reactstrap";
// import ChartistGraph from "react-chartist";
// import {Line} from "../../Charts/ChartChartist.setup";
// import data from '../../../../public/data/info.json'
import React, {useState, useEffect} from 'react';
import StatisticiJudeteTable from "./StatisticiJudeteTable";
// Chartist
import 'matchmedia/index.js';
import 'chartist/dist/chartist.min.css';
import ChartistGraph from 'react-chartist';


const StatisticiJudete = () => {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const [currentMonth, setCurrentMonth] =useState(1);
    const [currentYear, setCurrentYear] =useState(2018);
    const Months = [
        {id:1, name: 'ianuarie'},
        {id:2, name: 'februarie'},
        {id:3, name: 'martie'},
        {id:4, name: 'aprilie'},
        {id:5, name: 'mai'},
        {id:6, name: 'iunie'},
        {id:7, name: 'iulie'},
        {id:8, name: 'august'},
        {id:9, name: 'septembrie'},
        {id:10, name: 'octombrie'},
        {id:11, name: 'noiembrie'},
        {id:12, name: 'decembrie'},
    ]
    const Years =[2018, 2019, 2020];
    // let currentYear = Years[0];
    // let currentMonth = 1;
     function fetchData (){
        const URL =`/data/info_${currentYear}.json`;
        fetch(URL)
        .then(res => res.json())
            .then(
                (result) => {
                    // console.log(result)
                    setIsLoaded(true);
                    setItems(result);
                    // this.props.dispatch(result)
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }
    useEffect(fetchData, [])


    const filterMonth = (e) => {
        setCurrentMonth(e.target.value);
        console.log(currentMonth);
        fetchData();
        // setItems(items);
    }
    const changeYear = (e) => {
        console.log(e.target.value);

        setCurrentYear(e.target.value);
        console.log(currentYear);
       fetchData();
        // console.log(currentYear);

        //  useEffect(fetchData, [])
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
                                    // value={}
                            >
                                {Months.map((item) => {
                                    const {id, name} = item;
                                    return <option key={id} value={id}>{name}</option>
                                })}
                            </select>
                        </div>
                    </Col>
                    <Col lg='4'>
                        <div className='perioada-select'>
                            <select defaultValue="" className="custom-select"  onChange={changeYear}>
                                {Years.map((item) => {
                                    return <option defaultValue="1" key={item}>{item}</option>
                                })}
                            </select>
                        </div>
                    </Col>
                </Row>
            </div>

                <StatisticiJudeteTable data={items} month={currentMonth} year={currentYear}/>
        </>

    }





}
export default StatisticiJudete;
// <div style={{padding: '1rem 0'}}>
//     <Card className="card-default">
//         <CardHeader>Area</CardHeader>
//         {/*<CardBody>*/}
//         {/*    <MorrisChart type={'Area'} id="morris-area" data={data} options={options}/>*/}
//         {/*</CardBody>*/}
//         <CardBody>
//             <Table striped responsive className='table-subscription'>
//                 <thead>
//                 <tr>
//                     <th>Nr Crt</th>
//                     <th>Luna</th>
//                     <th>Nr. vizitatori</th>
//                     <th>Nr. pagini accesate</th>
//                     <th>Pagini per vizitator</th>
//                 </tr>
//                 </thead>
//                 <tbody>
//                 {items.map((item) => {
//                     return <tr key={item.id} className={item.luna == currentMonth ? "yellow":""}>
//                         <td>{item.luna}</td>
//                         <td> {item.an}</td>
//                         <td>{item.nr_vizitatori}</td>
//                         <td>{item.nr_pagini}</td>
//                         <td>{item.nr_pagini}/{item.nr_vizitatori}</td>
//                     </tr>
//                 })
//                 }
//                 <tr>
//                     <td></td>
//                     <td>Total</td>
//                     <td>dsa</td>
//                     <td>dsadas</td>
//                     <td>eee</td>
//                 </tr>
//                 </tbody>
//             </Table>
//         </CardBody>
//     </Card>

{/*</div>*/}
