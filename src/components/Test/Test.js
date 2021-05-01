import React from 'react';
import ContentWrapper from '../Layout/ContentWrapper';
import {Row, Col, Input, Card, CardHeader, CardBody, CardFooter, CustomInput, FormGroup} from 'reactstrap';
import Test1 from "./Test1";

const stopDefault = (e) => {
    e.preventDefault();
}

const Test = () => {


    return <ContentWrapper>

        <div className="content-heading">
            <div>Date fiscale
                <p className='font-para-title'>Actualizati datele fiscale ale firmei / PFA. Sunt necesare in
                    procesul de facturare.</p>
            </div>
        </div>
        <Card>
            <CardBody>
                <Test1 />
            </CardBody>
        </Card>

    </ContentWrapper>


}

export default Test;

// const lucrari = [
//     {job: 'cadastru și intabulare apartament', id: 1},
//     {job: 'cadastru și intabulare teren extravilan', id: 2},
//     {job: 'actualizare / rectificare cadastru', id: 3},
//     {job: 'dezmembrare / parcelare / lotizare teren extravilan', id: 4},
//     {job: 'alipire teren extravilan', id: 5},
//     {job: 'plan topografic (de situație)', id: 6},
//     {job: 'scoaterea din circuitul agricol', id: 7},
//     {job: 'alt tip de lucrare', id: 8},
//     {job: 'cadastru și intabulare teren intravilan', id: 9},
//     {job: 'cadastru și intabulare teren cu construcție', id: 10},
//     {job: 'dezmembrare / parcelare / lotizare teren intravilan', id: 11},
//     {job: 'alipire teren intravilan', id: 12},
//     {job: 'alipire unitati individuale (apartamente)', id: 13},
//     {job: 'trasare / înțărușare teren / construcție', id: 14},
//     {job: 'aviz tehnic OCPI', id: 15},
//
// ]
// const changeColor =()=>{
//     // const color = {backgroundColor: 'red', fontSize: '44'}
//     // return color
//     console.log('click')
// }

{/*<FormGroup row className='formular-lucrari'>*/}
{/*    {lucrari.map((item, id) => {*/}
{/*        return <Test1 job={item.job} key={item.id} click={changeColor}/>*/}
{/*    })}*/}
{/*    <div className="col-12 btn-lucrari">*/}
{/*        <div className="ml-auto">*/}
{/*            <button type="submit" className="btn btn-primary">*/}
{/*                <span className="btn-primary"><i className="fa fa-save"> </i></span> Salvare*/}
{/*            </button>*/}
{/*        </div>*/}
{/*    </div>*/}
{/*</FormGroup>*/}
