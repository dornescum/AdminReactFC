import {Card, CardBody, Col} from "reactstrap";
// import ContentWrapper from "../Layout/ContentWrapper";

const MesajeClienti = (props)=>{
    return  <Card>
        <CardBody>
            <fieldset>
                <div className="form-group row" >
                    <label className="col-md-2 col-form-label">{props.id} {props.name} {props.date}</label>
                    <Col md={ 10 }>
                        <Card body>
                            <textarea rows="5" className="form-control note-editor" defaultValue={props.body}></textarea>
                        </Card>

                    </Col>
                </div>
            </fieldset>
        </CardBody>
    </Card>
}

export default MesajeClienti;
