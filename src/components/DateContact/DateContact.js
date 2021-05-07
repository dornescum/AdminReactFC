import PaginationModel from "../ContactMesaje/PaginationModel";
import DateContactTop from "./DateContactTop";
import DateContactTable from "./DateContactTable";
import DateInfo from "./DateInfo";
import ContentWrapper from "../Layout/ContentWrapper";


const DateContact =() =>{
    return <ContentWrapper>
        <DateContactTop />
        <DateInfo />
        <DateContactTable />
        <PaginationModel />
    </ContentWrapper>
}
export default DateContact;
