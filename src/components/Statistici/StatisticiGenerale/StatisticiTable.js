import {Card, CardBody, CardHeader, Table} from "reactstrap";
import {useEffect, useState} from "react";

const StatisticiTable = (props) => {
    const userVisitors = [
        {
            id: 1,
            month: 'ianuarie',
            visitors: 2125,
            nrPages: 14112,
            unicPages: 53245,
        },
        {
            id: 2,
            month: 'februarie',
            visitors: 21252,
            nrPages: 142,
            unicPages: 13245,
        },
        {
            id: 3,
            month: 'martie',
            visitors: 21215,
            nrPages: 14222,
            unicPages: 31245,
        },
        {
            id: 4,
            month: 'aprilie',
            visitors: 21235,
            nrPages: 14442,
            unicPages: 32245,
        },

    ];
    const [selectedOption, setSelectedOption] = useState([]);

    // const filterData=()=>{
    //     setData(props.chageMonth)
    // }
    // useEffect(() => {
    //     const swapi  ='https://swapi.dev/api/people/1/ '
    //     // fetch('data/info_2018.json')
    //     fetch(swapi)
    //         // .then(res => res.json())
    //         .then(res => res.json())
    //         .then(
    //             (result) => {
    //                 console.log(result)
    //                 const array = Object.entries(result)
    //                 // setIsLoaded(true);
    //                 setSelectedOption(array);
    //             },
    //             (error) => {
    //                 // setIsLoaded(true);
    //                 // setError(error);
    //                 console.log(error)
    //             }
    //         )
    // }, [])

    // const changeMonth = (e) => {
    //     console.log(e.target.value)
    //     setSelectedOption(e.target.value)
    // }
    return <Card className="card-default">
        <CardHeader>Striped Rows</CardHeader>
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
                {selectedOption.map((item) => {
                    return <tr key={item.id} onChange={props.changeMonth}>
                        <td>{item.id}</td>
                        <td>{item.month}</td>
                        <td>{item.visitors}</td>
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
}
export default StatisticiTable;
