import IstoricTable from "./IstoricTable";
import ContentWrapper from "../Layout/ContentWrapper";

import './IstoricAbonamente.scss'

const IstoricAbonamente =()=>{

    return <ContentWrapper>
        <div className="content-heading">
            <h3 style={{margin: 0}}>Istoric abonamente</h3>
        </div>

           <IstoricTable />



    </ContentWrapper>
}
export default IstoricAbonamente;
