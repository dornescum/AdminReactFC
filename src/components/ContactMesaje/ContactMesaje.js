import ContentWrapper from "../Layout/ContentWrapper";
import {CardBody, Card, Col, CardHeader, CardFooter, Row, PaginationItem, PaginationLink} from "reactstrap";
import MesajeInfo from "./MesajeInfo";
import MesajeClienti from "./MesajeClienti";
import PaginationModel from "./PaginationModel";
import Data from '../../fake_data.json';
import React, {useState} from "react";

import './mesaje.scss'

const ContactMesaje = () => {
    const mesajeClienti = [
        {
            name: 'Gigina D.',
            date: '22.03.2321',
            id: Math.floor(Math.random() * 100),
           message: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
        },
        {
            name: 'Didina D.',
            date: '22.03.2321',
            id: Math.floor(Math.random() * 30),
           message: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
        },
        {
            name: 'Kasandra D.',
            date: '22.03.2321',
            id: Math.floor(Math.random() * 50),
           message: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
        },

    ]
    const [users, setUsers] =useState(Data.slice(0,20))

    return <ContentWrapper>
        <div className="content-heading">
            <div>Lista mesaje</div>
        </div>
        <MesajeInfo/>
        <Card>
            <CardBody>
                <fieldset>


        {/*{mesajeClienti.map((item) => {*/}
        {/*    return <MesajeClienti name={item.name} date={item.date} message={item.message} key={item.id} id={item.id}/>*/}
        {/*})}*/}
                    {users.map((item)=>{
                        return <MesajeClienti
                            first_name={item.first_name} last_name={item.last_name}
                            date={item.date} message={item.text} key={item.id} id={item.id}/>
                    })}
                </fieldset>
            </CardBody>
        </Card>
        <PaginationModel/>
    </ContentWrapper>
}

export default ContactMesaje;
