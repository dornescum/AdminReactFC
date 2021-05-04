import React, {useState} from "react";
import {CardFooter, Col, FormGroup, Input, Row, Card, CardBody, CardHeader} from "reactstrap";
import ButtonSend from "../Helpers/ButtonSend";


const DateGenForm = (props) => {
    const [enteredCompanyName, setEnteredCompanyName] = useState('');
    const [enteredCod, setEnteredCod] = useState('');
    const [enteredNr, setEnteredNr] = useState('');
    const [enteredCounty, setEnteredCounty] = useState('');
    const [enteredTown, setEnteredTown] = useState('');
    const [enteredAdresa, setEnteredAdresa] = useState('');
    const [enteredDesc, setEnteredDesc] = useState('');
    const [enteredPhone, setEnteredPhone] = useState('');
    const [enteredFax, setEnteredFax] = useState('');
    const [enteredWeb, setEnteredWeb] = useState('');
    const [enteredEmail, setEnteredEmail] = useState('');
    const [enteredIban, setEnteredIban] = useState('');
    const [error, setError] = useState();


    const nameHandler = (e) => {
        setEnteredCompanyName(e.target.value);
    }
    const codHandler = (e) => {
        setEnteredCod(e.target.value);
    }
    const descHandler = (e) => {
        setEnteredDesc(e.target.value);
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
    const adresaHandler = (e) => {
        setEnteredAdresa(e.target.value);
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
    const webHandler = (e) => {
        setEnteredWeb(e.target.value);
    }
    // const ibanHandler = (e) => {
    //     setEnteredIban(e.target.value);
    // }

    const inputValue = e => {
        e.preventDefault();
        if (enteredCompanyName.trim().length < 3) {
            setError('min 3')

        }
        if (enteredCompanyName.trim().length > 20) {
            setError('too much')
        }


        const data = {
            name: enteredCompanyName,
            cod: enteredCod,
            description: enteredDesc,
            adresa: enteredAdresa,
            web: enteredWeb,
            county: enteredCounty,
            town: enteredTown,
            phone: enteredPhone,
            email: enteredEmail,
            fax: enteredFax,
        }

        setEnteredCompanyName('');
        setEnteredCod('');
        setEnteredNr('');
        setEnteredCounty('');
        setEnteredTown('');
        setEnteredAdresa('');
        setEnteredPhone('');
        setEnteredFax('');
        setEnteredEmail('');
        console.log(data)
    }


    return <form action="" onSubmit={inputValue} className='date-gen'>
        <Row>
            <Col lg='8' md='6'>
                <div className='tip-autorizat'>
                    <div className='font-para-title'>
                        <p>Tip autorizat *</p>
                    </div>
                    <div>
                        <div className="ml-auto">
                            <button type="submit" className="btn btn-primary">
                                <span className="btn-primary"><i className="fa fa-building"> </i></span> Firma
                            </button>
                        </div>
                    </div>
                </div>
                <FormGroup>
                    <Row>
                        <Col lg='6'>
                            <label>Nume *</label>
                            <Input type="text" placeholder="nume" value={enteredCompanyName} onChange={nameHandler}/>
                        </Col>
                        <Col lg='6'>
                            <label>Cod *</label>
                            <Input type="text" placeholder="cod" value={enteredCod} onChange={codHandler} />
                        </Col>
                    </Row>
                </FormGroup>
                <div className="form-group row">
                    <label className="col-md-3 col-4 col-form-label " htmlFor="inputContact6">Descriere *</label>
                    <div className="col-xl-12 col-md-12 col-12">
                                            <textarea className="form-control" id="inputContact6" row="3"
                                                      placeholder="Descriere" onChange={descHandler}
                                                      value={enteredDesc}
                                            ></textarea>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-md-3 col-4 col-form-label " htmlFor="inputContact6">Adresa *</label>
                    <div className="col-xl-12 col-md-12 col-12">
                                            <textarea className="form-control" id="inputContact6" row="3"
                                                      placeholder="Adresa" onChange={adresaHandler}
                                                      value={enteredAdresa}
                                            ></textarea>
                    </div>
                </div>
                <FormGroup>
                    <Row>
                        <Col lg='6'>
                            <label>Telefon</label>
                            <Input type="number" placeholder="telefon" value={enteredPhone} onChange={phoneHandler}/>
                        </Col>
                       <Col lg='6'>
                           <label>Fax</label>
                           <Input type="number" placeholder="fax"  value={enteredFax} onChange={faxHandler}/>
                       </Col>
                    </Row>
                </FormGroup>
                 <FormGroup>
                     <Row>
                         <Col lg='6'>
                             <label>Website</label>
                             <Input type="number" placeholder="Website"  value={enteredWeb} onChange={webHandler}/>
                         </Col>
                         <Col lg='6'>
                             <label>Email</label>
                             <Input type="email" placeholder="@email"  value={enteredEmail} onChange={emailHandler}/>
                         </Col>
                     </Row>
                </FormGroup>
                <FormGroup>
                    <Row>
                        <Col lg='6'>
                            <label>Categoria / Clasa</label>
                            <Input type="email" placeholder="@email" />
                        </Col>
                        <Col lg='6'>
                            <label>Seria</label>
                            <Input type="email" placeholder="@email" />
                        </Col>
                    </Row>
                </FormGroup>
            </Col>
            <Col lg='4' md='6'>
                <Card className='date-gen'>
                    <CardHeader>
                        <div className='date-title-logo'>Logo listare 340px / 140px</div>
                    </CardHeader>
                    <CardBody className='date-card'>
                        <img className="img-fluid ie-fix-flex date-logo" src="img/bg3.jpg" alt="Demo"/>
                    </CardBody>
                </Card>
                <Card>
                    <CardHeader>
                        <div className='date-title-logo'>Logo listare 340px / 290px</div>
                    </CardHeader>
                    <CardBody className='date-card'>
                        <img className="img-fluid ie-fix-flex date-main" src="img/bg1.jpg" alt="Demo"/>
                    </CardBody>
                </Card>

                <h1 style={{color: 'red'}}>{error}</h1>
                {/*<button className="btn btn-sm btn-secondary" type="submit">Submit</button>*/}
                <CardFooter>
                    {/*<div className="checkbox c-checkbox" style={{padding: "1rem"}}>*/}
                    {/*    <label>*/}
                    {/*        <Input type="checkbox" defaultChecked=""/>*/}
                    {/*        <span className="fa fa-times"></span>Check me out</label>*/}
                    {/*</div>*/}
                    {/*<button className="btn btn-sm btn-secondary" type="submit">Submit</button>*/}
                    <ButtonSend />
                </CardFooter>
            </Col>
        </Row>


    </form>


}


export default DateGenForm;

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
