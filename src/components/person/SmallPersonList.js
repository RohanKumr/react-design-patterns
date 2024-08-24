import React from 'react'

export default function SmallProductList({ person }) {
  const { name, age } = person
  return (
    <div>Name: { name } , Age: { age }</div>
  )
}
