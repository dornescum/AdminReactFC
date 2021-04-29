import React from 'react';
import ContentWrapper from '../Layout/ContentWrapper';
import {Row, Col, Input, Card, CardHeader, CardBody, CardFooter, CustomInput, FormGroup} from 'reactstrap';
import Test1 from "./Test1";

const stopDefault = (e) => {
    e.preventDefault();
}

const Test = () => {
    const lucrari = [
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
    const changeColor =()=>{
        const color = {backgroundColor: 'red', fontSize: '44'}
        return color
    }

    return <ContentWrapper>
        <Card>
            <CardBody>
                <FormGroup row className='formular-lucrari'>
                    {lucrari.map((item, id) => {
                        return <Test1 job={item.job} key={item.id} click={changeColor}/>
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


}

export default Test;

