import {Card, CardBody, CardHeader, Table} from "reactstrap";

const PlataBank = () => {
    return <Card className="card-default mt-4">
            <CardHeader>
                <div style={{paddingLeft:"1rem"}}>
                    <p>
                        <i className="fas fa-credit-card"></i> Date bancare
                    </p>
                </div>
               </CardHeader>
            <CardBody>
                <Table striped responsive hover>
                    <tbody>
                    <tr>
                        <td className='bank-card'>Banca</td>
                        <td>ING Bank</td>
                    </tr>
                    <tr>
                        <td className='bank-card'>IBAN</td>
                        <td> RO29 INGB 0000 9999 0827 0027</td>
                    </tr>
                    <tr>
                        <td className='bank-card'>Moneda</td>
                        <td>RON</td>
                    </tr>
                    <tr>
                        <td className='bank-card'>SWIFT</td>
                        <td>INGBROBU</td>
                    </tr>
                    <tr>
                        <td className='bank-card'>BIC</td>
                        <td>INGB</td>
                    </tr>

                    </tbody>
                </Table>
            </CardBody>
        </Card>



}
export default PlataBank;
