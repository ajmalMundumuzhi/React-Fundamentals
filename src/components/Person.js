import React from 'react'

function Person({person}) {
  return (
    <div>
      <h1>I am {person.name} age {person.age} skill {person.skill}</h1>
    </div>
  )
}

export default Person
