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
    DropdownItem, CardFooter, CardColumns, CustomInput
} from 'reactstrap';

class GalerieFoto extends Component {

    // state = {
    //     dropdownOpen: false,
    //     splitButtonOpen: false,
    //     // errors: {}
    // }
    //
    // toggleDropDown = () => {
    //     this.setState({
    //         dropdownOpen: !this.state.dropdownOpen
    //     });
    // }
    //
    // toggleSplit = () => {
    //     this.setState({
    //         splitButtonOpen: !this.state.splitButtonOpen
    //     });
    // }
    //
    // onSubmit = e => {
    //     e.preventDefault();
    //     console.log('Form submitted..');
    // }

    render() {
        return (
            <ContentWrapper>
                <div className="content-heading">
                    <div>Galerie Foto</div>
                </div>
                <Col xl="12">
                    <CardColumns>

                        <Card>
                            <a href="">
                                <img className="img-fluid" src="img/bg5.jpg" alt="Demo"/>
                            </a>
                            <CardBody>
                                <hr className="d-print-none"/>
                                <div className="clearfix">
                                    <button className="btn btn-primary float-right" type="button">Delete</button>
                                </div>
                            </CardBody>
                        </Card>
                        <Card>
                            <a href="">
                                <img className="img-fluid" src="img/bg5.jpg" alt="Demo"/>
                            </a>
                            <CardBody>
                                <hr className="d-print-none"/>
                                <div className="clearfix">
                                    <button className="btn btn-primary float-right" type="button">Delete</button>
                                </div>
                            </CardBody>
                        </Card>
                        <Card>
                            <a href="">
                                <img className="img-fluid" src="img/bg5.jpg" alt="Demo"/>
                            </a>
                            <CardBody>
                                <hr className="d-print-none"/>
                                <div className="clearfix">
                                    <button className="btn btn-primary float-right" type="button">Delete</button>
                                </div>
                            </CardBody>
                        </Card>
                        <Card>
                            <a href="">
                                <img className="img-fluid" src="img/bg5.jpg" alt="Demo"/>
                            </a>
                            <CardBody>
                                <hr className="d-print-none"/>
                                <div className="clearfix">
                                    <button className="btn btn-primary float-right" type="button">Delete</button>
                                </div>
                            </CardBody>
                        </Card>
                        <Card>
                            <a href="">
                                <img className="img-fluid" src="img/bg5.jpg" alt="Demo"/>
                            </a>
                            <CardBody>
                                <hr className="d-print-none"/>
                                <div className="clearfix">
                                    <button className="btn btn-primary float-right" type="button">Delete</button>
                                </div>
                            </CardBody>
                        </Card>
                        <Card>
                            <a href="">
                                <img className="img-fluid" src="img/bg5.jpg" alt="Demo"/>
                            </a>
                            <CardBody>
                                <hr className="d-print-none"/>
                                <div className="clearfix">
                                    <button className="btn btn-primary float-right" type="button">Delete</button>
                                </div>
                            </CardBody>
                        </Card>
                        <Card>
                            <a href="">
                                <img className="img-fluid" src="img/bg5.jpg" alt="Demo"/>
                            </a>
                            <CardBody>
                                <hr className="d-print-none"/>
                                <div className="clearfix">
                                    <button className="btn btn-primary float-right" type="button">Delete</button>
                                </div>
                            </CardBody>
                        </Card>
                        <Card>
                            <a href="">
                                <img className="img-fluid" src="img/bg5.jpg" alt="Demo"/>
                            </a>
                            <CardBody>
                                <hr className="d-print-none"/>
                                <div className="clearfix">
                                    <button className="btn btn-primary float-right" type="button">Delete</button>
                                </div>
                            </CardBody>
                        </Card>
                        <Card>
                            <a href="">
                                <img className="img-fluid" src="img/bg5.jpg" alt="Demo"/>
                            </a>
                            <CardBody>
                                <hr className="d-print-none"/>
                                <div className="clearfix">
                                    <button className="btn btn-primary float-right" type="button">Delete</button>
                                </div>
                            </CardBody>
                        </Card>


                    </CardColumns>
                    <div className="col-md-4 mb-sm-3 mb-md-2- mb-lg-1">
                        <CustomInput type="file" id="exampleCustomFileBrowser" placeholder='test' />
                    </div>
                </Col>

            </ContentWrapper>
        );
    }

}

export default GalerieFoto;
