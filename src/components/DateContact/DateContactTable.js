import {Card, CardBody, CardHeader, Table} from "reactstrap";
import React, {useEffect, useState} from "react";
// import Data from "../../fake_data.json";
import ReactPaginate from 'react-paginate';
// import MesajeClienti from "../ContactMesaje/MesajeClienti";
import './dateContact.scss'


const DateContactTable = () => {
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState([10]);
    const [pageNumberLimit, setPageNumberLimit] = useState(10);
    const [maxPageNumberLimit, setMaxPageNUmberLimit] = useState(10);
    const [minPageNumberLimit, setMinPageNUmberLimit] = useState(0);


    const handleClick = (e) => {
        setCurrentPage(Number(e.target.id));
    };
    const pages = [];
    for (let i = 1; i <= Math.ceil(data.length / itemsPerPage); i++) {
        pages.push(i);
    }
    const renderPageNumbers = pages.map((item) => {

        if (item < maxPageNumberLimit + 1 && item > minPageNumberLimit) {
            return <li key={item} id={item} onClick={handleClick}
                       className={currentPage === item ? 'active-number' : null}>{item} </li>
        } else {
            return null
        }
    })

    const renderData = (data) => {
        return <>{data.map((item) => {
            return <tbody key={item.id}>
            <tr>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.userId}</td>
                <td>{item.id}</td>
            </tr>
            </tbody>
        })}</>
    }

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
    const handleNextBtn = () => {
        setCurrentPage(currentPage + 1);
        if (currentPage + 1 > maxPageNumberLimit) {
            setMaxPageNUmberLimit(maxPageNumberLimit + pageNumberLimit)
            setMinPageNUmberLimit(minPageNumberLimit + pageNumberLimit)
        }
    };
    const handlePrevBtn = () => {
        setCurrentPage(currentPage - 1);
        if ((currentPage - 1) % pageNumberLimit === 0) {
            setMaxPageNUmberLimit(maxPageNumberLimit - pageNumberLimit)
            setMinPageNUmberLimit(minPageNumberLimit - pageNumberLimit)
        }
    };

    let info = 'https://jsonplaceholder.typicode.com/todos';
    // let info = 'https://www.googleapis.com/books/v1/mylibrary/bookshelves/shelf/volumes';
    // let info ='https://www.googleapis.com/books/v1/volumes?q=harry+potter&callback=handleResponse'
    useEffect(() => {
        fetch(info).then((response) => response.json()).then((json) => setData(json));
    }, [])


    return (<>
            <Card className="card-default">
                <CardHeader></CardHeader>
                <CardBody>
                    <Table striped responsive>
                        <thead>
                        <tr>
                            <th>Nr Contact</th>
                            <th>Tip Contact</th>
                            <th>User Ip</th>
                            <th>Data</th>
                        </tr>
                        </thead>
                        {renderData(currentItems)}
                    </Table>
                </CardBody>
            </Card>
            <ul className='page-numbers'>
                <li>
                    <button onClick={handlePrevBtn}
                            disabled={currentPage === pages[0]}
                            className='prev-btn'
                    >prev
                    </button>
                </li>
                {renderPageNumbers}
                <li>
                    <button onClick={handleNextBtn}
                            disabled={currentPage === pages[pages.length - 1]}
                            className='next-btn'
                    >next
                    </button>
                </li>
            </ul>
        </>
    )
}
export default DateContactTable;
// return <li key={item} id={item} onClick={handleClick} className={currentPage === item ? 'active-number': null}>{item} </li>
//
// 25
