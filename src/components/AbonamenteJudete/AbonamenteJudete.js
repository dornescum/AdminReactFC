import AbonamenteJudetTop from "./AbonamenteJudetTop";
import AbonamenteInfo from "./AbonamenteInfo";
import ContentWrapper from "../Layout/ContentWrapper";
import AbonamenteJudetTable from "./AbonamenteJudetTable";

import '../IstoricAbonamente/IstoricAbonamente.scss'

const AbonamenteJudete = () => {
    return <ContentWrapper>
        <AbonamenteJudetTop/>
        <AbonamenteInfo/>
        <AbonamenteJudetTable />
    </ContentWrapper>
}
export default AbonamenteJudete;
