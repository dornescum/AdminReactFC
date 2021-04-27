import React, {Component} from 'react';
import ContentWrapper from '../Layout/ContentWrapper';
import {Row, Col, Input, Card, CardHeader, CardBody, CardFooter, CustomInput, FormGroup} from 'reactstrap';
import {FontAwesome} from '@fortawesome/fontawesome-free';
// import {faSave} from '@fortawesome/fontawesome-free'

import styles from './date-generale.scss';

// import FormValidator from './FormValidator.js';

/**
 * Validation flow using controlled components
 *
 * 1- User type on input
 * 2- onChange event trigger validation
 * 3- Validate methods are listed using "data-validate"
 *    attribute. Content must be an array in json format.
 * 4- The validation returns an object with format {[input name]: status}
 *    where status is an array of boolean per each method
 * 5- Methods that requires an argument, read the 'data-param' attribute
 * 6- Similarly, onSubmit event does a bulk validation on all form elements
 */

const stopDefault = (e) => {
    e.preventDefault();
}

class DateGenerale extends Component {

    state = {
        /* Group each form state in an object.
           Property name MUST match the form name */
        formRegister: {
            email: '',
            password: '',
            password2: '',
            terms: false
        },
        formLogin: {
            email: '',
            password: ''
        },
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
        },
        date: {
            name: "",
            cod: "",
            description: "",
            adress: "",
            telefon: "",
            fax: "",
            website: "",
            email: "",
            category: "",
            series: "",
            logo: "",
            img: ""
        }
    }

    /**
     * Validate input using onChange event
     * @param  {String} formName The name of the form in the state object
     * @return {Function} a function used for the event
     */
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

    onSubmit = e => {
        const form = e.target;
        const inputs = [...form.elements].filter(i => ['INPUT', 'SELECT'].includes(i.nodeName))

        const {errors, hasError} = FormValidator.bulkValidate(inputs)

        this.setState({
            [form.name]: {
                ...this.state[form.name],
                errors
            }
        });

        console.log(hasError ? 'Form has errors. Check!' : 'Form Submitted!')

        e.preventDefault()
    }

    /* Simplify error check */
    hasError = (formName, inputName, method) => {
        return this.state[formName] &&
            this.state[formName].errors &&
            this.state[formName].errors[inputName] &&
            this.state[formName].errors[inputName][method]
    }


    render() {
        return (
            <ContentWrapper>
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
                { /* START row */}
                <Row>
                    <Col lg={6}>
                        <form onSubmit={this.onSubmit} name="formRegister" action="">
                            { /* START card */}
                            <Card className="card-default">
                                <CardHeader>
                                    {/*<div className="card-title">Tip autorizat *</div>*/}
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

                                </CardHeader>

                                <CardBody>
                                    {/*nume*/}
                                    <div className="form-group">
                                        <label className="col-form-label">Nume *</label>
                                        <Input type="email"
                                               name="email"
                                               invalid={this.hasError('date', 'name', 'required') || this.hasError('date', 'name', 'required')}
                                               onChange={this.validateOnChange}
                                               data-validate='["required", "name"]'
                                               value={this.state.date.name}/>
                                        {this.hasError('date', 'name', 'required') &&
                                        <span className="invalid-feedback">Field is required</span>}
                                        {this.hasError('date', 'name', 'email') &&
                                        <span className="invalid-feedback">Field must be valid email</span>}


                                    </div>
                                    {/*cod*/}
                                    <div className="form-group">
                                        <label className="col-form-label">Cod *</label>
                                        <Input type="text"
                                               id="id-password"
                                               name="password"
                                               invalid={this.hasError('formRegister', 'password', 'required')}
                                               onChange={this.validateOnChange}
                                               data-validate='["required"]'
                                               value={this.state.formRegister.password}
                                        />
                                        <span className="invalid-feedback">Field is required</span>
                                    </div>

                                    {/*==============*/}
                                    <div className="form-group row">
                                        <label className="col-md-3 col-4 col-form-label " htmlFor="inputContact6">Descriere
                                            *</label>
                                        <div className="col-xl-12 col-md-12 col-12">
                                            <textarea className="form-control" id="inputContact6" row="3"
                                                      defaultValue="Some nice Street, 1234"></textarea>
                                        </div>
                                    </div>
                                    {/*================*/}

                                    {/*==============*/}
                                    <div className="form-group row">
                                        <label className="col-md-3 col-4 col-form-label " htmlFor="inputContact6">Adresa
                                            *</label>
                                        <div className="col-xl-12 col-md-12 col-12">
                                            <textarea className="form-control" id="inputContact6" row="3"
                                                      defaultValue="Some nice Street, 1234"></textarea>
                                        </div>
                                    </div>
                                    {/*================*/}

                                    <div className="form-group">
                                        <label className="col-form-label">Telefon</label>
                                        <Input type="email"
                                               name="email"
                                               invalid={this.hasError('formLogin', 'email', 'required') || this.hasError('formLogin', 'email', 'email')}
                                               onChange={this.validateOnChange}
                                               data-validate='["required", "email"]'
                                               value={this.state.formLogin.email}/>
                                        {this.hasError('formLogin', 'email', 'required') &&
                                        <span className="invalid-feedback">Field is required</span>}
                                        {this.hasError('formLogin', 'email', 'email') &&
                                        <span className="invalid-feedback">Field must be valid email</span>}
                                    </div>
                                    {/*<div className="required">* Required fields</div>*/}


                                    {/*fax*/}
                                    <div className="form-group">
                                        <label className="col-form-label">Fax</label>
                                        <Input type="text"
                                               id="id-password"
                                               name="password"
                                               invalid={this.hasError('formLogin', 'password', 'required')}
                                               onChange={this.validateOnChange}
                                               data-validate='["required"]'
                                               value={this.state.formLogin.password}
                                        />
                                        <span className="invalid-feedback">Field is required</span>
                                    </div>
                                    {/*website*/}
                                    <div className="form-group">
                                        <label className="col-form-label">Website</label>
                                        <Input type="text"
                                               id="id-password"
                                               name="password"
                                               invalid={this.hasError('formLogin', 'password', 'required')}
                                               onChange={this.validateOnChange}
                                               data-validate='["required"]'
                                               value={this.state.formLogin.password}
                                        />
                                        <span className="invalid-feedback">Field is required</span>
                                    </div>
                                    {/*categoria/ clasa*/}
                                    <div className="form-group">
                                        <label className="col-form-label">Categoria / Clasa</label>
                                        <Input type="text"
                                               id="id-password"
                                               name="password"
                                               invalid={this.hasError('formLogin', 'password', 'required')}
                                               onChange={this.validateOnChange}
                                               data-validate='["required"]'
                                               value={this.state.formLogin.password}
                                        />
                                        <span className="invalid-feedback">Field is required</span>
                                    </div>
                                    {/*seria*/}
                                    <div className="form-group">
                                        <label className="col-form-label">Seria</label>
                                        <Input type="text"
                                               id="id-password"
                                               name="password"
                                               invalid={this.hasError('formLogin', 'password', 'required')}
                                               onChange={this.validateOnChange}
                                               data-validate='["required"]'
                                               value={this.state.formLogin.password}
                                        />
                                        <span className="invalid-feedback">Field is required</span>
                                    </div>


                                </CardBody>

                            </Card>
                            { /* END card */}
                        </form>
                    </Col>
                    <Col lg={6}>
                        <form onSubmit={this.onSubmit} method="post" name="formLogin">
                            { /* START card */}
                            <Card className="card-default">
                                {/*<CardHeader>*/}
                                {/*    <div  className={`card-title`}>Firma</div>*/}
                                {/*</CardHeader>*/}
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
                                                        <button type="submit" className="btn btn-primary"
                                                                onClick={stopDefault}>Upload
                                                        </button>
                                                    </div>
                                                </div>
                                                <div className="col-3 col-sm-4">
                                                    <div className="ml-auto">
                                                        <button type="submit" className="btn btn-danger"
                                                                onClick={stopDefault}>Sterge
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
                                                        <button type="submit" className="btn btn-primary"
                                                                onClick={stopDefault}>Upload
                                                        </button>
                                                    </div>
                                                </div>
                                                <div className="col-6">
                                                    <div className="ml-auto">
                                                        <button type="submit" className="btn btn-danger"
                                                                onClick={stopDefault}>
                                                            Sterge
                                                        </button>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>


                                    {/*<div className="required">* Required fields</div>*/}
                                </CardBody>
                                {/*<CardFooter>*/}
                                {/*    <button type="submit" className="btn btn-primary">Login</button>*/}
                                {/*</CardFooter>*/}

                                <CardFooter>

                                    <div className="required" style={{paddingLeft: "1rem"}}>* campuri obligatorii</div>

                                    <div className="d-flex align-items-center">

                                        <CustomInput type="checkbox" id="terms"
                                                     name="terms"
                                                     label="Sunt de acord"
                                                     invalid={this.hasError('formRegister', 'terms', 'required')}
                                                     onChange={this.validateOnChange}
                                                     data-validate='["required"]'
                                                     checked={this.state.formRegister.terms}>
                                            <span className="invalid-feedback">Field is required</span>
                                        </CustomInput>

                                        <div className="ml-auto">
                                            <button type="submit" className="btn btn-primary"
                                                    onClick={stopDefault}>Salvare
                                            </button>
                                        </div>
                                    </div>
                                </CardFooter>

                            </Card>
                            { /* END card */}
                        </form>
                    </Col>
                </Row>
            </ContentWrapper>
        );
    }

}

export default DateGenerale;

