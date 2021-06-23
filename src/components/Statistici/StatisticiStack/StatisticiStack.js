import React, {useState, useEffect} from 'react'
import Data from '../../../Data/test.json'


const StatisticiStack = () => {

    // const options = [
    //     "Monty Python and the Holy Grail",
    //     "Monty Python's Life of Brian",
    //     "Monty Python's The Meaning of Life"
    // ];
    useEffect(() => {
        const swapi  ='https://swapi.dev/api/people/1/ '
        // fetch('data/info_2018.json')
        fetch(swapi)
            // .then(res => res.json())
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result)
                        const array = Object.entries(result)
                    // setIsLoaded(true);
                    setSelectedOption(array);
                },
                (error) => {
                    // setIsLoaded(true);
                    // setError(error);
                    console.log(error)
                }
            )
    }, [])
    // const [selectedOption, setSelectedOption] = useState(options[0]);
    const [selectedOption, setSelectedOption] = useState([]);

    return <div>
        <h1>Select Example</h1>
        <select
            value={selectedOption} defaultValue='' multiple={false}
            onChange={(e) => setSelectedOption(e.target.value)}
        >
            {selectedOption.map((option) => (
                <option key={option} value={option} >
                    {option}
                </option>
            ))}
        </select>
        <span>Selected option: {selectedOption}</span>
    </div>

}
export default StatisticiStack;
