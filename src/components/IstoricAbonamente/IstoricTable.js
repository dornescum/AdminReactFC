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
            county: 'Berceni',
            from: '01.02.2008',
            to: '06.08.2010',
            value: 0
        },
        {
            id: 4,
            subscription: 'free',
            county: 'Beerceni',
            from: '01.02.2008',
            to: '06.08.2010',
            value: 0
        },
    ]
    console.log(userSubscription[0].id)
    let standard = {
        backgroundColor:'#428bca',
        color: 'white',
        textAlign: 'center',
        fontSize: 14,
        borderRadius:2,
        padding: "4px 0",
        marginBottom: 0
    };
 let pro = {
        backgroundColor:'#87b87f',
        color: 'white',
        textAlign: 'center',
        fontSize: 14,
        borderRadius:2,
     padding: "4px 0",
     marginBottom: 0
 };
    let free = {
        backgroundColor:'#ffb752',
        color: 'white',
        textAlign: 'center',
        fontSize: 14,
        borderRadius:2,
        padding: "4px 0",
        marginBottom: 0
    };

    return <Card className="card-default">
        <CardHeader>Striped Rows</CardHeader>
        <CardBody>
            <Table striped responsive className='table-subscription'>
                <thead>
                <tr>
                    <th>Nr Crt</th>
                    <th>Tip abonament</th>
                    <th>Judet</th>
                    <th>De la</th>
                    <th>Pana la</th>
                    <th>Valoare abonament</th>

                </tr>
                </thead>
                <tbody>
                {userSubscription.map((item) => {
                        return <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.subscription === 'standard' ? <p style={standard}>Standard</p> : item.subscription ||
                                item.subscription === "pro" ? <p style={pro}>Pro</p>: item.subscription}
                            </td>
                            <td>{item.county}</td>
                            <td>{item.from}</td>
                            <td>{item.to}</td>
                            <td>{item.value} ron</td>
                        </tr>
                    })
                }


                </tbody>
            </Table>
        </CardBody>
    </Card>
}
export default IstoricTable;
// <i className='fa fa-user' style={{paddingRight:" .3rem"}}></i>
// <i className='fa fa-trophy'  style={{paddingRight:" .3rem"}}></i>
