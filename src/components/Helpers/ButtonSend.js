import {Input} from "reactstrap";
import React from "react";
import './buttonSend.scss'

const ButtonSend=()=>{
    return   <div className="checkbox c-checkbox send-box" style={{padding: "1rem"}}>
        <label className='send-label'>
            <Input type="checkbox" defaultChecked=""/>
            <span className="fa fa-times"></span>Campuri obligatorii</label>
        <button className="btn btn-sm btn-primary" type="submit">Submit</button>
    </div>
};
export default ButtonSend;
