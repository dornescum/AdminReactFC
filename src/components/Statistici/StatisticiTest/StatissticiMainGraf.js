import {Card, CardBody, CardHeader, Col, Row, Table} from "reactstrap";
import MorrisChart from "../../Charts/Morris";
import {useState} from 'react';


const StatissticiMainGraf = () => {
    const [data, setData] = useState([
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


                        {
                            y: "2015", a: 100, b: 90, id: 1, month: 'ianuarie', visitors: 2232,
                            nrPages: 210,
                            unicPages: 50,
                        },
                        {
                            y: "2015", a: 33, b: 91, id: 2, month: 'februarie', visitors: 2222,
                            nrPages: 210,
                            unicPages: 50,
                        },
                        {
                            y: "2015", a: 37, b: 92, id: 3, month: 'martie', visitors: 212,
                            nrPages: 210,
                            unicPages: 50,
                        },
                        {
                            y: "2015", a: 43, b: 70, id: 4, month: 'aprilie', visitors: 42,
                            nrPages: 430,
                            unicPages: 50,
                        },
                        {
                            y: "2015", a: 100, b: 50, id: 5, month: 'mai', visitors: 342,
                            nrPages: 340,
                            unicPages: 50,
                        },
                        {
                            y: "2015", a: 10, b: 10, id: 6, month: 'iunie', visitors: 542,
                            nrPages: 220,
                            unicPages: 50,
                        },
                        {
                            y: "2015", a: 12, b: 20, id: 7, month: 'iulie', visitors: 434,
                            nrPages: 340,
                            unicPages: 50,
                        },
                        {
                            y: "2015", a: 17, b: 14, id: 8, month: 'august', visitors: 4324,
                            nrPages: 430,
                            unicPages: 50,
                        },

                        {
                            y: "2016", a: 75, b: 65, id: Math.floor(Math.random() * 1334542 / 2), month: 'ianuarie', visitors: 8,
                            nrPages: 11,
                            unicPages: 60,
                        },
                        {
                            y: "2016", a: 75, b: 65, id: Math.floor(Math.random() * 1334542 / 2), month: 'februarie', visitors: 8,
                            nrPages: 11,
                            unicPages: 60,
                        },
                        {
                            y: "2016", a: 75, b: 65, id: Math.floor(Math.random() * 1334542 / 2), month: 'martie', visitors: 8,
                            nrPages: 11,
                            unicPages: 60,
                        },
                        {
                            y: "2016", a: 75, b: 65, id: Math.floor(Math.random() * 1334542 / 2), month: 'aprilie', visitors: 8,
                            nrPages: 11,
                            unicPages: 60,
                        },
                        {
                            y: "2016", a: 75, b: 65, id: Math.floor(Math.random() * 1334542 / 2), month: 'iunie', visitors: 8,
                            nrPages: 11,
                            unicPages: 60,
                        },
                        {
                            y: "2016", a: 75, b: 65, id: Math.floor(Math.random() * 1334542 / 2), month: 'iulie', visitors: 8,
                            nrPages: 11,
                            unicPages: 60,
                        },


        // {y: "2015", a: 100, b: 90, id:1},
        // {y: "2016", a: 75, b: 65, id:2},
        // {y: "2017", a: 50, b: 40, id:13},
        // {y: "2018", a: 75, b: 65, id:4},
        // {y: "2019", a: 50, b: 40, id:5},
        // {y: "2020", a: 75, b: 65, id:6},
        // {y: "2021", a: 40, b: 90, id:7}
                    ])
    const [options, setOptions] = useState(
        {
            element: 'morris-area',
            xkey: 'y',
            ykeys: ["a", "b", 'visitors', 'nrPages'],
            labels: ["Serie A", "Serie B", 'Visitors', "Pages"],
            lineColors: ['#7266ba', '#23b7e5', '#ff1dce', '#e3f988'],
            resize: true
        }
    )
    const changeMonth = () => {
        setData(data.filter((item)=>{
            console.log(item)
            return item === item.month
        }))
    }

    return <>
        {/*drop*/}
        <div className='statistici-perioada'>
            <Row>
                <Col lg='4'>
                    <h6 className='cauta-perioada'>Selectati perioada</h6>
                </Col>
                <Col lg='4'>
                    <div className='perioada-select'>
                        <select defaultValue="" className="custom-select" multiple="">
                            <option onChange={changeMonth}>Luna</option>
                            {data.map((item) => {
                                return <option defaultValue="1" key={item.id}>{item.month}</option>
                            })}
                        </select>
                    </div>
                </Col>
                <Col lg='4'>
                    <div className='perioada-select'>
                        <select defaultValue="" className="custom-select" multiple="">
                            <option>Anul</option>
                            {data.map((item) => {

                                return <option defaultValue="1" key={item.id}>{item.y}</option>
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
                <CardBody>
                    <MorrisChart type={'Area'} id="morris-area" data={data} options={options}/>
                </CardBody>
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
                        {data.map((item) => {
                            return <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.a}</td>
                                <td>{item.b}</td>
                                <td>{item.nrPages}</td>
                                <td>{item.unicPages}</td>
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
export default StatissticiMainGraf;
