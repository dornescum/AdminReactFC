import React from "react";
import {Button, Card, CardBody, CardHeader, Table, Tooltip} from "reactstrap";
import ContentWrapper from '../Layout/ContentWrapper';

import './TipuriAbonament.scss'

const TipuriAbonamente = () => {
    let expres='Va fi recomandat la cererea clientului de a colabora cu o firma de cadastru';

    return <ContentWrapper>
        <div className="content-heading">
            <h2>Tipuri abonamente</h2>
        </div>

        <Card className="card-default">
            <CardBody className="abonamente">
                <Table striped responsive hover>
                    <thead className='abonamente-title'>
                    <tr>
                        <th className='abonamente-head'>Abonamente</th>
                        <th className='free-member'>Free</th>
                        <th className='standard-member'>
                            <i className='fa fa-user' style={{paddingRight:" .3rem"}}></i>

                            Standard
                        </th>
                        <th className='pro-member'>
                            <i className='fa fa-trophy'  style={{paddingRight:" .3rem"}}></i>
                            Pro
                        </th>
                    </tr>
                    <tr>
                        <th className='abonamente-value'></th>
                        <th className='abonamente-value'></th>
                        <th className='abonamente-value'>
                            <div>
                                de la <br/> <span>66.99</span> <br/> Ron /luna
                            </div>
                        </th>
                        <th className='abonamente-value'>
                            <div>
                                de la <br/> <span>166.99</span> <br/> Ron /luna
                            </div>
                        </th>

                    </tr>
                    </thead>
                    <tbody>
                    <tr className='abonamente-list'>
                        <td className='date-abonamente'>Date de prezentare</td>
                        <td className='abonamente-free' data='test'>minimale <i className="fa fa-info-circle"></i></td>
                        <td className='abonamente-standard'>standard <i className="fa fa-info-circle"></i></td>
                        <td className='abonamente-pro'>preferentiale <i className="fa fa-info-circle"></i></td>



                    </tr>
                    <tr className='abonamente-list'>
                        <td className='date-abonamente'>Afisare formular de contact</td>
                        <td className='abonamente-free'>limitata <i className="fa fa-info-circle"></i></td>
                        <td className='abonamente-standard'>✔</td>
                        <td className='abonamente-pro'>✔</td>
                    </tr>
                    <tr className='abonamente-list'>
                        <td className='date-abonamente'>Afisare adresa de email</td>
                        <td className='abonamente-free'></td>
                        <td className='abonamente-standard'>✔</td>
                        <td className='abonamente-pro'>✔</td>
                    </tr>
                    <tr className='abonamente-list'>
                        <td className='date-abonamente'>Afisare numar de telefon</td>
                        <td className='abonamente-free'></td>
                        <td className='abonamente-standard'>✔</td>
                        <td className='abonamente-pro'>✔</td>
                    </tr>
                    <tr className='abonamente-list'>
                        <td className='date-abonamente'>Scurta descriere</td>
                        <td className='abonamente-free'></td>
                        <td className='abonamente-standard'>✔</td>
                        <td className='abonamente-pro'>✔</td>
                    </tr>
                    <tr className='abonamente-list'>
                        <td className='date-abonamente'>Sectiune tipuri de lucrari</td>
                        <td className='abonamente-free'></td>
                        <td className='abonamente-standard'>✔</td>
                        <td className='abonamente-pro'>✔</td>
                    </tr>
 <tr className='abonamente-list'>
                        <td className='date-abonamente'>Sectiune prezentare firma</td>
                        <td className='abonamente-free'></td>
                        <td className='abonamente-standard'></td>
                        <td className='abonamente-pro'>✔</td>
                    </tr>
 <tr className='abonamente-list'>
                        <td className='date-abonamente'>Sectiune galerie foto</td>
                        <td className='abonamente-free'></td>
                        <td className='abonamente-standard'></td>
                        <td className='abonamente-pro'>✔</td>
                    </tr>
 <tr className='abonamente-list'>
                        <td className='date-abonamente'>Afisare unica pe judet</td>
                        <td className='abonamente-free'></td>
                        <td className='abonamente-standard'></td>
                        <td className='abonamente-pro'>✔</td>
                    </tr>
                    <tr className='abonamente-list'>
                        <td className='date-abonamente'>Afisare in judet</td>
                        <td className='abonamente-free'>minimala <i className="fa fa-info-circle"></i></td>
                        <td className='abonamente-standard'>standard <i className="fa fa-info-circle"></i></td>
                        <td className='abonamente-pro'>preferentiala <i className="fa fa-info-circle"></i></td>
                    </tr>
 <tr className='abonamente-list'>
                        <td className='date-abonamente'>Afisare in pagina de cautare</td>
                        <td className='abonamente-free'>minimala <i className="fa fa-info-circle"></i></td>
                        <td className='abonamente-standard'>standard <i className="fa fa-info-circle"></i></td>
                        <td className='abonamente-pro'>preferentiala <i className="fa fa-info-circle"></i></td>
                    </tr>
                    <tr className='abonamente-list'>
                        <td className='date-abonamente'>{expres}</td>
                        <td className='abonamente-free'></td>
                        <td className='abonamente-standard'></td>
                        <td className='abonamente-pro'>✔</td>
                    </tr>
                    <tr className='abonamente-list'>
                        <td className='date-abonamente'>Un judet / luna</td>
                        <td className='abonamente-free'></td>
                        <td className='money-color'>200 RON</td>
                        <td className='money-color'>500 RON</td>
                    </tr>
                      <tr className='abonamente-list'>
                        <td className='date-abonamente'>Un judet / an</td>
                        <td className='abonamente-free'></td>
                        <td className='money-color'>800 RON</td>
                        <td className='money-color'>2000 RON</td>
                    </tr>
                    </tbody>
                </Table>
            </CardBody>
        </Card>

    </ContentWrapper>
}
export default TipuriAbonamente;
