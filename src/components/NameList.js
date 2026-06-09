import React from 'react'
import Person from './Person'

function NameList() {
    const persons = [
        {
            id: 1,
            name: "Ajmal", 
            age: 20,
            skill: "Developer"
        },
        {
            id: 1,
            name: "Adhnan", 
            age: 17,
            skill: "Designer"
        }
    ]

    const personList = persons.map(person => (
        <Person key={person.id} person={person} />
    )) 
  return (
    <div>
      {personList}
    </div>
  )
}

export default NameList
