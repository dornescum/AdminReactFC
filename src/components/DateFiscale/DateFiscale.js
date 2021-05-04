import React from 'react';
import ContentWrapper from '../Layout/ContentWrapper';
import {Row, Col, Input, Card, CardHeader, CardBody, CardFooter, CustomInput, FormGroup} from 'reactstrap';
import DateFiscaleForm from "./DateFiscaleForm";

const stopDefault = (e) => {
    e.preventDefault();
}

const DateFiscale = () => {


    return <ContentWrapper>

        <div className="content-heading">
            <div>Date fiscale
                <p className='font-para-title'>Actualizati datele fiscale ale firmei / PFA. Sunt necesare in
                    procesul de facturare.</p>
            </div>
        </div>
        <Card>
            <CardBody>
                <DateFiscaleForm />
            </CardBody>
        </Card>

    </ContentWrapper>


}

export default DateFiscale;
