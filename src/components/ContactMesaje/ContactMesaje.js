import ContentWrapper from "../Layout/ContentWrapper";
import {CardBody, Card, Col, CardHeader, CardFooter, Row, PaginationItem, PaginationLink} from "reactstrap";
import MesajeInfo from "./MesajeInfo";
import MesajeClienti from "./MesajeClienti";
import PaginationModel from "./PaginationModel";

import './mesaje.scss'

const ContactMesaje = () => {
    const mesajeClienti = [
        {
            name: 'Gigina D.',
            date: '22.03.2321',
            id: Math.floor(Math.random() * 100),
            body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
        },
        {
            name: 'Didina D.',
            date: '22.03.2321',
            id: Math.floor(Math.random() * 30),
            body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
        },
        {
            name: 'Kasandra D.',
            date: '22.03.2321',
            id: Math.floor(Math.random() * 50),
            body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
        },

    ]

    return <ContentWrapper>
        <div className="content-heading">
            <div>Lista mesaje</div>
        </div>
        <MesajeInfo/>
        {mesajeClienti.map((item) => {
            return <MesajeClienti name={item.name} date={item.date} body={item.body} key={item.id} id={item.id}/>
        })}

        <PaginationModel/>


    </ContentWrapper>
}

export default ContactMesaje;
