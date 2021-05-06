const StatisticiInfo =()=>{
    return <>
    <p className='font-para-title'>Statisticile generale sunt afisate functie de perioada selectata (luna, an) si sunt impartite pe 3 categorii:</p>
        <div>
            <ol>
                <li className='font-para-title'>Anual - numarul de vizitatori unici si numarul de pagini accesate la nivel de site, grupat pe luni. </li>
                <li className='font-para-title'>Lunar pe judete - numarul de vizitatori unici si numarul de pagini accesate, lunar, grupat pe fiecare judet in parte.</li>
                <li className='font-para-title'>Solicitari de oferta - numarul de cereri de oferta, lunar, grupat pe fiecare judet in parte.</li>
                <li className='font-para-title'>Afisari date contact - numarul de vizitatori unici care au solicitat afisarea datelor de contact (telefon sau email) ale autorizatilor si numarul de afisari ale datelor de contact, pentru fiecare luna in parte.</li>
            </ol>
        </div>
    </>
}
export default StatisticiInfo;
