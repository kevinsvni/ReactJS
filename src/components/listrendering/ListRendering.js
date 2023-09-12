import React from 'react'
import ChildListRender from './ChildListRender'

function ListRendering() {

    const persons = [
        {
            id: 1,
            name: 'Kevin',
            age: 26,
            skill: 'React'
        },
        {
            id: 2,
            name: 'Bhumi',
            age: 26,
            skill: 'React'
        },
        {
            id: 3,
            name: 'Dhruvin',
            age: 28,
            skill: 'Electric'
        },
        {
            id: 4,
            name: 'Rushika',
            age: 28,
            skill: 'Java'
        }]

    const personList = persons.map((person, index) => <ChildListRender index={index} key={person.id} person={person}/>)

    return (
        <div>
            <h1>List Rendering</h1>
            {personList}
        </div>
    )
}

export default ListRendering