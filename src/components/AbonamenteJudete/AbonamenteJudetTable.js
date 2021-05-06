import {Card, CardBody, CardHeader, Table} from "reactstrap";

import '../IstoricAbonamente/IstoricAbonamente.scss'

const AbonamenteJudetTable =()=>{
    const userCountySubscription = [
        {
            id: 1,
            subscription: 'pro',
            county: 'texas',
            from: '01.02.2008',
            to: '06.08.2010',
            value: 0,
            status: "Activ",
            extension: true
        },
        {
            id: 2,
            subscription: 'standard',
            county: 'Normandy',
            from: '01.02.2008',
            to: '06.08.2010',
            value: 0,
            status: "Activ",
            extension: true
        },
        {
            id: 3,
            subscription: 'free',
            county: 'Berceni',
            from: '01.02.2008',
            to: '06.08.2010',
            value: 0,
            status: "Activ",
            extension: true
        },
        {
            id: 4,
            subscription: 'free',
            county: 'Beerceni',
            from: '01.02.2008',
            to: '06.08.2010',
            value: 0,
            status: "inActiv",
            extension: false
        },
    ];


    return <Card className="card-default">
        <CardHeader>Striped Rows</CardHeader>
        <CardBody>
            <Table striped responsive className='table-subscription'>
                <thead>
                <tr>
                    <th>Nr Crt</th>
                    <th>Tip abonament</th>
                    <th>Judet</th>
                    <th>de la</th>
                    <th>pana la</th>
                    <th>valoare abonament</th>
                    <th>status</th>
                    <th className='add-county'>Adauga Judet</th>

                </tr>
                </thead>
                <tbody>
                {userCountySubscription.map((item) => {
                    return <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.subscription === 'standard' ? <p className='standard'>Standard</p> : item.subscription ||
                        item.subscription === "pro" ? <p className='pro'>Pro</p>: item.subscription ||
                        item.subscription === 'free' ? <p className='free'>Free</p>: item.subscription}
                        </td>
                        <td>{item.county}</td>
                        <td>{item.from}</td>
                        <td>{item.to}</td>
                        <td>{item.value} ron</td>
                        <td>{item.status ==='Activ' ? <p className='pro'>Activ</p>: <p className='inactive'>Activeaza</p>}</td>
                        <td>{item.extension ? <p className='pro'>abonament activ</p>: <p className='inactive'>Prelungire</p>}</td>
                    </tr>
                })
                }


                </tbody>
            </Table>
        </CardBody>
    </Card>
}
export default AbonamenteJudetTable;
