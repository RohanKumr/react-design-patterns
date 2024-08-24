import React from 'react'

export default function LargeProductList({ products }) {
  const { name, price, description, rating } = products;
  return (
    <>
      <div>Name : { name }</div>
      <div>Price: { price }</div>
      <div>Description : { description }</div>
      <div>Rating : { rating }</div>
    </>
  )
}
