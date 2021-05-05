const PlataInfo =()=>{
    return  <>
        <ol>
            <li className='ol-title'> Ordin de plata
                <p className='font-para-title'>Acest tip de plata se face doar in baza facturii proforme trimise de catre personalul FirmeCadastru pe adresa de e-mail asociata contului de pe care se plaseaza comanda. </p>
            </li>
            <li className='ol-title'>  Transfer bancar
                <p className='font-para-title'>Poti utiliza aplicatia de internet banking a bancii tale pentru a efectua plata, exact ca in cazul unui transfer bancar obisnuit. Plata se efectueaza in conditii de siguranta maxima, prin sistemul tau de internet banking. </p>
            </li>

        </ol>
        <p className='font-para-title' style={{paddingLeft:"1rem"}}>Activarea abonamentului se face dupa confirmarea platii proformei emise in contul specificat in document.
        </p>
    </>


}
export default PlataInfo;
