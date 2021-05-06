import ContentWrapper from "../../Layout/ContentWrapper";
import StatisticiTop from "./StatisticiTop";
import StatisticiInfo from "./StatisticiInfo";
import StatisticiDrop from "./StatisticiDrop";

import './Statistici.scss'

const StatisticiGenerale =()=>{
    let title = 'Statistici generale'

    return <ContentWrapper>

        <StatisticiTop title={title} />
        <StatisticiInfo />
        <StatisticiDrop />
    </ContentWrapper>
}
export default StatisticiGenerale;
