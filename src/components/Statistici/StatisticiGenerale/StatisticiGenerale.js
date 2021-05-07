import ContentWrapper from "../../Layout/ContentWrapper";
import StatisticiTop from "./StatisticiTop";
import StatisticiInfo from "./StatisticiInfo";
import StatisticiDrop from "./StatisticiDrop";
import StatisticiGrapf from "./StatisticiGrapf";
import StatisticiTable from "./StatisticiTable";

import './Statistici.scss'

const StatisticiGenerale =()=>{
    let title = 'Statistici generale'

    return <ContentWrapper>

        <StatisticiTop title={title} />
        <StatisticiInfo />
        <StatisticiDrop />
        <StatisticiGrapf />
        <StatisticiTable />
    </ContentWrapper>
}
export default StatisticiGenerale;
