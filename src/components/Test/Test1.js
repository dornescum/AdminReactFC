import React from "react";
import {Input} from "reactstrap";
import '../TipuriLucrari/tipuri-lucrari.scss'

const Test1 =(props)=>{
    const style ={
        backgroundColor: "$primary",
        padding: ".5rem",
    }
const change =()=>{
    // console.log('clicked')
}


    return <div className="col-md-6" style={style} key={props.id}>
        <div className="checkbox c-checkbox">
            <label className='lucrare' onClick={props.click}>
                <Input type="checkbox" defaultChecked/>
                <span className="fa fa-check"></span>{props.job}</label>
        </div>
    </div>
}
export default Test1;
