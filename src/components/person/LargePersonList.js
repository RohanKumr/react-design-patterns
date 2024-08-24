import React from 'react'

export default function LargePersonList({ person }) {
  const { name, age, hairColor, hobbies } = person;
  return (
    <div>
      <h3>{ name }</h3>
      <p>Age: { age }</p>
      <p>Hair Color: { hairColor }</p>
      <p>Hobbies: </p>
      <ul>
        { hobbies.map(hobby => <li key={ hobby } >{ hobby }</li>) }
      </ul>
    </div>
  )
}
