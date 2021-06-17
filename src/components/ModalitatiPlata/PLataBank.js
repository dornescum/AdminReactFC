import {Card, CardBody, CardHeader, Table} from "reactstrap";

const PlataBank = () => {
    return <Card className="card-default mt-4">
        <CardHeader>
            <div className='pl-3'>
                <p className='margin-0'>
                    <i className="fas fa-credit-card fa-2x"></i> <span className='pl-3'
                                                                       style={{fontSize: '22px'}}                                       >
                        Date bancare</span>
                </p>
            </div>
        </CardHeader>
        <CardBody>
            <Table striped responsive hover>
                <tbody>
                <tr>
                    <td className='bank-card'>Banca</td>
                    <td className='bank-info'>ING Bank</td>
                </tr>
                <tr>
                    <td className='bank-card'>IBAN</td>
                    <td className='bank-info'> RO29 INGB 0000 9999 0827 0027</td>
                </tr>
                <tr>
                    <td className='bank-card'>Moneda</td>
                    <td className='bank-info'>RON</td>
                </tr>
                <tr>
                    <td className='bank-card'>SWIFT</td>
                    <td className='bank-info'>INGBROBU</td>
                </tr>
                <tr>
                    <td className='bank-card'>BIC</td>
                    <td className='bank-info'>INGB</td>
                </tr>

                </tbody>
            </Table>
        </CardBody>
    </Card>


}
export default PlataBank;
