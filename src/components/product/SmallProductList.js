import React from 'react'

export default function SmallProductList({ products }) {
  const { name, price } = products;
  return (
    <div>Name : { name }, Price: { price }</div>
  )
}
