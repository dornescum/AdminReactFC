import React, {useState, useEffect} from 'react'
const data = [
	{id:1, name: "John"},
	{id:2, name: "Bobo"},
	{id:3, name: "Mary"},
	{id:4, name: "Tina"},
]

const PropDrilling = () => {
	const [people, setPeople]= useState(data);

	const removePerson=(id)=>{
		return setPeople((people)=> people.filter((person)=> person.id !== id))
	}
return <>
	<h1>props drilling</h1>
	<List people={people} removePerson={removePerson}/>
</>
}

const List =({people, removePerson})=>{
		 return <>
			 {people.map((person)=>{
				 return <Single key={person.id} {...person} removePerson={removePerson}/>
			 })}
		 </>
}

const Single =({id, name, removePerson})=>{
		return <div key={id} style={{display: 'flex', padding: '2rem', justifyContent: 'space-around'}}>
			<h4 style={{padding: '1rem'}}>{name}</h4>
			<button onClick={()=>removePerson(id)}>remove</button>
		</div>
}
export default PropDrilling;

