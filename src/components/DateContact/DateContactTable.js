import {Card, CardBody, CardHeader, Table} from "reactstrap";
import React, {useEffect, useState} from "react";

const DateContactTable = () => {
    const [data, setData] = useState([]);

    const renderData = (data) => {
        return <>{data.map((item) => {
            return <tbody key={item.id}>
            <tr>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.userId}</td>
                <td>{item.userId}</td>
            </tr>
            </tbody>
        })}</>
    }

    let info = 'https://jsonplaceholder.typicode.com/todos';
    // let info = 'https://www.googleapis.com/books/v1/mylibrary/bookshelves/shelf/volumes';
    // let info ='https://www.googleapis.com/books/v1/volumes?q=harry+potter&callback=handleResponse'
    useEffect(() => {
        fetch(info).then((response) => response.json()).then((json) => setData(json));
    }, [])


    return <Card className="card-default">
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
                {renderData(data)}
            </Table>
        </CardBody>
    </Card>
}
export default DateContactTable;
