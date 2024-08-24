import React from 'react'

export default function OrderedList({
  items,
  resourceName,
  itemComponent: ItemComponent
}) {
  return (
    <>
      { items?.map((item, i) => <>
        <h2>{ i + 1 }</h2>
        <ItemComponent key={ i } { ...{ [resourceName]: item } } />
      </>) }
    </>
  )
}
