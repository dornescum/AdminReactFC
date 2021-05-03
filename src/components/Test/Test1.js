import React, {useState} from "react";
import {CardFooter, Col, FormGroup, Input, Row} from "reactstrap";
import '../TipuriLucrari/tipuri-lucrari.scss';


const Test1 = (props) => {
    const [enteredName, setEnteredName] = useState('');
    const [enteredCUI, setEnteredCUI] = useState('');
    const [enteredNr, setEnteredNr] = useState('');
    const [enteredCounty, setEnteredCounty] = useState('');
    const [enteredTown, setEnteredTown] = useState('');
    const [enteredAdress, setEnteredAdress] = useState('');
    const [enteredPhone, setEnteredPhone] = useState('');
    const [enteredFax, setEnteredFax] = useState('');
    const [enteredBank, setEnteredBank] = useState('');
    const [enteredEmail, setEnteredEmail] = useState('');
    const [enteredIban, setEnteredIban] = useState('');


    const nameHandler = (e) => {
        setEnteredName(e.target.value);
    }
    const CUIHandler = (e) => {
        setEnteredCUI(e.target.value);
    }
    const nrHandler = (e) => {
        setEnteredNr(e.target.value);
    }
    const countyHandler = (e) => {
        setEnteredCounty(e.target.value);
    }
    const townHandler = (e) => {
        setEnteredTown(e.target.value);
    }
    const adressHandler = (e) => {
        setEnteredAdress(e.target.value);
    }
    const phoneHandler = (e) => {
        setEnteredPhone(e.target.value);
    }
    const faxHandler = (e) => {
        setEnteredFax(e.target.value);
    }
    const emailHandler = (e) => {
        setEnteredEmail(e.target.value);
    }
    const bankHandler = (e) => {
        setEnteredBank(e.target.value);
    }
    const ibanHandler = (e) => {
        setEnteredIban(e.target.value);
    }

    const inputValue = e => {
        e.preventDefault();
        const data = {
            name: enteredName,
            cui: enteredCUI,
            nr: enteredNr,
            county: enteredCounty,
            town: enteredTown,
            adress: enteredAdress,
            phone: enteredPhone,
            email: enteredEmail,
            fax: enteredFax,
            bank: enteredBank,
            iban: enteredIban
        }

        setEnteredName('');
        setEnteredCUI('');
        setEnteredNr('');
        setEnteredCounty('');
        setEnteredTown('');
        setEnteredAdress('');
        setEnteredPhone('');
        setEnteredFax('');
        setEnteredEmail('');
        setEnteredBank('');
        setEnteredIban('');
        console.log(data)
    }


    return <form action="" onSubmit={inputValue}>
        <Row>
            <Col lg='6'>
                <FormGroup>
                    <label>Nume *</label>
                    <Input type="text" placeholder="nume" value={enteredName} onChange={nameHandler}
                    />
                </FormGroup>

                <FormGroup>
                    <label>CUI *</label>
                    <Input type="text" placeholder="cui" value={enteredCUI} onChange={CUIHandler}/>
                </FormGroup>
                <FormGroup>
                    <label>Nr Registru Comert *</label>
                    <Input type="number" placeholder="nr" value={enteredNr} onChange={nrHandler}/>
                </FormGroup>

                <fieldset style={{padding: "0", marginBottom: "10"}}>
                    <FormGroup row>
                        <label className="col-md-12 col-form-label">Judet *</label>
                        <div className="col-md-12">
                            <select defaultValue="" className="custom-select custom-select-sm" onChange={countyHandler}

                            >
                                <option value={enteredCounty}>Alege judet</option>
                                <option defaultValue="1">Alba</option>
                                <option defaultValue="2">Arad</option>
                                <option defaultValue="3">Arges</option>
                            </select>
                        </div>
                    </FormGroup>
                </fieldset>
                {/*================*/}
                <FormGroup>
                    <label>Localitate *</label>
                    <Input type="text" placeholder="localitate" value={enteredTown} onChange={townHandler}/>
                </FormGroup>

                {/*==============*/}
                <div className="form-group row">
                    <label className="col-md-3 col-4 col-form-label " htmlFor="inputContact6">Adresa
                        sediu social *</label>
                    <div className="col-xl-12 col-md-12 col-12">
                                            <textarea className="form-control" id="inputContact6" row="3"
                                                      placeholder="Some nice Street, 1234" onChange={adressHandler}
                                                      value={enteredAdress}
                                            ></textarea>
                    </div>
                </div>
            </Col>
            <Col lg='6'>
                <FormGroup>
                    <label>Telefon</label>
                    <Input type="number" placeholder="telefon" value={enteredPhone} onChange={phoneHandler}/>
                </FormGroup>
                <FormGroup>
                    <label>Fax</label>
                    <Input type="number" placeholder="fax" value={enteredFax} onChange={faxHandler}/>
                </FormGroup>
                <FormGroup>
                    <label>Email</label>
                    <Input type="email" placeholder="@email" value={enteredEmail} onChange={emailHandler}/>
                </FormGroup>
                <FormGroup>
                    <label>Banca</label>
                    <Input type="text" placeholder="banca"  value={enteredBank} onChange={bankHandler}/>
                </FormGroup>
                <FormGroup>
                    <label>IBAN</label>
                    <Input type="text" placeholder="iban" value={enteredIban} onChange={ibanHandler}/>
                </FormGroup>


                {/*<button className="btn btn-sm btn-secondary" type="submit">Submit</button>*/}
                <CardFooter>
                    <div className="checkbox c-checkbox" style={{padding: "1rem"}}>
                        <label>
                            <Input type="checkbox" defaultChecked=""/>
                            <span className="fa fa-times"></span>Check me out</label>
                    </div>
                    <button className="btn btn-sm btn-secondary" type="submit">Submit</button>
                </CardFooter>
            </Col>
        </Row>


    </form>


}


export default Test1;

// const style ={
//     backgroundColor: "$primary",
//     padding: ".5rem",
// }
// const change =()=>{
//     // console.log('clicked')
// }
// return <div className="col-md-6" style={style} key={props.id}>
//     <div className="checkbox c-checkbox">
//         <label className='lucrare' onClick={props.click}>
//             <Input type="checkbox" defaultChecked/>
//             <span className="fa fa-check"></span>{props.job}</label>
//     </div>
// </div>
