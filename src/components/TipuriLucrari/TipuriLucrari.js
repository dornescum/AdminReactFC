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
import '../TipuriLucrari/tipuri-lucrari.scss'


class TipuriLucrari extends Component {


    render() {
        // const lucrari = ['lucrarea1', "lucrarea2", 'lucrarea5', 'lucrarea4', 'lucrarea12', 'lucrarea14', 'lucrarea15', 'lucrarea16', 'lucrarea17', 'lucrarea18',]
        const lucrari =[
            {job: 'cadastru și intabulare apartament', id: 1},
            {job: 'cadastru și intabulare teren extravilan\n', id: 2},
            {job: 'actualizare / rectificare cadastru\n', id: 3},
            {job: 'dezmembrare / parcelare / lotizare teren extravilan\n', id: 4},
            {job: 'alipire teren extravilan\n', id: 5},
            {job: 'plan topografic (de situație)\n', id: 6},
            {job: 'scoaterea din circuitul agricol\n', id: 7},
            {job: 'alt tip de lucrare\n', id: 8},
            {job: 'cadastru și intabulare teren intravilan\n', id: 9},
            {job: 'cadastru și intabulare teren cu construcție\n', id: 10},
            {job: 'dezmembrare / parcelare / lotizare teren intravilan\n', id: 11},
            {job: 'alipire teren intravilan\n', id: 12},
            {job: 'alipire unitati individuale (apartamente)\n', id: 13},
            {job: 'trasare / înțărușare teren / construcție\n', id: 14},
            {job: 'aviz tehnic OCPI', id: 15},

        ]

        return (
            <ContentWrapper>
                <div className="content-heading">
                    <div>Tipuri lucrari</div>
                </div>

                <Card>
                    <CardBody>
                        <FormGroup row className='formular-lucrari'>
                            {lucrari.map((item, id) => {
                                return <div className="col-md-6 lucrari-individuale" key={item.id}>
                                    <div className="checkbox c-checkbox">
                                        <label className='lucrare'>
                                            <Input type="checkbox" defaultChecked/>
                                            <span className="fa fa-check"></span>{item.job}</label>
                                    </div>
                                </div>
                            })}
                            <div className="col-12 btn-lucrari">
                                <div className="ml-auto">
                                    <button type="submit" className="btn btn-primary">
                                        <span className="btn-primary"><i className="fa fa-save"> </i></span> Salvare
                                    </button>
                                </div>
                            </div>
                        </FormGroup>
                    </CardBody>
                </Card>
            </ContentWrapper>
        );
    }

}

export default TipuriLucrari;
