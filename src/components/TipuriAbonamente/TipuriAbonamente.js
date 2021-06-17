import React, {useState, useRef} from "react";
import {Button, Card, CardBody, CardHeader, Table} from "reactstrap";
import ContentWrapper from '../Layout/ContentWrapper';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

import 'react-tippy/dist/tippy.css';
import {Tooltip} from 'react-tippy';

// import tippy from '@tippy.js/react';
// import 'tippy.js/dist/tippy.css';

import './TipuriAbonament.scss'

const TipuriAbonamente = () => {
    let expres = 'Va fi recomandat la cererea clientului de a colabora cu o firma de cadastru';
    // const [show, setShow] = useState(false);
    // const target = useRef(null);


    const PLACEMENTS = [
        // {placement: 'top', text: ' Date de prezentare', id: 1, class: 'date-abonamente', title: "Welcome to React"},
        {placement: 'bottom', text: 'minimale ', id: 2, class: 'abonamente-free', title: "minimale"},
        {placement: 'left', text: 'standard ', id: 3, class: 'abonamente-standard', title: "standard"},
        {placement: 'right', text: 'preferentiale ', id: 4, class: 'abonamente-pro', title: "preferentiale"}
    ]
    return <ContentWrapper>
        <div className="content-heading">
            <h2 style={{margin: 0}}>Tipuri abonamente</h2>
        </div>

        <Tooltip
            title="Welcome to React"
            position="top"
            trigger="click"
        >
            <p>
                Click here to show popup
            </p>
        </Tooltip>

        {/*<tippy content='test'>*/}
        {/*    <button>test</button>*/}
        {/*</tippy>*/}
        <Card className="card-default">
            <CardBody className="abonamente">
                <Table striped responsive hover>
                    <thead className='abonamente-title'>
                    <tr>
                        <th className='abonamente-head'>Abonamente</th>
                        <th className='free-member'>Free</th>
                        <th className='standard-member'>
                            <i className='fa fa-user' style={{paddingRight: " .3rem"}}></i>

                            Standard
                        </th>
                        <th className='pro-member'>
                            <i className='fa fa-trophy' style={{paddingRight: " .3rem"}}></i>
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

                        {/*{PLACEMENTS.map((item) => {*/}
                        {/*    return <td className={item.class} data='test'*/}
                        {/*               id={item.id} key={item.id} placement={item.placement}*/}
                        {/*               content={`Tooltip on ${item.text}`}>*/}
                        {/*        <Tooltip title={item.title}*/}
                        {/*                 position="top"*/}
                        {/*                 trigger="click">*/}
                        {/*            {" "}{item.text}*/}
                        {/*        </Tooltip>*/}
                        {/*        <i className="fa fa-info-circle"></i></td>*/}
                        {/*})}*/}

                        {/*    <td className='date-abonamente'>*/}
                        {/*        <Tooltip   title="Welcome to React"*/}
                        {/*                   position="top"*/}
                        {/*                   trigger="click">*/}
                        {/*        Date de prezentare*/}
                        {/*        </Tooltip>*/}
                        {/*        </td>*/}
                        <td className='date-abonamente' data='test'>Date de prezentare</td>

                        <td className='abonamente-free' data='test'>
                            <Tooltip title="minimala" position="left" trigger="click">
                                minimale {" "}
                            </Tooltip>
                            <i className="fa fa-info-circle"></i></td>
                        <td className='abonamente-standard'>
                            <Tooltip title="minimala" position="top" trigger="click">
                                standard {" "}
                            </Tooltip>
                            <i className="fa fa-info-circle"></i></td>
                        <td className='abonamente-pro'>
                            <Tooltip title="minimala" position="top" trigger="click">
                                preferentiale {" "}
                            </Tooltip>
                            <i className="fa fa-info-circle"></i></td>

                    </tr>
                    <tr className='abonamente-list'>
                        <td className='date-abonamente'>Afisare formular de contact</td>
                        <td className='abonamente-free'>
                            <Tooltip title="limitata" position="top" trigger="click">
                                limitata {" "}
                            </Tooltip>

                            <i className="fa fa-info-circle"></i></td>
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
                        <td className='abonamente-free'>
                            <Tooltip title="minimala" position="top" trigger="click">
                                minimala {" "}
                            </Tooltip>
                            <i className="fa fa-info-circle"></i></td>
                        <td className='abonamente-standard'>
                            <Tooltip title="minimala" position="top" trigger="click">
                                standard {" "}
                            </Tooltip>

                            <i className="fa fa-info-circle"></i></td>
                        <td className='abonamente-pro'>
                            <Tooltip title="minimala" position="top" trigger="click">
                                preferentiala {" "}
                            </Tooltip>


                            <i className="fa fa-info-circle"></i></td>
                    </tr>
                    <tr className='abonamente-list'>
                        <td className='date-abonamente'>Afisare in pagina de cautare</td>
                        <td className='abonamente-free'>
                            <Tooltip title="minimala" position="top" trigger="click">
                                minimala {" "}
                            </Tooltip>


                            <i className="fa fa-info-circle"></i></td>
                        <td className='abonamente-standard'>standard {" "}
                            <Tooltip title="minimala" position="top" trigger="click">
                                <i className="fa fa-info-circle"></i>

                            </Tooltip>

                        </td>
                        <td className='abonamente-pro'>preferentiala {" "}
                            <Tooltip title="minimala" position="top" trigger="click">
                                <i className="fa fa-info-circle"></i>
                            </Tooltip>
                          </td>
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
