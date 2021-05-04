import React from 'react';
import ContentWrapper from '../Layout/ContentWrapper';
import {Row, Col, Input, Card, CardHeader, CardBody, CardFooter, CustomInput, FormGroup} from 'reactstrap';
import DateGenForm from "./DateGenForm";
import DateGenTop from "./DateGenTop";

import '../DateGen/date-gen.scss';

const DateGen = () => {
    return <ContentWrapper>
                 <DateGenTop />
                 <Card>
            <CardBody>
                <DateGenForm/>
            </CardBody>
        </Card>
             </ContentWrapper>
}

export default DateGen;

