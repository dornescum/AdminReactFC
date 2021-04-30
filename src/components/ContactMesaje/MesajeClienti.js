import {Card, CardBody, Col} from "reactstrap";
// import ContentWrapper from "../Layout/ContentWrapper";

const MesajeClienti = (props) => {
    return   <div className="form-group row" >
        <label className="col-md-2 col-form-label">{props.id} {props.name} {props.date}</label>
                 <Col md={12}>
            <Card body>
                <textarea rows="5" className="form-control" readOnly defaultValue={props.message}></textarea>
            </Card>

                </Col>
         </div>


}

export default MesajeClienti;
