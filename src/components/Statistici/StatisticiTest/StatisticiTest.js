import StatisticiTop from "../StatisticiGenerale/StatisticiTop";
import StatisticiInfo from "../StatisticiGenerale/StatisticiInfo";
import StatissticiMainGraf from "./StatissticiMainGraf";
import ContentWrapper from "../../Layout/ContentWrapper";

import '../StatisticiGenerale/Statistici.scss'

const StatisticiTest =()=>{
    let title= 'test'

    return <ContentWrapper>
        <StatisticiTop title={title}/>
        <StatisticiInfo />
        <StatissticiMainGraf />
    </ContentWrapper>

}
export default StatisticiTest;
