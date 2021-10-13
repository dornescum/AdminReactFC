import React, {useState, useContext} from 'react';
const data = [
	{id:1, name: "John"},
	{id:2, name: "Bobo"},
	{id:3, name: "Mary"},
	{id:4, name: "Tina"},
]

const PersonContext = React.createContext();
// two components provider, consumer


const ContextApi = () => {
	const [people, setPeople]= useState(data);

	const removePerson=(id)=>{
		return setPeople((people)=> people.filter((person)=> person.id !== id))
	}
	//{{}} !!!
	return <PersonContext.Provider value={{removePerson}}>
		<h1>Context Api</h1>
		<List people={people}/>
	</PersonContext.Provider>
}

const List =({people})=>{
	return <>
		{people.map((person)=>{
			return <Single key={person.id} {...person} />
		})}
	</>
}

const Single =({id, name})=>{
	const {removePerson} = useContext(PersonContext)

	return <div key={id} style={{display: 'flex', padding: '2rem', justifyContent: 'space-around'}}>
		<h4 style={{padding: '1rem'}}>{name}</h4>
		<button onClick={()=>removePerson(id)}>remove</button>
	</div>

};

export default ContextApi;