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
        <CardFooter>
         <h4>Observatii:</h4>
            <ul>
                <li>
                    Membrii Free au dreptul sa raspunda la maxim 3 mesaje pe luna. Incepand cu mesajul nr. 4 aferent
                    lunii respective, veti primi in continuare alerta pe email, insa fara datele de contact si fara a
                    avea posibilitatea sa raspundeti inapoi clientului (pentru asta trebuie sa alegeti un abonament
                    Standard sau Pro).
                </li>
                <li>
                    Pentru membrii Free procesarea/validarea mesajelor de catre echipa din Backoffice se face de doua
                    ori pe zi: odata la inceputul zilei (interval 7:00 - 10:00) si inca odata la sfarsitul zilei
                    (interval 17:00 - 20:00). Pentru membrii Standard si PRO, validarea mesajelor se face cat mai repede
                    cu putinta.
                </li>
            </ul>
        </CardFooter>
    </Card>
}
export default MesajeInfo;
