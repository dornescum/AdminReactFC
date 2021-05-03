import PaginationModel from "../ContactMesaje/PaginationModel";
import DateContactTop from "./DateContactTop";
import DateContactTable from "./DateContactTable";
import ContentWrapper from "../Layout/ContentWrapper";


const DateContact =() =>{
    return <ContentWrapper>
        <DateContactTop />
        <DateContactTable />
        <PaginationModel />
    </ContentWrapper>
}
export default DateContact;
