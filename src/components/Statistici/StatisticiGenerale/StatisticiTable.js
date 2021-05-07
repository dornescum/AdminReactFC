import {Card, CardBody, CardHeader, Table} from "reactstrap";

const StatisticiTable = () => {
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
                {userVisitors.map((item) => {
                    return <tr key={item.id}>
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
