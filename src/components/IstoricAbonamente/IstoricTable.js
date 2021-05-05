import {Card, CardBody, CardHeader, Table} from "reactstrap";

import './IstoricAbonamente.scss'

const IstoricTable = (props) => {
    const userSubscription = [
        {
            id: 1,
            subscription: 'pro',
            county: 'texas',
            from: '01.02.2008',
            to: '06.08.2010',
            value: 0
        },
        {
            id: 2,
            subscription: 'standard',
            county: 'Normandy',
            from: '01.02.2008',
            to: '06.08.2010',
            value: 0
        },
        {
            id: 3,
            subscription: 'free',
            county: 'Normandy',
            from: '01.02.2008',
            to: '06.08.2010',
            value: 0
        },
        {
            id: 4,
            subscription: 'free',
            county: 'Normandy',
            from: '01.02.2008',
            to: '06.08.2010',
            value: 0
        },
    ]
    console.log(userSubscription[0].id)
    let style = '';
    if (userSubscription.subscription === 'pro') {
        style = 'red'
    }
    if (userSubscription.subscription === 'standard') {
        style = 'blue'
    }

    return <Card className="card-default">
        <CardHeader>Striped Rows</CardHeader>
        <CardBody>
            <Table striped responsive>
                <thead>
                <tr>
                    <th>Nr Crt</th>
                    <th>Tip abonament</th>
                    <th>Judet</th>
                    <th>de la</th>
                    <th>pana la</th>
                    <th>valoare abonament</th>

                </tr>
                </thead>
                <tbody>
                {userSubscription.subscription === 'standard' ?
                    <td style={{color: 'blue'}}>{subscription}</td> :
                    (userSubscription.map((item) => {
                        return <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.subscription === 'standard' ? 'STANDARD' : item.subscription}</td>
                            <td>{item.county}</td>
                            <td>{item.from}</td>
                            <td>{item.to}</td>
                            <td>{item.value} ron</td>
                        </tr>
                    }))
                }
                {userSubscription.map((item) => {
                    if (userSubscription.subscription === 'standard') {
                        return <td style={{color: 'red'}}>{item.subscription}</td>
                    }
                    return <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.subscription}</td>
                        <td>{item.county}</td>
                        <td>{item.from}</td>
                        <td>{item.to}</td>
                        <td>{item.value} ron</td>
                    </tr>
                })}


                </tbody>
            </Table>
        </CardBody>
    </Card>
}
export default IstoricTable;
