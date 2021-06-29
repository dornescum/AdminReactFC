import {Card, Col} from "reactstrap";

const MesajeClienti = (props) => {
    return <div className="form-group row mesaje-subtitle">
        <div className='flex-sb'>
            <p className=" col-form-label info-message bold">{props.id}. {props.first_name} {props.last_name}</p>
            <p className=" col-form-label info-message">{props.date} </p>
        </div>
        <Col md={12}>
            <Card body>
                <textarea rows="5" className="form-control" readOnly defaultValue={props.message}></textarea>
            </Card>
        </Col>
    </div>


}

export default MesajeClienti;
