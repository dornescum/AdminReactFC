import ContentWrapper from "../Layout/ContentWrapper";
import React from "react";


const DateContactTop = () => {
    return <div className="content-heading">
        <div>Solicitari date contact (telefon/email)
            <p className='font-para-title'>Aceasta pagina contine desfasuratorul solicitarilor datelor de contact direct (telefon si email), ordonate cronologic descrescator. Mai exact, de fiecare data cand un potential client face click pe butonul <b>telefon</b>  sau <b>email</b>, de pe pagina dvs. de prezentare, sistemul inregistreaza actiunea si apoi returneaza informatia solicitata. .</p>
            <p className='font-para-title'>Astfel, dumneavoastra puteti corela mai usor apelurile telefonice primite intr-o zi cu solicitarile numarului de telefon. In mod asemanator se face asocierea dintre email-urile primite si solicitarile adresei de email.
            </p>
        </div>
    </div>
}
export default DateContactTop;
