import ContentWrapper from "../Layout/ContentWrapper";
import {CardBody, Card, Col, CardHeader, CardFooter, Row, PaginationItem, PaginationLink} from "reactstrap";
import MesajeInfo from "./MesajeInfo";
import MesajeClienti from "./MesajeClienti";
// import PaginationModel from "./PaginationModel";
import Data from '../../fake_data.json';
import React, {useState} from "react";
import ReactPaginate from 'react-paginate';

import './mesaje.scss'

const ContactMesaje = () => {
    const [users, setUsers] = useState(Data.slice(0, 2000));
    const [pageNumber, setPageNumber] = useState(0);

    const userPerPage = 10;
    const pagesVisited = pageNumber * userPerPage;
    const displayUsers = users.slice(pagesVisited, pagesVisited + userPerPage).map((user)=>{
          return <MesajeClienti
              first_name={user.first_name} last_name={user.last_name}
              date={user.date} message={user.text} key={user.id} id={user.id}/>
    })
    const pageCount =Math.ceil(users.length /userPerPage );
    const changePage =({selected})=>{
        setPageNumber(selected)
    }
    return <ContentWrapper>
        <div className="content-heading">
            <div>Lista mesaje</div>
        </div>
        <MesajeInfo/>
        <Card>
            <CardBody>
                <fieldset>
                    {displayUsers}
                </fieldset>
            </CardBody>
        </Card>
        <ReactPaginate
        previousLabel={'Previous'}
        nextLabel={'Next'}
        pageCount={pageCount}
        onPageChange = {changePage}
        containerClassName ={'paginationBtn'}
        previousLinkClassName = {'previousBtn'}
        nextLinkClassName = {'nextBtn'}
        disabledClasseName ={'paginationDisabled'}
        activeLinkClassName = {'paginationActive'}
        />
    </ContentWrapper>
}

export default ContactMesaje;
