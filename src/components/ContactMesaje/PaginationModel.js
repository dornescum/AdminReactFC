import {Col, PaginationItem, PaginationLink, Row, Pagination} from "reactstrap";
import {useEffect, useState} from "react";

const PaginationModel = () => {
    const [data, setData] = useState();
    let info = 'https://jsonplaceholder.typicode.com/todos';
    useEffect(() => {
        fetch(info).then((response) => response.json()).then((json) => setData(json));
    }, [])
    console.log(data)

  const renderData =(data)=>{
        return <ul>
            {data.map((item)=>{
                return <li key={item.id}>{item.title}</li>
            })}
        </ul>
  }

    return <>
            {/*{renderData(data)}*/}
        <h1>Pagination</h1>
        </>
}
export default PaginationModel;
