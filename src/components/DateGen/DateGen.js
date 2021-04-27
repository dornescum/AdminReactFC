import React, {Component} from 'react';
import ContentWrapper from '../Layout/ContentWrapper';
import {
    Row,
    Col,
    Card,
    CardHeader,
    CardBody,
    FormGroup,
    FormFeedback,
    FormText,
    Label,
    InputGroup,
    InputGroupAddon,
    InputGroupButtonDropdown,
    InputGroupText,
    Input,
    Button,
    DropdownToggle,
    DropdownMenu,
    DropdownItem, CardFooter
} from 'reactstrap';
import FormValidator from "../Forms/FormValidator";

class DateGenerale extends Component {

    state = {
        dropdownOpen: false,
        splitButtonOpen: false,
        // ================
        formDemo: {
            text: '',
            email: '',
            number: '',
            integer: '',
            alphanum: '',
            url: '',
            password: '',
            password2: '',
            minlength: '',
            maxlength: '',
            length: '',
            minval: '',
            maxval: '',
            list: ''
        }
    }

    toggleDropDown = () => {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    toggleSplit = () => {
        this.setState({
            splitButtonOpen: !this.state.splitButtonOpen
        });
    }

    onSubmit = e => {
        console.log('Form submitted..');
        e.preventDefault();
    }
    // ==================
    /* Simplify error check */
    hasError = (formName, inputName, method) => {
        return this.state[formName] &&
            this.state[formName].errors &&
            this.state[formName].errors[inputName] &&
            this.state[formName].errors[inputName][method]
    }

    // ==================
    validateOnChange = event => {
        const input = event.target;
        const form = input.form
        const value = input.type === 'checkbox' ? input.checked : input.value;

        const result = FormValidator.validate(input);

        this.setState({
            [form.name]: {
                ...this.state[form.name],
                [input.name]: value,
                errors: {
                    ...this.state[form.name].errors,
                    [input.name]: result
                }
            }
        });

    }

// =================

    render() {

        return (
            <ContentWrapper>
                {/*<div className="content-heading">*/}
                {/*    <div>Form Elements*/}
                {/*        <small>Standard and custom elements for any form</small>*/}
                {/*    </div>*/}
                {/*</div>*/}
                <div className="content-heading">
                    <div>Date generale
                        <p className='font-para-title'>Modificati datele firmei / PFA, astfel incat potentialii clienti
                            sa-si formeze o imagine cat mai corecta despre dumneavoastra.</p>
                        <p className='font-para-title'>Luati in considerare faptul ca majoritatea campurilor vor fi
                            incluse ca si criterii de selectie in formularul <a href="#">Cauta firma</a> . Deci, este
                            important ca gradul de completare al informatiilor sa fie cat mai ridicat.
                        </p>
                    </div>
                </div>
                {/* START row */}
                <div className="row">
                    <div className="col-md-6">
                        {/* START card */}
                        <Card className="card-default">
                            {/*<CardHeader>Stacked form</CardHeader>*/}
                            <CardBody>
                                <form onSubmit={this.onSubmit}>
                                    <fieldset style={{padding: "0", marginBottom: "0"}}>
                                        <FormGroup row>
                                            <label className="col-md-12 col-form-label">Tip autorizat *</label>
                                            <div className="col-md-12">
                                                <select defaultValue="" className="custom-select custom-select-sm">
                                                    <option>Firma</option>
                                                    <option defaultValue="1">PFA</option>
                                                </select>
                                            </div>
                                        </FormGroup>
                                    </fieldset>
                                    <FormGroup>
                                        <label>Nume</label>
                                        <Input type="text" placeholder="nume"/>
                                    </FormGroup>
                                    <FormGroup>
                                        <label>Cod *</label>
                                        <Input type="text" placeholder="cod"/>
                                    </FormGroup>
                                    {/*<div className="checkbox c-checkbox">*/}
                                    {/*    <label>*/}
                                    {/*        <Input type="checkbox" defaultChecked=""/>*/}
                                    {/*        <span className="fa fa-times"></span>Check me out</label>*/}
                                    {/*</div>*/}
                                    {/*<button className="btn btn-sm btn-secondary" type="submit">Submit</button>*/}

                                    {/*==============*/}
                                    <div className="form-group row">
                                        <label className="col-md-3 col-4 col-form-label " htmlFor="inputContact6">Descriere
                                            *</label>
                                        <div className="col-xl-12 col-md-12 col-12">
                                            <textarea className="form-control" id="inputContact6" row="3"
                                                      placeholder="Some nice Street, 1234"></textarea>
                                        </div>
                                    </div>
                                    {/*================*/}


                                    {/*==============*/}
                                    <div className="form-group row">
                                        <label className="col-md-3 col-4 col-form-label " htmlFor="inputContact6">Adresa
                                            *</label>
                                        <div className="col-xl-12 col-md-12 col-12">
                                            <textarea className="form-control" id="inputContact6" row="3"
                                                      placeholder="Some nice Street, 1234"></textarea>
                                        </div>
                                    </div>
                                    {/*================*/}

                                    {/*====================*/}
                                    <FormGroup>
                                        <label>Telefon</label>
                                        <Input type="number" placeholder="telefon"/>
                                    </FormGroup>
                                    {/*====================*/}

                                    {/*====================*/}
                                    <FormGroup>
                                        <label>Fax</label>
                                        <Input type="number" placeholder="fax"/>
                                    </FormGroup>
                                    {/*====================*/}

                                    {/*====================*/}
                                    <FormGroup>
                                        <label>Website</label>
                                        <Input type="text" placeholder="website"/>
                                    </FormGroup>
                                    {/*====================*/}

                                    {/*====================*/}
                                    <FormGroup>
                                        <label>Categoria / Clasa </label>
                                        <Input type="text" placeholder="categoria / clasa"/>
                                    </FormGroup>
                                    {/*====================*/}

                                    {/*====================*/}
                                    <FormGroup>
                                        <label>Seria</label>
                                        <Input type="number" placeholder="seria"/>
                                    </FormGroup>
                                    {/*====================*/}


                                </form>
                            </CardBody>
                        </Card>
                        {/* END card */}
                    </div>
                    <div className="col-md-6">
                        {/* START card */}
                        <Card className="card-default">
                            {/*<CardHeader>Horizontal form</CardHeader>*/}
                            <CardBody>
                                {/*logo*/}
                                <div className="card">
                                    <CardHeader>
                                        <div className={`card-title`}>Logo listare 190px / 70px</div>
                                    </CardHeader>
                                    <img className="img-fluid ie-fix-flex" src="img/bg3.jpg" alt="Demo"
                                         style={{height: "20vh"}}/>
                                    <div className="card-body">
                                        <div className="row text-center">
                                            <div className="col-3 col-sm-4">
                                                <div className="ml-auto">
                                                    <button type="submit" className="btn btn-primary">Upload
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="col-3 col-sm-4">
                                                <div className="ml-auto">
                                                    <button type="submit" className="btn btn-danger">Sterge
                                                    </button>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                                {/*imagini*/}
                                <div className="card">
                                    <CardHeader>
                                        <div className={`card-title`}>Logo prezentare 250px / 250px</div>
                                    </CardHeader>
                                    <img className="img-fluid ie-fix-flex" src="img/bg1.jpg" alt="Demo"/>
                                    <div className="card-body">
                                        <div className="row text-center">
                                            <div className="col-6">
                                                <div className="ml-auto">
                                                    <button type="submit" className="btn btn-primary">Upload
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="ml-auto">
                                                    <button type="submit" className="btn btn-danger">
                                                        Sterge
                                                    </button>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </CardBody>
                            <CardFooter>
                                <div className="checkbox c-checkbox" style={{padding:"1rem"}}>
                                    <label>
                                        <Input type="checkbox" defaultChecked=""/>
                                        <span className="fa fa-times"></span>Check me out</label>
                                </div>
                                <button className="btn btn-sm btn-secondary" type="submit">Submit</button>
                            </CardFooter>
                        </Card>
                        {/* END card */}
                    </div>
                </div>
                {/* END row */}

            </ContentWrapper>
        );
    }

}

export default DateGenerale;
