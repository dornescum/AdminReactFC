import React from "react";

const DateInfo =()=>{
    const style={
        padding: '0.5rem 0.5rem 2rem 0.5rem'
    }

    return <div style={style}>
        <p className='font-para-title'>Aceasta pagina contine desfasuratorul solicitarilor datelor de contact direct (telefon si email), ordonate cronologic descrescator. Mai exact, de fiecare data cand un potential client face click pe butonul <b>telefon</b>  sau <b>email</b>, de pe pagina dvs. de prezentare, sistemul inregistreaza actiunea si apoi returneaza informatia solicitata. .</p>
        <p className='font-para-title'>Astfel, dumneavoastra puteti corela mai usor apelurile telefonice primite intr-o zi cu solicitarile numarului de telefon. In mod asemanator se face asocierea dintre email-urile primite si solicitarile adresei de email.
        </p>
    </div>
}
export default DateInfo;
