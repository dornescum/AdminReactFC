import {Col, PaginationItem, PaginationLink, Row, Pagination} from "reactstrap";

const PaginationModel =()=>{
    return <Row>

        <Col lg={12}>
            <Pagination className='pagination-center'>
                <PaginationItem>
                    <PaginationLink previous href="/despre-firma" />
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href="/date-fiscale">
                        1
                    </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href="#">
                        2
                    </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href="#">
                        3
                    </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href="#">
                        4
                    </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href="#">
                        5
                    </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink next href="#" />
                </PaginationItem>
            </Pagination>
        </Col>

    </Row>


}
export default PaginationModel;
