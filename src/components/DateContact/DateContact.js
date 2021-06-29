// import PaginationModel from "../ContactMesaje/PaginationModel";
import DateContactTop from "./DateContactTop";
import DateContactTable from "./DateContactTable";
import DateInfo from "./DateInfo";
import ContentWrapper from "../Layout/ContentWrapper";
import ReactPaginate from 'react-paginate';
import {useState} from "react";
import Data from "../../fake_data.json";



const DateContact =() =>{
    const [users, setUsers] = useState(Data.slice(0, 2000));
    const [pageNumber, setPageNumber] = useState(0);

    const userPerPage = 10;
    const pagesVisited = pageNumber * userPerPage;


    return <ContentWrapper>
        <DateContactTop />
        <DateInfo />
        <DateContactTable />
        {/*<PaginationModel />*/}



    </ContentWrapper>
}
export default DateContact;
