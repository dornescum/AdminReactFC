import {CardBody, Card, Col, CardHeader, CardFooter} from "reactstrap";
// import ContentWrapper from "../Layout/ContentWrapper";


const MesajeInfo = () => {
    return <Card>
        <CardHeader>
            <h6 className='mesaje-subtitle'>
                Aici puteti regasi mesajele primite prin intermediul formularului de contact din pagina dvs. de
                prezentare/profil.
            </h6>
           </CardHeader>
        <CardBody>
            <h4>Cum functioneaza?</h4>
            <ol>
                <li>
                    Clientul intra pe pagina dvs. de prezentare, completeaza formularul de contact apoi apasa butonul
                    "Trimite mesaj".
                </li>
                <li>
                    Noi validam mesajul (sa nu fie SPAM, sa nu contina injurii etc.), apoi il trimitem mai departe catre
                    dvs.
                </li>
                <li>
                    Primiti un email cu toate detaliile si veti avea posibilitatea sa raspundeti direct clientului, prin
                    reply la email.
                </li>
            </ol>
        </CardBody>
       
    </Card>
}
export default MesajeInfo;
