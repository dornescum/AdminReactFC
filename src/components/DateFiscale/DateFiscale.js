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

class DateFiscale extends Component {

    state = {
        dropdownOpen: false,
        splitButtonOpen: false,
        // errors: {}

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

    // formValidation = () => {
    //     const {username} = this.state;
    //     let isValid = true;
    //     const errors = {};
    //     if (username.trim().length < 6) {
    //         errors.userNameLength = 'too short'
    //         isValid = false;
    //     }
    //     if (!username.includes('$ ')) {
    //         errors.userName$ = " must have $"
    //         isValid = false;
    //     }
    //     this.setState({errors})
    //     return isValid;
    // }

    onSubmit = e => {
        e.preventDefault();
        // console.log(this.serialize);
        // console.log(e.target[0].value)
        // this.setState({email: e.target.value});
        // if (e.target.value === ""){
        //     console.log('error')
        // } else {
        //     console.log('Form submitted..');
        // }
        // console.log(e.target.value)
        // const isValid = this.formValidation();
    }
    // ==================
    // minReq = (e) => {
    //     if (e.length < 3) {
    //         console.log('error')
    //     }
    //     console.log(e.target.value)
    //
    // }
    // onChange = (e) => {
    //     this.setState({[e.target.name]: e.target.value})
    // }

    render() {
        // const {username, errors} = this.state;
        return (
            <ContentWrapper>
                <div className="content-heading">
                    <div>Date fiscale
                        <p className='font-para-title'>Actualizati datele fiscale ale firmei / PFA. Sunt necesare in
                            procesul de facturare.</p>
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

                                    <FormGroup>
                                        <label>Nume *</label>
                                        <Input type="text" name='username' placeholder="nume"
                                               />
                                    </FormGroup>
                                    <FormGroup>
                                        <label>CUI *</label>
                                        <Input type="text" placeholder="cui"/>
                                    </FormGroup>
                                    <FormGroup>
                                        <label>Nr Registru Comert *</label>
                                        <Input type="number" placeholder="nr"/>
                                    </FormGroup>
                                    {/*================*/}
                                    <fieldset style={{padding: "0", marginBottom: "10"}}>
                                        <FormGroup row>
                                            <label className="col-md-12 col-form-label">Judet *</label>
                                            <div className="col-md-12">
                                                <select defaultValue="" className="custom-select custom-select-sm">
                                                    <option>Alba</option>
                                                    <option defaultValue="1">Arad</option>
                                                    <option defaultValue="1">Arges</option>
                                                </select>
                                            </div>
                                        </FormGroup>
                                    </fieldset>
                                    {/*================*/}
                                    <FormGroup>
                                        <label>Localitate *</label>
                                        <Input type="text" placeholder="localitate"/>
                                    </FormGroup>

                                    {/*==============*/}
                                    <div className="form-group row">
                                        <label className="col-md-3 col-4 col-form-label " htmlFor="inputContact6">Adresa
                                            sediu social *</label>
                                        <div className="col-xl-12 col-md-12 col-12">
                                            <textarea className="form-control" id="inputContact6" row="3"
                                                      placeholder="Some nice Street, 1234"></textarea>
                                        </div>
                                    </div>
                                    {/*================*/}
                                    {/*<button className="btn btn-sm btn-secondary" type="submit">Submit</button>*/}

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
                                <FormGroup>
                                    <label>Telefon</label>
                                    <Input type="number" placeholder="telefon"/>
                                </FormGroup>
                                <FormGroup>
                                    <label>Fax</label>
                                    <Input type="number" placeholder="fax"/>
                                </FormGroup>
                                <FormGroup>
                                    <label>Email</label>
                                    <Input type="email" placeholder="@email"/>
                                </FormGroup>
                                <FormGroup>
                                    <label>Banca</label>
                                    <Input type="text" placeholder="banca"/>
                                </FormGroup>
                                <FormGroup>
                                    <label>IBAN</label>
                                    <Input type="text" placeholder="iban"/>
                                </FormGroup>

                            </CardBody>
                            <CardFooter>
                                <div className="checkbox c-checkbox" style={{padding: "1rem"}}>
                                    <label>
                                        <Input type="checkbox" defaultChecked=""/>
                                        <span className="fa fa-times"></span>Check me out</label>
                                </div>
                                <button className="btn btn-sm btn-secondary" type="submit" onClick={this.onSubmit}>Submit</button>
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

export default DateFiscale;
