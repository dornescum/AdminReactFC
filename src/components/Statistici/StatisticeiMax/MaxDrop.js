import React, {useState, useEffect} from 'react'


const MaxDrop = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        const swapi = 'https://swapi.dev/api/people/1/ '
        // fetch('data/info_2018.json')
        fetch(swapi)
            // .then(res => res.json())
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result)
                    const array = Object.entries(result)
                    // setIsLoaded(true);
                    setData(array);
                },
                (error) => {
                    // setIsLoaded(true);
                    // setError(error);
                    console.log(error)
                }
            )
    }, [])

    const titleChangeHandler = (e) => {
        console.log(e.target.value);
        console.log('max');
        setData([e.target.value]);
    }

    // const submitHandler = (e) => {
    //     e.preventDefault();
    //    const filterMonth = data;
    //     console.log(filterMonth);
    //     console.log('mihai');
    // }
    return <form action="">
        <div>
            <select onChange={titleChangeHandler}>
                {data.map((item) => {
                    return <option key={item} >{item}</option>
                })}
            </select>
        </div>
        <div>
            {data.map((item)=>{
                return <p key={item}>{item}</p>
            })}
        </div>
    </form>

}
export default MaxDrop;

