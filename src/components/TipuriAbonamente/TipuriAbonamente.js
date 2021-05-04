import React from "react";
import {Card, CardBody, CardHeader, Table} from "reactstrap";
import ContentWrapper from '../Layout/ContentWrapper';

import './TipuriAbonament.scss'

const TipuriAbonamente =()=>{
    return <ContentWrapper>
        <div className="content-heading">
            <h2>Tipuri abonamente</h2>
        </div>

        <Card className="card-default">
            <CardBody className="abonamente">
                <Table striped responsive>
                    <thead className='abonamente-title'>
                    <tr className='abonamente-title'>
                        <th></th>
                        <th className='free'>Free</th>
                        <th className='standard'>
                            <i className='fa fa-user'></i>

                           Standard</th>
                        <th className='pro'>
                            <i className='fa fa-trophy'></i>
                            Pro</th>
                    </tr>
                    <tr>
                        <th></th>
                        <th></th>
                        <th className='abonamente-value'>
                            <div>
                                de la <br/> <span>66.99</span> Ron /luna
                            </div>
                        </th>
                          <th className='abonamente-value'>
                            <div>
                                de la <br/> <span>166.99</span> Ron /luna
                            </div>
                        </th>

                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Larry</td>
                        <td>the Bird</td>
                        <td>@twitter</td>
                    </tr>
                    </tbody>
                </Table>
            </CardBody>
        </Card>
    </ContentWrapper>
}
export default TipuriAbonamente;
