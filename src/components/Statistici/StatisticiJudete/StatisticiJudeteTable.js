import {Card, CardBody, CardHeader, Table} from "reactstrap";
import React from "react";

const StatisticiJudeteTable =(props)=>{
    let items = props.data;
    let currentMonth = props.month;
    let currentYear = props.year;
    // console.log(currentMonth);
    // console.log(currentYear);
    // console.log(items);
    return (
        <div style={{padding: '1rem 0'}}>
            <Card className="card-default">
                <CardHeader>Area</CardHeader>

                <CardBody>
                    <Table striped responsive className='table-subscription' >
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
                            return <tr key={item.id} className={item.luna == currentMonth ? "yellow":""}>
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
    )
}
export default StatisticiJudeteTable;
{/*<CardBody>*/}
{/*    <MorrisChart type={'Area'} id="morris-area" data={data} options={options}/>*/}
{/*</CardBody>*/}
